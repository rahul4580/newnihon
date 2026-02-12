'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import { useUser, SignIn, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
  CheckSquare,
  CalendarDays,
  Calendar,
  CheckCircle2,
  Inbox,
  Plus,
  Sun,
  Moon,
  Search,
  X,
  Menu,
  Flag,
  Bell,
  RefreshCw,
} from 'lucide-react';

const TASK_PRIORITIES = ['High', 'Medium', 'Low'];
const TASK_RECURRENCE = ['none', 'daily', 'weekly', 'monthly'];
const DEFAULT_CATEGORIES = [
  { id: 'work', name: 'Work', color: '#3b82f6' },
  { id: 'study', name: 'Study', color: '#f59e0b' },
  { id: 'personal', name: 'Personal', color: '#10b981' },
];

const toInputDateTime = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const fromInputDateTime = (value) => {
  if (!value) return '';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return '';
  return d.toISOString();
};

const addMonths = (date, months) => {
  const d = new Date(date);
  const day = d.getDate();
  d.setMonth(d.getMonth() + months);
  if (d.getDate() < day) d.setDate(0);
  return d;
};

const addDays = (date, days) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};

const startOfDay = (date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

const startOfWeek = (date) => {
  const d = startOfDay(date);
  d.setDate(d.getDate() - d.getDay());
  return d;
};

const getDayKey = (date) => {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return '';
  d.setHours(0, 0, 0, 0);
  return d.toISOString().slice(0, 10);
};

const getWeekData = (tasks, startDate, endDate) => {
  const week = [];
  const current = new Date(startDate);
  
  while (current <= endDate) {
    const dayKey = getDayKey(current);
    const dayTasks = tasks.filter(t => {
      if (t.updatedAt) {
        const taskDate = new Date(t.updatedAt);
        return getDayKey(taskDate) === dayKey;
      }
      return false;
    });
    
    const completedTasks = dayTasks.filter(t => t.status === 'completed');
    const totalTasks = dayTasks.length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks.length / totalTasks) * 100) : 0;
    
    week.push({
      date: new Date(current),
      dayKey,
      total: totalTasks,
      completed: completedTasks.length,
      percentage: completionRate,
      level: getContributionLevel(completionRate)
    });
    
    current.setDate(current.getDate() + 1);
  }
  
  return week;
};

const getContributionLevel = (percentage) => {
  if (percentage === 0) return 0;
  if (percentage <= 25) return 1;
  if (percentage <= 50) return 2;
  if (percentage <= 75) return 3;
  return 4;
};

const getYearData = (tasks) => {
  const now = new Date();
  const startDate = new Date(now.getFullYear(), 0, 1);
  const endDate = new Date(now.getFullYear(), 11, 31);
  return getWeekData(tasks, startDate, endDate);
};

const uid = () => `${Date.now()}_${Math.random().toString(16).slice(2)}`;

const makeTask = (patch = {}) => ({
  id: uid(),
  title: '',
  description: '',
  dueAt: '',
  reminderAt: '',
  recurrence: 'none',
  categoryId: 'work',
  priority: 'Medium',
  color: '',
  status: 'todo',
  progress: 0,
  reminded: false,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  ...patch,
});

