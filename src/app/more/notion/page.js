'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(makeTask());
  const [notifPermission, setNotifPermission] = useState('default');
  const [showContributions, setShowContributions] = useState(false);
  const newCatRef = useRef(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

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

  const calculateCurrentStreak = () => {
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
  };

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
  }, [tasks, contributionData]);

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
    <div className="flex min-h-screen bg-white text-black dark:bg-black dark:text-white">
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

      {(!isMobile || sidebarOpen) && (
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
                      <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
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

      <main className={`flex-1 flex flex-col overflow-hidden ${isMobile ? 'pt-14' : ''}`}>
        <header className="px-6 py-4 border-b border-black/10 dark:border-white/10 flex items-center justify-between gap-4">
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
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40 dark:text-white/40" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tasks..."
                className="pl-9 h-9 w-48 rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm"
              />
            </div>
            <button
              onClick={openNewTask}
              className="h-9 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-semibold inline-flex items-center gap-1.5"
            >
              <Plus className="h-4 w-4" />
              Add Task
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-4">
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
                      {[0, 1, 2, 3, 4].map(level => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-sm ${
                            level === 0 ? 'bg-black/10 dark:bg-white/10' :
                            level === 1 ? 'bg-black/20 dark:bg-white/20' :
                            level === 2 ? 'bg-black/40 dark:bg-white/40' :
                            level === 3 ? 'bg-black/60 dark:bg-white/60' :
                            'bg-black dark:bg-white'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-black/60 dark:text-white/60">More</span>
                  </div>
                  
                  <div className="grid grid-cols-53 gap-1">
                    {Array.from({ length: 53 }, (_, weekIndex) => {
                      const weekStart = new Date(new Date().getFullYear(), 0, 1 + (weekIndex * 7));
                      const weekDays = Array.from({ length: 7 }, (_, dayIndex) => {
                        const date = new Date(weekStart);
                        date.setDate(weekStart.getDate() + dayIndex);
                        const dayData = contributionData.find(d => 
                          d.date.getFullYear() === date.getFullYear() &&
                          d.date.getMonth() === date.getMonth() &&
                          d.date.getDate() === date.getDate()
                        );
                        
                        return (
                          <div
                            key={dayIndex}
                            className={`w-3 h-3 rounded-sm cursor-pointer transition-colors ${
                              dayData ? (
                                dayData.level === 0 ? 'bg-black/10 dark:bg-white/10' :
                                dayData.level === 1 ? 'bg-black/20 dark:bg-white/20' :
                                dayData.level === 2 ? 'bg-black/40 dark:bg-white/40' :
                                dayData.level === 3 ? 'bg-black/60 dark:bg-white/60' :
                                'bg-black dark:bg-white'
                              ) : 'bg-black/5 dark:bg-white/5'
                            }`}
                            title={dayData ? `${dayData.date.toLocaleDateString()}: ${dayData.completed}/${dayData.total} tasks (${dayData.percentage}%)` : 'No activity'}
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
                </div>
              </div>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-black/50 dark:text-white/50">
              <Inbox className="h-12 w-12 mb-3 opacity-40" />
              <p className="text-lg font-semibold">No tasks yet</p>
              <p className="text-sm mt-1">Create your first task to get started</p>
              <button onClick={openNewTask} className="mt-4 h-9 px-3 rounded-lg bg-black text-white dark:bg-white dark:text-black text-sm font-semibold inline-flex items-center gap-1.5">
                <Plus className="h-4 w-4" />
                Add Task
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`group flex items-start gap-3 p-3 rounded-xl border transition-all ${
                    task.status === 'completed'
                      ? 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 opacity-70'
                      : 'bg-white dark:bg-black border-black/10 dark:border-white/10 hover:shadow-sm'
                  }`}
                  style={task.color && task.status !== 'completed' ? { borderLeft: `4px solid ${task.color}` } : undefined}
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
    </div>
  );
}