export default function NotionPage() {
  const router = useRouter();
  const { user, isLoaded, isSignedIn } = useUser();
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [isDark, setIsDark] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [guideOpen, setGuideOpen] = useState(false);
  const [templatesOpen, setTemplatesOpen] = useState(false);
  const [fitnessOpen, setFitnessOpen] = useState(false);
  const [imagesOpen, setImagesOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(makeTask());
  const [notifPermission, setNotifPermission] = useState('default');
  const [showContributions, setShowContributions] = useState(false);
  const newCatRef = useRef(null);
  const [heatmapRange, setHeatmapRange] = useState(365);
  const [heatmapPalette, setHeatmapPalette] = useState('green');
  const [uiStyle, setUiStyle] = useState('monochrome');
  const [uiLanguage, setUiLanguage] = useState('en');
  const [zenMode, setZenMode] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const styleMap = useMemo(() => ({
    clean: { container: '', card: '' },
    minimal: { container: 'bg-white dark:bg-black', card: 'border-none shadow-none' },
    vibrant: { container: 'bg-gradient-to-b from-fuchsia-100 to-indigo-100 dark:from-black dark:to-black', card: 'border-fuchsia-300' },
    glass: { container: '', card: 'bg-white/60 dark:bg-white/10 backdrop-blur-md' },
    neo: { container: '', card: 'shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:shadow-none' },
    usa: { container: 'bg-gradient-to-b from-red-50 to-blue-50 dark:from-black dark:to-black', card: 'border-blue-400' },
    uk: { container: 'bg-gradient-to-b from-slate-100 to-red-50 dark:from-black dark:to-black', card: 'border-red-400' },
    nihon: { container: 'bg-white dark:bg-black', card: 'border-red-500', font: 'font-noto' },
    darkpro: { container: 'bg-black text-white', card: 'bg-zinc-900 border-zinc-700' },
    pastel: { container: 'bg-gradient-to-b from-pink-50 to-emerald-50 dark:from-black dark:to-black', card: 'border-emerald-300' },
    contrast: { container: 'bg-white text-black dark:bg-black dark:text-white', card: 'border-black dark:border-white' },
    google: { container: 'bg-slate-50 dark:bg-zinc-950', card: 'bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow', font: 'font-sans' },
    monochrome: { container: 'bg-white text-black dark:bg-black dark:text-white', card: 'bg-white dark:bg-black border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5', font: 'font-sans' },
  }), []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const saved = window.localStorage.getItem('taskui:style');
    const lang = window.localStorage.getItem('taskui:lang');
    const zen = window.localStorage.getItem('taskui:zen') === 'true';
    const collapsed = window.localStorage.getItem('taskui:sidebarCollapsed') === 'true';
    if (saved) setUiStyle(saved);
    if (lang) setUiLanguage(lang);
    setZenMode(zen);
    setSidebarCollapsed(collapsed);
  }, []);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem('taskui:style', uiStyle);
    window.localStorage.setItem('taskui:lang', uiLanguage);
    window.localStorage.setItem('taskui:zen', String(zenMode));
    window.localStorage.setItem('taskui:sidebarCollapsed', String(sidebarCollapsed));
  }, [uiStyle, uiLanguage, zenMode, sidebarCollapsed]);
  const downloadSVG = (svg, name = 'image.svg') => {
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };
  const svgToPngAndDownload = async (svg, width, height, name = 'image.png') => {
    const svgBlob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    const img = new Image();
    await new Promise((resolve) => { img.onload = resolve; img.src = url; });
    URL.revokeObjectURL(url);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0);
    canvas.toBlob((blob) => {
      const url2 = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url2;
      a.download = name;
      a.click();
      URL.revokeObjectURL(url2);
    }, 'image/png');
  };
  const buildMeasurementsSVG = (w = 800, h = 600) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <text x="40" y="40" font-size="20" font-weight="700" fill="#0f172a">${uiLanguage === 'jp' ? '身体測定図' : 'Body Measurements Diagram'}</text>
      <line x1="150" y1="80" x2="150" y2="520" stroke="#334155" stroke-width="4"/>
      <circle cx="150" cy="120" r="40" fill="#94a3b8"/>
      <rect x="110" y="160" width="80" height="140" rx="10" fill="#cbd5e1"/>
      <rect x="90" y="300" width="120" height="160" rx="12" fill="#cbd5e1"/>
      <line x1="150" y1="200" x2="260" y2="200" stroke="#ef4444" stroke-width="3"/>
      <text x="270" y="205" font-size="14" fill="#ef4444">${uiLanguage === 'jp' ? '胸囲' : 'Chest'}</text>
      <line x1="150" y1="260" x2="260" y2="260" stroke="#10b981" stroke-width="3"/>
      <text x="270" y="265" font-size="14" fill="#10b981">${uiLanguage === 'jp' ? 'ウエスト' : 'Waist'}</text>
      <line x1="150" y1="380" x2="260" y2="380" stroke="#3b82f6" stroke-width="3"/>
      <text x="270" y="385" font-size="14" fill="#3b82f6">${uiLanguage === 'jp' ? 'ヒップ' : 'Hips'}</text>
      <line x1="150" y1="520" x2="260" y2="520" stroke="#8b5cf6" stroke-width="3"/>
      <text x="270" y="525" font-size="14" fill="#8b5cf6">${uiLanguage === 'jp' ? '身長' : 'Height'}</text>
    </svg>`;
  };
  const buildBMIChartSVG = (w = 800, h = 300) => {
    const blocks = [
      { label: uiLanguage === 'jp' ? '低体重' : 'Underweight', color: '#93c5fd', width: 0.185 },
      { label: uiLanguage === 'jp' ? '標準' : 'Normal', color: '#86efac', width: 0.249 },
      { label: uiLanguage === 'jp' ? '肥満予備群' : 'Overweight', color: '#fde68a', width: 0.299 },
      { label: uiLanguage === 'jp' ? '肥満' : 'Obese', color: '#fca5a5', width: 0.217 },
    ];
    let x = 40; const y = 80; const totalW = w - 80; const height = 120;
    const rects = blocks.map(b => {
      const bw = Math.round(b.width * totalW);
      const r = `<rect x="${x}" y="${y}" width="${bw}" height="${height}" fill="${b.color}" rx="10"/><text x="${x + 8}" y="${y + 28}" font-size="14" font-weight="600" fill="#0f172a">${b.label}</text>`;
      x += bw;
      return r;
    }).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <text x="40" y="40" font-size="20" font-weight="700" fill="#0f172a">${uiLanguage === 'jp' ? 'BMI チャート' : 'BMI Chart'}</text>
      ${rects}
      <text x="40" y="${y + height + 40}" font-size="12" fill="#334155">kg/m² • (lbs/in²) × 703</text>
    </svg>`;
  };
  const buildWeeklyScheduleSVG = (w = 1000, h = 420) => {
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const blocks = [
      { day: 0, label: 'Cardio + Core', color: '#bfdbfe' },
      { day: 1, label: 'Upper + HIIT', color: '#fecaca' },
      { day: 2, label: 'Cardio', color: '#fde68a' },
      { day: 3, label: 'Lower + Core', color: '#bbf7d0' },
      { day: 4, label: 'Full HIIT', color: '#d8b4fe' },
      { day: 5, label: 'Active Recovery', color: '#f5d0fe' },
      { day: 6, label: 'Rest / Light', color: '#e5e7eb' },
    ];
    const pad = 20; const colW = (w - pad * 2) / 7; const top = 100; const boxH = 220;
    const cells = blocks.map((b, i) => {
      const x = pad + i * colW;
      return `<rect x="${x}" y="${top}" width="${colW - 10}" height="${boxH}" rx="16" fill="${b.color}"/>
              <text x="${x + 12}" y="${top - 10}" font-size="14" font-weight="700" fill="#0f172a">${days[i]}</text>
              <text x="${x + 12}" y="${top + 36}" font-size="16" font-weight="600" fill="#111827">${b.label}</text>`;
    }).join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <text x="20" y="40" font-size="22" font-weight="800" fill="#0f172a">${uiLanguage === 'jp' ? '週間スケジュール（減量）' : 'Weekly Schedule (Weight Loss)'}</text>
      ${cells}
    </svg>`;
  };
  const buildBadgeSVG = (days = 30, w = 400, h = 400) => {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#60a5fa"/><stop offset="100%" stop-color="#a78bfa"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="#f8fafc"/>
      <circle cx="${w/2}" cy="${h/2}" r="${Math.min(w,h)/2 - 30}" fill="url(#g)" />
      <text x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="central" font-size="120" font-weight="900" fill="#ffffff">${days}</text>
      <text x="${w/2}" y="${h - 40}" text-anchor="middle" font-size="22" font-weight="700" fill="#334155">${uiLanguage === 'jp' ? '連続記録' : 'Streak Days'}</text>
    </svg>`;
  };

  const featuresData = useMemo(() => {
    return [
      {
        title: 'Core Habit Tracking',
        sections: [
          {
            title: 'Habit Management',
            items: [
              'Quick Add Habit',
              'Habit Templates',
              'Custom Habit Icons',
              'Habit Categories/Tags',
              'Habit Description',
              'Habit Goals',
              'Habit Archiving',
              'Bulk Actions',
              'Habit Reordering',
              'Habit Duplicating',
            ],
          },
          {
            title: 'Daily Tracking',
            items: [
              'One-Click Check-In',
              'Partial Completion',
              'Time-Based Tracking',
              'Number Tracking',
              'Notes Per Check-In',
              'Photo Attachments',
              'Mood Tracking',
              'Skip/Break Days',
              'Undo Check-Ins',
              'Future Planning',
            ],
          },
        ],
      },
      {
        title: 'GitHub-Style Analytics',
        sections: [
          {
            title: 'Contribution Heatmap',
            items: [
              '365-Day Grid',
              'Color Intensity Levels',
              'Multiple Color Schemes',
              'Hover Tooltips',
              'Month Labels',
              'Day of Week Labels',
              'Click to View Day',
              'Zoom Levels',
              'Multiple Habit Heatmaps',
              'Export Heatmap',
            ],
          },
          {
            title: 'Streak Tracking',
            items: [
              'Current Streak Counter',
              'Longest Streak',
              'Streak History',
              'Streak Milestones',
              'Streak Recovery',
              'Multiple Streak Types',
              'Streak Freeze',
              'Streak Leaderboard',
              'Streak Notifications',
              'Streak Calendar View',
            ],
          },
          {
            title: 'Statistics & Insights',
            items: [
              'Completion Rate',
              'Total Check-Ins',
              'Best Day of Week',
              'Best Time of Day',
              'Monthly Reports',
              'Year in Review',
              'Trend Graphs',
              'Habit Correlation',
              'Productivity Score',
              'Time Investment',
              'Consistency Score',
              'Forecast Predictions',
            ],
          },
        ],
      },
      {
        title: 'Calendar & Scheduling',
        sections: [
          {
            title: 'Calendar Views',
            items: [
              'Month View',
              'Week View',
              'Day View',
              'Agenda View',
              'Timeline View',
              'Multi-Month View',
            ],
          },
          {
            title: 'Scheduling',
            items: [
              'Daily Habits',
              'Weekly Habits',
              'Custom Frequency',
              'Time Blocking',
              'Recurring Patterns',
              'Seasonal Habits',
              'Habit Chains',
              'Smart Scheduling',
              'Deadline Tracking',
            ],
          },
        ],
      },
      {
        title: 'Reminders & Notifications',
        sections: [
          {
            title: 'Notification Types',
            items: [
              'Daily Reminders',
              'Streak Warnings',
              'Milestone Celebrations',
              'Weekly Summary',
              'Morning Motivation',
              'Evening Check-In',
              'Custom Messages',
              'Quote of the Day',
            ],
          },
          {
            title: 'Notification Settings',
            items: [
              'Smart Timing',
              'Quiet Hours',
              'Multiple Reminders',
              'Snooze Options',
              'Platform Sync',
              'Sound Customization',
              'Vibration Patterns',
              'Do Not Disturb Integration',
            ],
          },
        ],
      },
      {
        title: 'Gamification & Motivation',
        sections: [
          {
            title: 'Rewards System',
            items: [
              'Achievement Badges',
              'Level System',
              'Experience Points',
              'Streak Multipliers',
              'Daily Challenges',
              'Trophy Case',
              'Rare Badges',
              'Custom Rewards',
            ],
          },
          {
            title: 'Progress Visualization',
            items: [
              'Progress Rings',
              'Progress Bars',
              'Completion Percentages',
              'Goal Countdown',
              'Before/After Comparisons',
              'Growth Charts',
              'Habit Trees',
              'Constellation Maps',
            ],
          },
          {
            title: 'Social & Accountability',
            items: [
              'Accountability Partners',
              'Group Challenges',
            ],
          },
        ],
      },
    ];
  }, []);
  const taskTemplates = useMemo(() => {
    return [
      {
        label: 'Fitness: Workout',
        patch: { title: 'Workout', description: 'Strength + cardio session', recurrence: 'daily', categoryId: 'personal', color: '#ef4444' },
      },
      {
        label: 'Health: Drink Water',
        patch: { title: 'Hydration', description: 'Drink 8 glasses', recurrence: 'daily', categoryId: 'personal', color: '#3b82f6' },
      },
      {
        label: 'Productivity: Deep Work',
        patch: { title: 'Deep Work', description: 'Focused session 60 mins', recurrence: 'daily', categoryId: 'work', color: '#10b981' },
      },
      {
        label: 'Learning: Read 20 pages',
        patch: { title: 'Read', description: 'Read 20 pages', recurrence: 'daily', categoryId: 'study', color: '#f59e0b' },
      },
    ];
  }, []);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dark = window.localStorage.getItem('taskui:theme') === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  useEffect(() => {
    if (!isLoaded || !user || !isSignedIn) {
      setTasks([]);
      setCategories(DEFAULT_CATEGORIES);
      return;
    }
    if (typeof window === 'undefined') return;
    const key = `taskui:${user.id}`;
    try {
      const raw = window.localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : { tasks: [], categories: DEFAULT_CATEGORIES };
      setTasks(parsed.tasks || []);
      setCategories(parsed.categories && parsed.categories.length ? parsed.categories : DEFAULT_CATEGORIES);
    } catch {
      setTasks([]);
      setCategories(DEFAULT_CATEGORIES);
    }
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    if (!isLoaded || !user || !isSignedIn) return;
    if (typeof window === 'undefined') return;
    const key = `taskui:${user.id}`;
    window.localStorage.setItem(
      key,
      JSON.stringify({ tasks, categories })
    );
  }, [tasks, categories, isLoaded, isSignedIn, user]);

  useEffect(() => {
    if (typeof window === 'undefined' || !('Notification' in window)) return;
    setNotifPermission(Notification.permission);
  }, []);

  useEffect(() => {
    if (!tasks.length) return;
    if (typeof window === 'undefined' || !('Notification' in window)) return;

    const tick = () => {
      const now = Date.now();
      let changed = false;
      const next = tasks.map((t) => {
        if (t.status === 'completed' || t.reminded || !t.reminderAt) return t;
        const at = new Date(t.reminderAt).getTime();
        if (!Number.isFinite(at)) return t;
        if (at <= now) {
          changed = true;
          try {
            if (Notification.permission === 'granted') {
              new Notification('Task Reminder', { body: t.title || 'Task reminder' });
            }
          } catch {}
          return { ...t, reminded: true, updatedAt: Date.now() };
        }
        return t;
      });
      if (changed) setTasks(next);
    };

    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    let list = [...tasks];
    const now = new Date();
    if (activeFilter === 'today') {
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(end.getDate() + 1);
      list = list.filter((t) => t.dueAt && new Date(t.dueAt) >= start && new Date(t.dueAt) < end);
    } else if (activeFilter === 'week') {
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(end.getDate() + 7);
      list = list.filter((t) => t.dueAt && new Date(t.dueAt) >= start && new Date(t.dueAt) < end);
    } else if (activeFilter === 'completed') {
      list = list.filter((t) => t.status === 'completed');
    } else if (activeFilter !== 'all') {
      list = list.filter((t) => t.categoryId === activeFilter);
    } else {
      list = list.filter((t) => t.status !== 'completed');
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((t) =>
        (t.title || '').toLowerCase().includes(q) ||
        (t.description || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [tasks, activeFilter, search]);

  const taskCounts = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const week = new Date(today);
    week.setDate(week.getDate() + 7);

    return {
      all: tasks.filter((t) => t.status !== 'completed').length,
      today: tasks.filter((t) => t.dueAt && new Date(t.dueAt) >= today && new Date(t.dueAt) < tomorrow && t.status !== 'completed').length,
      week: tasks.filter((t) => t.dueAt && new Date(t.dueAt) >= today && new Date(t.dueAt) < week && t.status !== 'completed').length,
      completed: tasks.filter((t) => t.status === 'completed').length,
    };
  }, [tasks]);

  const contributionData = useMemo(() => {
    return getYearData(tasks);
  }, [tasks]);

  const calculateCurrentStreak = useCallback(() => {
    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = contributionData.length - 1; i >= 0; i--) {
      const day = contributionData[i];
      const dayDate = new Date(day.date);
      dayDate.setHours(0, 0, 0, 0);
      
      if (dayDate.getTime() === today.getTime() || dayDate.getTime() === today.getTime() - (86400000 * streak)) {
        if (day.percentage > 0) {
          streak++;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    
    return streak;
  }, [contributionData]);

  const overallStats = useMemo(() => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.status === 'completed').length;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const activeDays = contributionData.filter(d => d.total > 0).length;
    const currentStreak = calculateCurrentStreak();
    
    return {
      totalTasks,
      completedTasks,
      completionRate,
      activeDays,
      currentStreak,
      totalDays: contributionData.length
    };
  }, [tasks, contributionData, calculateCurrentStreak]);

  const paletteMap = {
    green: ['#e8f6e9', '#c8eacb', '#97d8a4', '#5cc47a', '#24a148'],
    blue: ['#e6f0ff', '#c7ddff', '#9fc1ff', '#6fa3ff', '#2d7dff'],
    purple: ['#f1e6ff', '#e0c7ff', '#c69fff', '#a66fff', '#7a2dff'],
    neutral: ['#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#404040'],
  };

  const getRangeContributionData = useMemo(() => {
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    const start = new Date(end);
    start.setDate(start.getDate() - (Number(heatmapRange) - 1));
    const days = [];
    const cursor = new Date(start);
    while (cursor <= end) {
      const found = contributionData.find(d => {
        const dd = new Date(d.date);
        dd.setHours(0, 0, 0, 0);
        return dd.getTime() === cursor.getTime();
      });
      if (found) {
        days.push(found);
      } else {
        days.push({
          date: new Date(cursor),
          dayKey: getDayKey(cursor),
          total: 0,
          completed: 0,
          percentage: 0,
          level: 0,
        });
      }
      cursor.setDate(cursor.getDate() + 1);
    }
    return days;
  }, [contributionData, heatmapRange]);

  const calculateLongestStreak = useMemo(() => {
    let longest = 0;
    let current = 0;
    for (let i = 0; i < getRangeContributionData.length; i++) {
      if (getRangeContributionData[i].percentage > 0) {
        current++;
        if (current > longest) longest = current;
      } else {
        current = 0;
      }
    }
    return longest;
  }, [getRangeContributionData]);

  const milestoneBadges = useMemo(() => {
    const milestones = [7, 30, 100, 365];
    const achieved = milestones.filter(m => calculateLongestStreak >= m || overallStats.currentStreak >= m);
    return achieved;
  }, [calculateLongestStreak, overallStats]);

  const exportHeatmapSVG = () => {
    const days = getRangeContributionData;
    const weeks = Math.ceil(days.length / 7);
    const cell = 12;
    const padding = 4;
    const width = weeks * (cell + 2) + padding * 2;
    const height = 7 * (cell + 2) + padding * 2;
    const colors = paletteMap[heatmapPalette] || paletteMap.green;
    let rects = '';
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < 7; d++) {
        const idx = w * 7 + d;
        const day = days[idx];
        const x = padding + w * (cell + 2);
        const y = padding + d * (cell + 2);
        const level = day ? day.level : 0;
        const fill = level === 0 ? '#eaeaea' : colors[Math.min(level, 4)];
        rects += `<rect x="${x}" y="${y}" width="${cell}" height="${cell}" rx="2" ry="2" fill="${fill}"/>`;
      }
    }
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">${rects}</svg>`;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'habit-heatmap.svg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const openNewTask = () => {
    setEditingId(null);
    setDraft(makeTask());
    setDialogOpen(true);
  };

  const openEditTask = (task) => {
    setEditingId(task.id);
    setDraft({ ...task });
    setDialogOpen(true);
  };

  const saveTask = () => {
    if (!draft.title.trim()) return;
    if (editingId) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editingId ? { ...t, ...draft, updatedAt: Date.now() } : t))
      );
    } else {
      setTasks((prev) => [{ ...draft, id: uid(), createdAt: Date.now(), updatedAt: Date.now() }, ...prev]);
    }
    setDialogOpen(false);
    setEditingId(null);
    setDraft(makeTask());
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (task) => {
    const completed = task.status !== 'completed';
    let next = tasks.map((t) =>
      t.id === task.id ? { ...t, status: completed ? 'completed' : 'todo', updatedAt: Date.now() } : t
    );

    if (completed && task.recurrence && task.recurrence !== 'none') {
      const baseDue = task.dueAt ? new Date(task.dueAt) : new Date();
      let nextDue = new Date(baseDue);
      if (task.recurrence === 'daily') nextDue.setDate(nextDue.getDate() + 1);
      if (task.recurrence === 'weekly') nextDue.setDate(nextDue.getDate() + 7);
      if (task.recurrence === 'monthly') nextDue = addMonths(nextDue, 1);

      let nextReminder = '';
      if (task.reminderAt && task.dueAt) {
        const delta = new Date(task.dueAt).getTime() - new Date(task.reminderAt).getTime();
        if (Number.isFinite(delta)) {
          nextReminder = new Date(nextDue.getTime() - delta).toISOString();
        }
      }

      const newTask = makeTask({
        title: task.title,
        description: task.description,
        dueAt: nextDue.toISOString(),
        reminderAt: nextReminder,
        recurrence: task.recurrence,
        categoryId: task.categoryId,
        priority: task.priority,
        color: task.color,
      });
      next = [newTask, ...next];
    }

    setTasks(next);
  };

  const addCategory = (name) => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const newCat = { id: uid(), name: trimmed, color };
    setCategories((prev) => [...prev, newCat]);
    setActiveFilter(newCat.id);
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('taskui:theme', next ? 'dark' : 'light');
    }
    document.documentElement.classList.toggle('dark', next);
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
        <div className="animate-pulse">Loading Workspace...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black">Sign in to your workspace</h1>
            <p className="text-black/60 dark:text-white/60 text-sm mt-2">Your data stays local on this device.</p>
          </div>
          <SignIn routing="hash" />
        </div>
      </div>
    );
  }

  return (
    <div className={`flex min-h-screen text-black dark:text-white ${styleMap[uiStyle]?.container || 'bg-white dark:bg-black'} ${styleMap[uiStyle]?.font || ''}`}>
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/70 backdrop-blur-lg border-b border-black/10 dark:border-white/10 px-4 py-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center"
          >
            {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <span className="font-black">NihonTask</span>
          <button
            type="button"
            onClick={() => router.back()}
            className="w-9 h-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center"
            aria-label="Back"
            title="Back"
          >
            <span className="text-sm font-black">←</span>
          </button>
        </div>
      )}

      {((!isMobile && !sidebarCollapsed && !zenMode) || sidebarOpen) && (
        <>
          {isMobile && (
            <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setSidebarOpen(false)} />
          )}
          <aside className={`${isMobile ? 'fixed left-0 top-0 z-50 h-full' : ''} w-72 h-screen flex flex-col border-r border-black/10 dark:border-white/10 bg-white dark:bg-black`}>
            <div className="p-4 flex items-center gap-2.5 border-b border-black/10 dark:border-white/10">
              <div className="h-8 w-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center">
                <CheckSquare className="h-4 w-4" />
              </div>
              <span className="text-lg font-black tracking-tight">NihonTask</span>
            </div>

            <div className="flex-1 px-3 py-4 overflow-y-auto">
              <div className="space-y-1">
                {[
                  { id: 'all', label: 'All Tasks', icon: Inbox, count: taskCounts.all },
                  { id: 'today', label: 'Today', icon: CalendarDays, count: taskCounts.today },
                  { id: 'week', label: 'This Week', icon: Calendar, count: taskCounts.week },
                  { id: 'completed', label: 'Completed', icon: CheckCircle2, count: taskCounts.completed },
                  { id: 'contributions', label: 'Contributions', icon: CheckSquare, count: overallStats.activeDays },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => { 
                      if (item.id === 'contributions') {
                        setShowContributions(!showContributions);
                      } else {
                        setActiveFilter(item.id); 
                      }
                      if (isMobile) setSidebarOpen(false); 
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      (item.id === 'contributions' ? showContributions : activeFilter === item.id) ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{item.label}</span>
                    {item.count > 0 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-black/10 dark:border-white/10">
                        {item.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between px-3 mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-black/50 dark:text-white/50">Categories</span>
                  <button
                    type="button"
                    onClick={() => newCatRef.current?.focus()}
                    className="text-black/50 dark:text-white/50 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div className="px-3 mb-2 flex gap-2">
                  <input
                    ref={newCatRef}
                    placeholder="Add category"
                    className="h-8 text-xs w-full rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black px-2"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        addCategory(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="h-8 px-2 rounded-lg border border-black/10 dark:border-white/10 text-xs"
                    onClick={() => {
                      if (newCatRef.current) {
                        addCategory(newCatRef.current.value);
                        newCatRef.current.value = '';
                      }
                    }}
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-0.5">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveFilter(cat.id); if (isMobile) setSidebarOpen(false); }}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeFilter === cat.id ? 'bg-black text-white dark:bg-white dark:text-black font-semibold' : 'hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <div
                        className="h-3 w-3 rounded-full shrink-0"
                        style={{ backgroundColor: uiStyle === 'monochrome' ? (isDark ? '#ffffff' : '#000000') : cat.color }}
                      />
                      <span className="flex-1 text-left truncate">{cat.name}</span>
                    </button>
                  ))}
                  {categories.length === 0 && (
                    <p className="px-3 py-2 text-xs text-black/50 dark:text-white/50">No categories yet</p>
                  )}
                </div>
              </div>
            </div>

            <div className="p-3 border-t border-black/10 dark:border-white/10 space-y-2">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <div className="flex items-center justify-between px-3 py-1">
                <div className="text-xs text-black/50 dark:text-white/50 truncate">{user?.emailAddresses?.[0]?.emailAddress || 'Signed in'}</div>
                <UserButton />
              </div>
            </div>
          </aside>
        </>
      )}

      <main className={`flex-1 flex flex-col overflow-hidden ${isMobile ? 'pt-14' : ''} ${styleMap[uiStyle]?.font || ''}`}>
        <a href="#content" className="sr-only">Skip to content</a>
        <header className="sticky top-0 z-30 px-6 py-4 border-b border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/60 backdrop-blur flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.back()}
              className="h-9 w-9 rounded-lg border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              aria-label="Back"
              title="Back"
            >
              <span className="text-sm font-black">←</span>
            </button>
            <div>
              <h1 className="text-2xl font-black tracking-tight">
                {activeFilter === 'all' && 'All Tasks'}
                {activeFilter === 'today' && 'Today'}
                {activeFilter === 'week' && 'This Week'}
                {activeFilter === 'completed' && 'Completed'}
                {categories.find((c) => c.id === activeFilter)?.name || ''}
              </h1>
              <p className="text-sm text-black/50 dark:text-white/50 mt-0.5">
                {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
          {!zenMode && (<div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40 dark:text-white/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="pl-9 h-9 w-56 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                aria-label="Search tasks"
              />
            </div>
            <button onClick={() => setGuideOpen(true)} className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 text-sm font-semibold">Features Guide</button>
            <button onClick={() => setFitnessOpen(true)} className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 text-sm font-semibold">Fitness Guide</button>
            <button onClick={() => setImagesOpen(true)} className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 text-sm font-semibold">Images</button>
            <select value={uiStyle} onChange={(e) => setUiStyle(e.target.value)} className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm" aria-label="UI Style">
              <option value="clean">Clean</option>
              <option value="minimal">Minimal</option>
              <option value="vibrant">Vibrant</option>
              <option value="glass">Glass</option>
              <option value="neo">Neumorphism</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="nihon">Japan</option>
              <option value="darkpro">Dark Pro</option>
              <option value="pastel">Pastel</option>
              <option value="contrast">High Contrast</option>
              <option value="google">Google</option>
            </select>
            <select value={uiLanguage} onChange={(e) => setUiLanguage(e.target.value)} className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm" aria-label="Language">
              <option value="en">English</option>
              <option value="jp">日本語</option>
            </select>
            <button
              onClick={() => setSidebarCollapsed((v) => !v)}
              className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 text-sm"
              aria-pressed={sidebarCollapsed}
              aria-label={sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
            >
              {sidebarCollapsed ? 'Show Sidebar' : 'Hide Sidebar'}
            </button>
            <button
              onClick={() => setZenMode(true)}
              className="h-9 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-semibold"
              aria-label="Enter Zen Mode"
            >
              Zen Mode
            </button>
            <div className="relative">
              <button
                onClick={() => setTemplatesOpen((v) => !v)}
                className="h-9 px-3 rounded-lg border border-black/10 dark:border-white/10 text-sm font-semibold"
              >
                Templates
              </button>
              {templatesOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-black shadow-lg z-50">
                  <div className="p-2 text-xs font-semibold text-black/60 dark:text-white/60">Quick Add Habit</div>
                  <div className="p-2 space-y-1">
                    {taskTemplates.map((tpl, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setTemplatesOpen(false);
                          setEditingId(null);
                          setDraft(makeTask(tpl.patch));
                          setDialogOpen(true);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-sm"
                      >
                        {tpl.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={openNewTask}
              className="h-9 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-semibold inline-flex items-center gap-1.5"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>)}
        </header>

        <div id="content" className="flex-1 overflow-y-auto px-6 py-6 max-w-5xl mx-auto w-full">
          {showContributions ? (
            <div className="space-y-6">
              <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black">Contribution Activity</h2>
                  <button
                    onClick={() => setShowContributions(false)}
                    className="p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black/60 dark:text-white/60">Range</span>
                    <select
                      value={heatmapRange}
                      onChange={(e) => setHeatmapRange(Number(e.target.value))}
                      className="h-8 px-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-xs"
                    >
                      <option value={30}>Last 30 days</option>
                      <option value={90}>Last 90 days</option>
                      <option value={180}>Last 180 days</option>
                      <option value={365}>Last 365 days</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-black/60 dark:text-white/60">Palette</span>
                    <select
                      value={heatmapPalette}
                      onChange={(e) => setHeatmapPalette(e.target.value)}
                      className="h-8 px-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-xs"
                    >
                      <option value="green">Green</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="neutral">Neutral</option>
                    </select>
                  </div>
                  <button
                    onClick={exportHeatmapSVG}
                    className="h-8 px-3 rounded-lg border border-black/10 dark:border-white/10 text-xs font-semibold"
                  >
                    Export Heatmap (SVG)
                  </button>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-black">{overallStats.totalTasks}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Total Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">{overallStats.completionRate}%</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Completion Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">{overallStats.activeDays}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Active Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">{overallStats.currentStreak}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">Current Streak</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-black/60 dark:text-white/60">Less</span>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map(level => {
                        const colors = paletteMap[heatmapPalette] || paletteMap.green;
                        const fill = level === 0 ? '#eaeaea' : colors[Math.min(level, 4)];
                        return <div key={level} className="w-3 h-3 rounded-sm" style={{ backgroundColor: fill }} />;
                      })}
                    </div>
                    <span className="text-black/60 dark:text-white/60">More</span>
                  </div>
                  
                  <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${Math.ceil(getRangeContributionData.length / 7)}, minmax(0, 1fr))` }}>
                    {Array.from({ length: Math.ceil(getRangeContributionData.length / 7) }, (_, weekIndex) => {
                      const weekDays = Array.from({ length: 7 }, (_, dayIndex) => {
                        const idx = weekIndex * 7 + dayIndex;
                        const dayData = getRangeContributionData[idx];
                        const colors = paletteMap[heatmapPalette] || paletteMap.green;
                        const fill = dayData ? (dayData.level === 0 ? '#eaeaea' : colors[Math.min(dayData.level, 4)]) : '#f3f3f3';
                        return (
                          <div
                            key={dayIndex}
                            className="w-3 h-3 rounded-sm cursor-pointer"
                            style={{ backgroundColor: fill }}
                            title={dayData ? `${dayData.date.toLocaleDateString()}: ${dayData.completed}/${dayData.total} (${dayData.percentage}%)` : 'No activity'}
                          />
                        );
                      });
                      return (
                        <div key={weekIndex} className="space-y-1">
                          {weekDays}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-black">{calculateLongestStreak}</div>
                      <div className="text-xs text-black/60 dark:text-white/60">Longest Streak</div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-xs text-black/60 dark:text-white/60 mb-1">Streak Milestones</div>
                      <div className="flex flex-wrap items-center gap-2">
                        {[7, 30, 100, 365].map(m => (
                          <span
                            key={m}
                            className={`text-[10px] px-2 py-0.5 rounded-full border ${
                              milestoneBadges.includes(m) ? 'bg-black text-white dark:bg-white dark:text-black border-black/10 dark:border-white/10' : 'border-black/10 dark:border-white/10'
                            }`}
                          >
                            {m}d
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full opacity-10" style={{ boxShadow: '0 0 0 60px currentColor' }} />
                <div className="absolute inset-0 rounded-full opacity-10" style={{ boxShadow: '0 0 0 30px currentColor' }} />
                <div className="h-16 w-16 rounded-full flex items-center justify-center border border-black/20 dark:border-white/20 text-black/50 dark:text-white/50">
                  <Inbox className="h-7 w-7" />
                </div>
              </div>
              <p className="text-xl font-black tracking-tight">No tasks yet</p>
              <p className="text-sm mt-1 text-black/60 dark:text_white/60">Focus your mind. Start by organizing your day.</p>
              <p className="text-xs mt-0.5 text-black/40 dark:text_white/40">{uiLanguage === 'jp' ? '集中して、始めましょう。' : '集中して、始めましょう。'}</p>
              <button onClick={openNewTask} className="mt-5 h-9 px-4 rounded-xl bg-black text-white dark:bg_white dark:text-black text-sm font-semibold inline-flex items-center gap-1.5">
                <Plus className="h-4 w-4" />
                Create your first task
              </button>
              <div className="mt-3 text-xs text-black/50 dark:text_white/50 inline-flex items-center gap-2">
                <button onClick={() => setGuideOpen(true)} className="underline">Quick Start Guide</button>
                <span>•</span>
                <span>Import from Notion</span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`group flex items-start gap-3 p-3 rounded-xl border transition-all ${
                    styleMap[uiStyle]?.card || ''
                  } ${
                    task.status === 'completed'
                      ? 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 opacity-70'
                      : 'bg-white dark:bg-black border-black/10 dark:border-white/10 hover:shadow-sm'
                  }`}
                  style={
                    uiStyle === 'monochrome'
                      ? (task.status !== 'completed' ? { borderLeft: `4px solid ${isDark ? '#ffffff' : '#000000'}` } : undefined)
                      : (task.color && task.status !== 'completed' ? { borderLeft: `4px solid ${task.color}` } : undefined)
                  }
                >
                  <input
                    type="checkbox"
                    checked={task.status === 'completed'}
                    onChange={() => toggleComplete(task)}
                    className="mt-1"
                  />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${task.status === 'completed' ? 'line-through text-black/40 dark:text-white/40' : ''}`}>
                      {task.title}
                    </p>
                    {task.description && (
                      <p className="mt-1 text-xs text-black/50 dark:text-white/50 line-clamp-2">{task.description}</p>
                    )}
                    <div className="mt-2 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 inline-flex items-center gap-1">
                        <Flag className="h-3 w-3" />
                        {task.priority}
                      </span>
                      {typeof task.progress === 'number' && task.progress > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 inline-flex items-center gap-1">
                          {task.progress}% done
                        </span>
                      )}
                      {task.dueAt && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 inline-flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(task.dueAt).toLocaleString()}
                        </span>
                      )}
                      {task.reminderAt && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 inline-flex items-center gap-1">
                          <Bell className="h-3 w-3" />
                          {new Date(task.reminderAt).toLocaleString()}
                        </span>
                      )}
                      {task.recurrence !== 'none' && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-black/10 dark:border-white/10 inline-flex items-center gap-1">
                          <RefreshCw className="h-3 w-3" />
                          {task.recurrence}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openEditTask(task)}
                      className="text-xs px-2 py-1 rounded-md border border-black/10 dark:border-white/10"
                    >
                      Edit
                    </button>
                    <div className="flex items-center gap-1">
                      {[25, 50, 75, 100].map(v => (
                        <button
                          key={v}
                          onClick={() => {
                            setTasks((prev) =>
                              prev.map((t) => (t.id === task.id ? { ...t, progress: v, updatedAt: Date.now() } : t))
                            );
                          }}
                          className="text-[10px] px-1.5 py-0.5 rounded-md border border-black/10 dark:border-white/10"
                          title={`Set ${v}%`}
                        >
                          {v}%
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-xs px-2 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {zenMode && (
        <div className="fixed bottom-4 right-4 z-[80]">
          <button
            onClick={() => setZenMode(false)}
            className="h-9 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-semibold"
            aria-label="Exit Zen Mode"
          >
            Exit Zen
          </button>
        </div>
      )}

      {dialogOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black">{editingId ? 'Edit Task' : 'New Task'}</h2>
              <button onClick={() => setDialogOpen(false)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              <input
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                placeholder="Task title"
                className="w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
              />
              <textarea
                value={draft.description}
                onChange={(e) => setDraft({ ...draft, description: e.target.value })}
                placeholder="Description"
                rows={3}
                className="w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm resize-none"
              />
              <div>
                <label className="text-xs font-semibold text-black/60 dark:text-white/60">Progress</label>
                <div className="mt-1 flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={draft.progress}
                    onChange={(e) => setDraft({ ...draft, progress: Number(e.target.value) })}
                    className="flex-1"
                  />
                  <span className="text-xs w-10 text-right">{draft.progress}%</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  {[25, 50, 75, 100].map(v => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setDraft({ ...draft, progress: v })}
                      className="text-[10px] px-2 py-1 rounded-md border border-black/10 dark:border-white/10"
                    >
                      {v}%
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Due Date & Time</label>
                  <input
                    type="datetime-local"
                    value={toInputDateTime(draft.dueAt)}
                    onChange={(e) => setDraft({ ...draft, dueAt: fromInputDateTime(e.target.value) })}
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Reminder</label>
                  <input
                    type="datetime-local"
                    value={toInputDateTime(draft.reminderAt)}
                    onChange={(e) => setDraft({ ...draft, reminderAt: fromInputDateTime(e.target.value), reminded: false })}
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Priority</label>
                  <select
                    value={draft.priority}
                    onChange={(e) => setDraft({ ...draft, priority: e.target.value })}
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
                  >
                    {TASK_PRIORITIES.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Recurrence</label>
                  <select
                    value={draft.recurrence}
                    onChange={(e) => setDraft({ ...draft, recurrence: e.target.value })}
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
                  >
                    {TASK_RECURRENCE.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Category</label>
                  <select
                    value={draft.categoryId}
                    onChange={(e) => setDraft({ ...draft, categoryId: e.target.value })}
                    className="mt-1 w-full px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-black/60 dark:text-white/60">Color</label>
                  <input
                    type="color"
                    value={draft.color || '#000000'}
                    onChange={(e) => setDraft({ ...draft, color: e.target.value })}
                    className="mt-1 w-full h-10 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={async () => {
                    if (typeof window === 'undefined' || !('Notification' in window)) return;
                    const perm = await Notification.requestPermission();
                    setNotifPermission(perm);
                  }}
                  className="text-xs px-3 py-2 rounded-lg border border-black/10 dark:border-white/10"
                >
                  {notifPermission === 'granted' ? 'Notifications enabled' : 'Enable notifications'}
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setDialogOpen(false)}
                    className="text-xs px-3 py-2 rounded-lg border border-black/10 dark:border-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveTask}
                    className="text-xs px-3 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black"
                  >
                    {editingId ? 'Update' : 'Create'} Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {guideOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-4xl rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black">Ultimate Habit Tracker Features</h2>
              <button onClick={() => setGuideOpen(false)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-y-auto space-y-6">
              {featuresData.map((group, gi) => (
                <div key={gi} className="border border-black/10 dark:border-white/10 rounded-xl">
                  <div className="px-4 py-3 font-black text-sm">{group.title}</div>
                  <div className="grid md:grid-cols-2 gap-4 p-4">
                    {group.sections.map((sec, si) => (
                      <div key={si} className="rounded-lg border border-black/10 dark:border-white/10">
                        <div className="px-3 py-2 text-xs font-semibold">{sec.title}</div>
                        <ul className="px-3 pb-3 space-y-1">
                          {sec.items.map((it, ii) => (
                            <li key={ii} className="text-xs text-black/70 dark:text-white/70">• {it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {fitnessOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-5xl rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black">
                {uiLanguage === 'jp' ? '究極のフィットネススケジュールガイド' : 'Ultimate Fitness Schedule Guide'}
              </h2>
              <div className="flex items-center gap-2">
                <select
                  value={uiLanguage}
                  onChange={(e) => setUiLanguage(e.target.value)}
                  className="h-8 px-2 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-xs"
                >
                  <option value="en">English</option>
                  <option value="jp">日本語</option>
                </select>
                <button onClick={() => setFitnessOpen(false)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="max-h-[70vh] overflow-y-auto space-y-6 text-sm">
              <div className="border border-black/10 dark:border-white/10 rounded-xl">
                <div className="px-4 py-3 font-black text-sm">
                  {uiLanguage === 'jp' ? '身体測定ガイド' : 'Body Measurements Guide'}
                </div>
                <ul className="px-4 pb-4 space-y-1 text-black/80 dark:text-white/80">
                  <li>Height — Stand straight against wall</li>
                  <li>Weight — Morning, before eating</li>
                  <li>Waist — Narrowest torso</li>
                  <li>Hips — Widest buttocks</li>
                  <li>Chest — Fullest chest</li>
                  <li>Arms — Largest bicep (flexed)</li>
                  <li>Thighs — Largest thigh</li>
                  <li>Calves — Largest calf</li>
                </ul>
              </div>
              <div className="border border-black/10 dark:border-white/10 rounded-xl">
                <div className="px-4 py-3 font-black text-sm">
                  {uiLanguage === 'jp' ? 'BMI カテゴリーと計算式' : 'BMI Categories & Formula'}
                </div>
                <div className="px-4 pb-4 grid md:grid-cols-2 gap-4">
                  <ul className="space-y-1">
                    <li>Underweight: BMI &lt; 18.5</li>
                    <li>Normal: 18.5–24.9</li>
                    <li>Overweight: 25–29.9</li>
                    <li>Obese: ≥ 30</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>kg/m² or (lbs / in²) × 703</li>
                  </ul>
                </div>
              </div>
              <div className="border border-black/10 dark:border-white/10 rounded-xl">
                <div className="px-4 py-3 font-black text-sm">
                  {uiLanguage === 'jp' ? '目標別トレーニング' : 'Exercise by Goal'}
                </div>
                <div className="px-4 pb-4 space-y-4">
                  <div>
                    <div className="font-semibold">{uiLanguage === 'jp' ? '減量・脂肪燃焼（男性）' : 'Weight Loss (Men)'}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">45–60 min, 5–6 days/week</div>
                    <ul className="mt-1 space-y-1">
                      <li>Mon — Cardio + Core</li>
                      <li>Tue — Upper Strength + HIIT</li>
                      <li>Wed — Cardio</li>
                      <li>Thu — Lower Strength + Core</li>
                      <li>Fri — Full Body HIIT</li>
                      <li>Sat — Active Recovery</li>
                      <li>Sun — Rest / Light Cardio</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">{uiLanguage === 'jp' ? '減量・脂肪燃焼（女性）' : 'Weight Loss (Women)'}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">40–60 min, 5–6 days/week</div>
                    <ul className="mt-1 space-y-1">
                      <li>Mon — Cardio + Core</li>
                      <li>Tue — Lower Strength + Abs</li>
                      <li>Wed — HIIT + Stretch</li>
                      <li>Thu — Upper + Core</li>
                      <li>Fri — Full Body Circuit</li>
                      <li>Sat — Active Recovery</li>
                      <li>Sun — Rest / Light Walk</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">{uiLanguage === 'jp' ? '筋肉増量（男性）' : 'Muscle Building (Men)'}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">60–90 min, 4–6 days/week</div>
                    <ul className="mt-1 space-y-1">
                      <li>Mon — Push</li>
                      <li>Tue — Pull</li>
                      <li>Wed — Legs</li>
                      <li>Thu — Rest / Light Cardio</li>
                      <li>Fri — Push</li>
                      <li>Sat — Pull</li>
                      <li>Sun — Legs</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-semibold">{uiLanguage === 'jp' ? '筋力アップ（女性）' : 'Muscle Building (Women)'}</div>
                    <div className="text-xs text-black/60 dark:text-white/60">45–75 min, 4–5 days/week</div>
                    <ul className="mt-1 space-y-1">
                      <li>Mon — Upper</li>
                      <li>Tue — Lower & Glutes</li>
                      <li>Wed — Rest</li>
                      <li>Thu — Upper</li>
                      <li>Fri — Lower & Glutes</li>
                      <li>Sat — Full Body / Core</li>
                      <li>Sun — Rest</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {imagesOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-5xl rounded-2xl bg-white dark:bg-black border border-black/10 dark:border-white/10 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-black">{uiLanguage === 'jp' ? '画像スタジオ' : 'Image Studio'}</h2>
              <button onClick={() => setImagesOpen(false)} className="p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><X className="h-4 w-4" /></button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">{uiLanguage === 'jp' ? '身体測定図' : 'Measurements Diagram'}</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => downloadSVG(buildMeasurementsSVG(), 'measurements.svg')} className="text-xs px-2 py-1 rounded-lg border">SVG</button>
                      <button onClick={() => svgToPngAndDownload(buildMeasurementsSVG(), 800, 600, 'measurements.png')} className="text-xs px-2 py-1 rounded-lg border">PNG</button>
                    </div>
                  </div>
                  <div className="mt-2 bg-slate-50 dark:bg-zinc-900 rounded-lg overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: buildMeasurementsSVG(600, 400) }} />
                  </div>
                </div>
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">BMI Chart</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => downloadSVG(buildBMIChartSVG(), 'bmi.svg')} className="text-xs px-2 py-1 rounded-lg border">SVG</button>
                      <button onClick={() => svgToPngAndDownload(buildBMIChartSVG(), 800, 300, 'bmi.png')} className="text-xs px-2 py-1 rounded-lg border">PNG</button>
                    </div>
                  </div>
                  <div className="mt-2 bg-slate-50 dark:bg-zinc-900 rounded-lg overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: buildBMIChartSVG(600, 240) }} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Weekly Schedule</span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => downloadSVG(buildWeeklyScheduleSVG(), 'schedule.svg')} className="text-xs px-2 py-1 rounded-lg border">SVG</button>
                      <button onClick={() => svgToPngAndDownload(buildWeeklyScheduleSVG(), 1000, 420, 'schedule.png')} className="text-xs px-2 py-1 rounded-lg border">PNG</button>
                    </div>
                  </div>
                  <div className="mt-2 bg-slate-50 dark:bg-zinc-900 rounded-lg overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: buildWeeklyScheduleSVG(720, 320) }} />
                  </div>
                </div>
                <div className="rounded-xl border border-black/10 dark:border-white/10 p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold">Streak Badge</span>
                    <select
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        const wrap = document.getElementById('badgePreview');
                        if (wrap) wrap.innerHTML = buildBadgeSVG(v, 300, 300);
                      }}
                      className="h-8 px-2 rounded-lg border text-xs"
                      defaultValue="30"
                    >
                      <option value="7">7</option>
                      <option value="30">30</option>
                      <option value="100">100</option>
                      <option value="365">365</option>
                    </select>
                    <button onClick={() => downloadSVG(buildBadgeSVG(30), 'badge.svg')} className="text-xs px-2 py-1 rounded-lg border">SVG</button>
                    <button onClick={() => svgToPngAndDownload(buildBadgeSVG(30), 400, 400, 'badge.png')} className="text-xs px-2 py-1 rounded-lg border">PNG</button>
                  </div>
                  <div id="badgePreview" className="mt-2 bg-slate-50 dark:bg-zinc-900 rounded-lg overflow-hidden">
                    <div dangerouslySetInnerHTML={{ __html: buildBadgeSVG(30, 300, 300) }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
