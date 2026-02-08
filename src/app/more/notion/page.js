'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { FaPlus, FaTrash, FaRegStickyNote, FaChevronDown, FaChevronRight, FaImage, FaVideo, FaFile, FaArrowLeft } from 'react-icons/fa';
import { uploadMedia } from '@/lib/firebase';

const useDebouncedCallback = (cb, delayMs) => {
  const cbRef = useRef(cb);
  const timeoutRef = useRef(null);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  return useMemo(() => {
    return (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => cbRef.current(...args), delayMs);
    };
  }, [delayMs]);
};

const STORAGE_KEY = 'notion_local_v1';

const uid = () => `${Date.now()}_${Math.random().toString(16).slice(2)}`;

const loadLocal = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

const saveLocal = (next) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
};

const makeBlock = (type = 'paragraph', patch = {}) => ({
  id: uid(),
  type,
  text: '',
  checked: false,
  open: true,
  color: '',
  bgColor: '',
  ...patch
});

const makePage = (patch = {}) => ({
  id: uid(),
  parentId: null,
  title: 'Untitled',
  icon: '📄',
  coverUrl: '',
  isFavorite: false,
  isPinned: false,
  kind: 'page',
  db: null,
  blocks: [makeBlock('h1', { text: 'Untitled' }), makeBlock('paragraph')],
  createdAt: Date.now(),
  updatedAt: Date.now(),
  ...patch
});

const makeDatabase = () => {
  const statusPropId = uid();
  const datePropId = uid();
  const titlePropId = uid();
  return {
    properties: [
      { id: titlePropId, name: 'Name', type: 'title' },
      { id: statusPropId, name: 'Status', type: 'select', options: ['Backlog', 'In Progress', 'Done'] },
      { id: datePropId, name: 'Date', type: 'date' }
    ],
    rows: [
      {
        id: uid(),
        cells: {
          [titlePropId]: 'First item',
          [statusPropId]: 'Backlog',
          [datePropId]: new Date().toISOString().slice(0, 10)
        },
        coverUrl: ''
      }
    ],
    view: 'table'
  };
};

const BLOCK_TYPES = [
  { type: 'paragraph', label: 'Text' },
  { type: 'h1', label: 'Heading 1' },
  { type: 'h2', label: 'Heading 2' },
  { type: 'h3', label: 'Heading 3' },
  { type: 'bullet', label: 'Bulleted list' },
  { type: 'number', label: 'Numbered list' },
  { type: 'todo', label: 'To-do' },
  { type: 'toggle', label: 'Toggle list' },
  { type: 'quote', label: 'Quote' },
  { type: 'code', label: 'Code block' },
  { type: 'image', label: 'Image' },
  { type: 'video', label: 'Video' },
  { type: 'file', label: 'File' }
];

const getPageTitle = (page) => (page?.title || '').trim() || 'Untitled';

const buildTree = (pages) => {
  const byParent = new Map();
  for (const p of pages) {
    const k = p.parentId || 'root';
    if (!byParent.has(k)) byParent.set(k, []);
    byParent.get(k).push(p);
  }
  return byParent;
};

const getBreadcrumbs = (pages, selectedId) => {
  const trail = [];
  let curr = pages.find(p => p.id === selectedId);
  while (curr) {
    trail.unshift(curr);
    curr = pages.find(p => p.id === curr.parentId);
  }
  return trail;
};

export default function NotionPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [expanded, setExpanded] = useState({});
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState({ pages: [], selectedId: null });

  const [slashOpen, setSlashOpen] = useState(false);
  const [slashQuery, setSlashQuery] = useState('');
  const [slashBlockId, setSlashBlockId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [dragId, setDragId] = useState(null);

  const inputRefs = useRef(new Map());

  const favorites = useMemo(() => store.pages.filter(p => p.isFavorite), [store.pages]);
  const breadcrumbs = useMemo(() => getBreadcrumbs(store.pages, store.selectedId), [store.pages, store.selectedId]);

  const filteredPages = useMemo(() => {
    if (!searchQuery) return [];
    return store.pages.filter(p => 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (p.blocks || []).some(b => (b.text || '').toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [store.pages, searchQuery]);

  useEffect(() => {
    const loaded = loadLocal();
    if (loaded?.pages?.length) {
      setStore({
        pages: loaded.pages,
        selectedId: loaded.selectedId || loaded.pages[0].id
      });
      setExpanded(loaded.expanded || {});
    } else {
      const first = makePage();
      const initial = { pages: [first], selectedId: first.id, expanded: {} };
      saveLocal(initial);
      setStore({ pages: initial.pages, selectedId: initial.selectedId });
    }
    setLoading(false);
  }, []);

  const tree = useMemo(() => buildTree(store.pages), [store.pages]);
  const selectedPage = useMemo(
    () => store.pages.find((p) => p.id === store.selectedId) || null,
    [store.pages, store.selectedId]
  );

  const persist = useDebouncedCallback((nextPages, nextSelectedId, nextExpanded) => {
    saveLocal({
      pages: nextPages,
      selectedId: nextSelectedId,
      expanded: nextExpanded
    });
  }, 250);

  const updatePages = (updater) => {
    setStore((prev) => {
      const nextPages = updater(prev.pages);
      persist(nextPages, prev.selectedId, expanded);
      return { ...prev, pages: nextPages };
    });
  };

  const setSelectedId = (id) => {
    setStore((prev) => {
      persist(prev.pages, id, expanded);
      return { ...prev, selectedId: id };
    });
  };

  const handleCreate = (parentId = null) => {
    const page = makePage({ parentId });
    updatePages((prev) => [page, ...prev]);
    if (parentId) {
      setExpanded((prev) => {
        const next = { ...prev, [parentId]: true };
        persist(store.pages, store.selectedId, next);
        return next;
      });
    }
    setSelectedId(page.id);
  };

  const handleCreateDatabase = (parentId = null) => {
    const page = makePage({
      parentId,
      kind: 'database',
      icon: '🗂️',
      title: 'New database',
      blocks: [],
      db: makeDatabase()
    });
    updatePages((prev) => [page, ...prev]);
    if (parentId) {
      setExpanded((prev) => {
        const next = { ...prev, [parentId]: true };
        persist(store.pages, store.selectedId, next);
        return next;
      });
    }
    setSelectedId(page.id);
  };

  const handleDelete = () => {
    if (!selectedPage) return;
    if (!confirm('Delete this page and its sub-pages?')) return;

    const toDelete = new Set();
    const walk = (id) => {
      toDelete.add(id);
      const kids = tree.get(id) || [];
      for (const k of kids) walk(k.id);
    };
    walk(selectedPage.id);

    updatePages((prev) => prev.filter((p) => !toDelete.has(p.id)));

    const remaining = store.pages.filter((p) => !toDelete.has(p.id));
    const nextSelected = remaining[0]?.id || null;
    setSelectedId(nextSelected);
  };

  const updateSelectedPage = (patch) => {
    if (!selectedPage) return;
    updatePages((prev) =>
      prev.map((p) =>
        p.id === selectedPage.id
          ? { ...p, ...patch, updatedAt: Date.now() }
          : p
      )
    );
  };

  const updateSelectedDb = (patch) => {
    if (!selectedPage || selectedPage.kind !== 'database') return;
    updateSelectedPage({ db: { ...(selectedPage.db || {}), ...patch } });
  };

  const focusBlock = (blockId) => {
    const el = inputRefs.current.get(blockId);
    if (el) {
      el.focus();
      const len = el.value?.length || 0;
      try {
        el.setSelectionRange(len, len);
      } catch {
        // ignore
      }
    }
  };

  const insertBlockAfter = (afterId, block) => {
    if (!selectedPage) return;
    const blocks = selectedPage.blocks || [];
    const idx = blocks.findIndex((b) => b.id === afterId);
    const next = [...blocks];
    next.splice(idx + 1, 0, block);
    updateSelectedPage({ blocks: next });
    requestAnimationFrame(() => focusBlock(block.id));
  };

  const openSlash = (blockId, query = '') => {
    setSlashOpen(true);
    setSlashQuery(query);
    setSlashBlockId(blockId);
  };

  const closeSlash = () => {
    setSlashOpen(false);
    setSlashQuery('');
    setSlashBlockId(null);
  };

  const filteredSlashItems = useMemo(() => {
    const q = slashQuery.trim().toLowerCase();
    if (!q) return BLOCK_TYPES;
    return BLOCK_TYPES.filter((x) => x.label.toLowerCase().includes(q) || x.type.includes(q));
  }, [slashQuery]);

  const applyBlockType = (blockId, type) => {
    if (!selectedPage) return;
    const next = (selectedPage.blocks || []).map((b) => {
      if (b.id !== blockId) return b;
      const text = (b.text || '').startsWith('/') ? (b.text || '').slice(1).trim() : b.text;
      return { ...b, type, text };
    });
    updateSelectedPage({ blocks: next });
    closeSlash();
    requestAnimationFrame(() => focusBlock(blockId));
  };

  const updateBlock = (blockId, patch) => {
    if (!selectedPage) return;
    const next = (selectedPage.blocks || []).map((b) => (b.id === blockId ? { ...b, ...patch } : b));
    updateSelectedPage({ blocks: next });
  };

  const moveBlock = (fromId, toId) => {
    if (!selectedPage) return;
    const blocks = [...(selectedPage.blocks || [])];
    const fromIdx = blocks.findIndex((b) => b.id === fromId);
    const toIdx = blocks.findIndex((b) => b.id === toId);
    if (fromIdx < 0 || toIdx < 0 || fromIdx === toIdx) return;
    const [item] = blocks.splice(fromIdx, 1);
    blocks.splice(toIdx, 0, item);
    updateSelectedPage({ blocks });
  };

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-300">
      <Navbar />

      <div className="container mx-auto px-6 pt-32 pb-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-6 mb-4">
              <button 
                onClick={() => router.back()}
                className="w-12 h-12 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all group/back shadow-sm"
              >
                <FaArrowLeft className="group-hover/back:-translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-[2rem] bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-lg shadow-purple-500/20">
                  <FaRegStickyNote size={24} />
                </span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                    Workspace
                  </h1>
                  <p className="text-gray-400 dark:text-neutral-500 font-medium text-sm mt-1">
                    Manage your thoughts, tasks, and media in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCreate(null)}
              disabled={saving}
              className="px-6 py-3 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl shadow-black/10 dark:shadow-white/10 disabled:opacity-50 inline-flex items-center gap-2"
            >
              <FaPlus />
              New Page
            </button>
            <button
              onClick={() => handleCreateDatabase(null)}
              disabled={saving}
              className="px-6 py-3 rounded-2xl bg-white/50 dark:bg-white/5 text-black dark:text-white font-black text-sm hover:scale-105 active:scale-95 transition-all border border-black/5 dark:border-white/10 backdrop-blur-md disabled:opacity-50 inline-flex items-center gap-2"
            >
              <FaPlus />
              Database
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-2xl border border-black/5 dark:border-white/5 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col h-[80vh]">
            <div className="p-6 border-b border-black/5 dark:border-white/5 flex items-center justify-between">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Library</div>
              <button 
                onClick={() => setShowSearch(!showSearch)}
                className="p-1 px-2 rounded-lg bg-black/5 dark:bg-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black dark:hover:text-white transition-all shadow-sm"
              >
                Search
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2">
              {showSearch && (
                <div className="mb-4 px-2">
                  <input 
                    autoFocus
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search pages..."
                    className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-black border border-black/5 dark:border-white/5 outline-none"
                  />
                  {searchQuery && (
                    <div className="mt-2 space-y-1">
                      {filteredPages.length > 0 ? filteredPages.map(p => (
                        <button 
                          key={p.id}
                          onClick={() => { setSelectedId(p.id); setShowSearch(false); setSearchQuery(''); }}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs hover:bg-white dark:hover:bg-white/5 transition-colors line-clamp-1"
                        >
                          {p.icon} {p.title}
                        </button>
                      )) : <div className="px-3 py-2 text-[10px] text-gray-400 italic">No results</div>}
                    </div>
                  )}
                </div>
              )}

              {favorites.length > 0 && !showSearch && (
                <div className="mb-6">
                  <div className="px-3 mb-2 text-[10px] font-black uppercase tracking-widest text-gray-400 opacity-50">Favorites</div>
                  <div className="space-y-1">
                    {favorites.map(p => (
                      <button
                        key={p.id}
                        onClick={() => setSelectedId(p.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                          p.id === store.selectedId ? 'bg-white dark:bg-neutral-800 shadow-sm' : 'hover:bg-white/40 dark:hover:bg-white/5 opacity-70'
                        }`}
                      >
                        {p.icon} {p.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {!showSearch && (
                <>
                  <div className="px-3 mb-2 text-[10px] font-black uppercase tracking-widest text-gray-400 opacity-50">Private</div>
                  <div className="space-y-1">
                    {(tree.get('root') || []).map((p) => (
                      <PageNode
                        key={p.id}
                        node={p}
                        tree={tree}
                        depth={0}
                        selectedId={store.selectedId}
                        expanded={expanded}
                        onToggle={(id) =>
                          setExpanded((prev) => {
                            const next = { ...prev, [id]: !prev[id] };
                            persist(store.pages, store.selectedId, next);
                            return next;
                          })
                        }
                        onSelect={(id) => setSelectedId(id)}
                        onAddChild={(id) => handleCreate(id)}
                        onAddDb={(id) => handleCreateDatabase(id)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-neutral-800">
               <div className="text-[11px] text-gray-400 flex items-center justify-between">
                 <span>{saving ? 'Saving…' : 'Saved to Local'}</span>
               </div>
            </div>
          </div>

          {/* Editor */}
          <div className="bg-white dark:bg-neutral-950 border border-black/5 dark:border-white/5 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col h-[80vh] relative">
            <div className="p-5 border-b border-black/5 dark:border-white/5 flex items-center justify-between bg-white/50 dark:bg-neutral-950/50 backdrop-blur-md sticky top-0 z-10">
              <div className="flex items-center gap-2 overflow-hidden mr-4">
                {breadcrumbs.map((b, i) => (
                  <React.Fragment key={b.id}>
                    <button 
                      onClick={() => setSelectedId(b.id)}
                      className="text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap"
                    >
                      {b.title}
                    </button>
                    {i < breadcrumbs.length - 1 && <span className="text-gray-300">/</span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="flex items-center gap-2">
                {selectedPage && (
                  <button
                    onClick={() => updateSelectedPage({ isFavorite: !selectedPage.isFavorite })}
                    className={`p-2 rounded-lg text-xs transition-colors ${selectedPage.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-black dark:hover:text-white'}`}
                  >
                    {selectedPage.isFavorite ? '★' : '☆'}
                  </button>
                )}
                <button
                  onClick={handleDelete}
                  disabled={!store.selectedId || saving}
                  className="px-3 py-2 rounded-full bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-300 text-xs font-black hover:bg-red-100 dark:hover:bg-red-950/50 disabled:opacity-50 inline-flex items-center gap-2"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <AnimatePresence mode="wait">
                {store.selectedId ? (
                  <motion.div
                    key={store.selectedId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-8 md:p-12 lg:p-16 max-w-3xl mx-auto"
                  >
                    {/* Page Header (Icon & Cover) */}
                    <div className="group relative mb-8">
                       <div className="text-6xl mb-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-white/5 w-fit p-2 rounded-2xl transition-all" title="Click to change icon">
                          {selectedPage?.icon || '📄'}
                       </div>
                       <div className="flex items-end justify-between">
                          <input
                            value={selectedPage?.title || ''}
                            onChange={(e) => updateSelectedPage({ title: e.target.value })}
                            placeholder="Untitled"
                            className="w-full text-4xl md:text-5xl font-black tracking-tight bg-transparent outline-none placeholder:text-gray-200 dark:placeholder:text-neutral-800"
                          />
                       </div>
                    </div>
                    {selectedPage?.kind === 'database' ? (
                      <DatabaseView
                        page={selectedPage}
                        onUpdateDb={updateSelectedDb}
                        onUpdatePage={updateSelectedPage}
                      />
                    ) : (
                      <div className="space-y-1">
                        {(selectedPage?.blocks || []).map((block, idx) => (
                          <div
                            key={block.id}
                            className="group flex items-start gap-2 rounded-xl px-2 py-1 hover:bg-gray-50 dark:hover:bg-white/5"
                            draggable
                            onDragStart={() => setDragId(block.id)}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => {
                              if (!dragId || dragId === block.id) return;
                              moveBlock(dragId, block.id);
                              setDragId(null);
                            }}
                          >
                            <div className="pt-2 w-6 text-gray-300 group-hover:text-gray-400 select-none">
                              ⋮
                            </div>

                            {block.type === 'todo' && (
                              <input
                                type="checkbox"
                                checked={!!block.checked}
                                onChange={(e) => updateBlock(block.id, { checked: e.target.checked })}
                                className="mt-2"
                              />
                            )}

                            {block.type === 'toggle' && (
                              <button
                                onClick={() => updateBlock(block.id, { open: !block.open })}
                                className="mt-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                                aria-label="toggle"
                              >
                                {block.open ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
                              </button>
                            )}

                            <BlockInput
                              block={block}
                              updateBlock={updateBlock}
                              inputRef={(el) => {
                                if (el) inputRefs.current.set(block.id, el);
                              }}
                              onChange={(text) => {
                                updateBlock(block.id, { text });
                                if (text.startsWith('/')) {
                                  openSlash(block.id, text.slice(1));
                                } else if (slashOpen && slashBlockId === block.id) {
                                  closeSlash();
                                }
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                  e.preventDefault();
                                  insertBlockAfter(block.id, makeBlock('paragraph'));
                                  return;
                                }
                                if (e.key === 'Backspace' && (block.text || '') === '' && (selectedPage?.blocks || []).length > 1) {
                                  const prevId = selectedPage.blocks[idx - 1]?.id;
                                  const nextBlocks = selectedPage.blocks.filter((b) => b.id !== block.id);
                                  updateSelectedPage({ blocks: nextBlocks });
                                  if (prevId) requestAnimationFrame(() => focusBlock(prevId));
                                  return;
                                }
                                if (e.key === '/' && (block.text || '') === '') {
                                  openSlash(block.id, '');
                                }
                                if (slashOpen && slashBlockId === block.id && e.key === 'Escape') {
                                  closeSlash();
                                }
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <AnimatePresence>
                      {slashOpen && slashBlockId && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="mt-4 w-full max-w-md rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl overflow-hidden"
                        >
                          <div className="px-4 py-2 border-b border-gray-200 dark:border-neutral-800 text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">
                            Insert / Change block
                          </div>
                          <div className="max-h-64 overflow-y-auto">
                            {filteredSlashItems.map((item) => (
                              <button
                                key={item.type}
                                onClick={() => applyBlockType(slashBlockId, item.type)}
                                className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5"
                              >
                                <div className="font-black text-sm">{item.label}</div>
                                <div className="text-xs text-gray-400 mt-0.5">/{item.type}</div>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-10 text-center text-gray-400"
                  >
                    Select a page or create a new one.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function PageNode({ node, tree, depth, selectedId, expanded, onToggle, onSelect, onAddChild, onAddDb }) {
  const children = tree.get(node.id) || [];
  const isExpanded = !!expanded[node.id];
  const isSelected = selectedId === node.id;

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className={`group flex items-center gap-3 px-3 py-2.5 rounded-2xl transition-all duration-300 ${
          isSelected
            ? 'bg-gradient-to-r from-purple-500/10 to-indigo-500/10 dark:from-purple-500/20 dark:to-indigo-500/20 border border-purple-500/20 dark:border-purple-400/20 shadow-sm shadow-purple-500/5'
            : 'hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
        }`}
        style={{ marginLeft: `${depth * 16}px` }}
      >
        {children.length > 0 ? (
          <button
            onClick={() => onToggle(node.id)}
            className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            aria-label="expand"
          >
            {isExpanded ? <FaChevronDown size={12} /> : <FaChevronRight size={12} />}
          </button>
        ) : (
          <div className="w-6" />
        )}

        <button onClick={() => onSelect(node.id)} className="flex-1 text-left min-w-0">
          <div className={`font-bold text-sm tracking-tight truncate ${isSelected ? 'text-purple-600 dark:text-purple-400' : 'text-gray-600 dark:text-gray-300'}`}>
            {node.icon ? <span className="mr-2 text-base">{node.icon}</span> : ''}
            {getPageTitle(node)}
          </div>
        </button>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onAddChild(node.id)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="add subpage"
            title="New Page"
          >
            <FaPlus size={10} />
          </button>
          <button
            onClick={() => onAddDb(node.id)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="add database"
            title="New Database"
          >
            <span className="text-xs">🗂️</span>
          </button>
        </div>
      </motion.div>

      {children.length > 0 && isExpanded && (
        <div className="mt-1 space-y-1">
          {children.map((c) => (
            <PageNode
              key={c.id}
              node={c}
              tree={tree}
              depth={depth + 1}
              selectedId={selectedId}
              expanded={expanded}
              onToggle={onToggle}
              onSelect={onSelect}
              onAddChild={onAddChild}
              onAddDb={onAddDb}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function RangePill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
        active
          ? 'bg-black text-white dark:bg-white dark:text-black border-black dark:border-white shadow-lg shadow-black/10 dark:shadow-white/10 scale-105'
          : 'bg-white/50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );
}

function DatabaseView({ page, onUpdateDb }) {
  const db = page.db || { properties: [], rows: [], view: 'table' };

  const titleProp = db.properties.find((p) => p.type === 'title') || db.properties[0];
  const statusProp = db.properties.find((p) => p.type === 'select');
  const dateProp = db.properties.find((p) => p.type === 'date');

  const [range, setRange] = useState('all');
  const [newName, setNewName] = useState('');
  const [newStatus, setNewStatus] = useState(statusProp?.options?.[0] || 'Backlog');
  const [newDate, setNewDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().slice(0, 10);
  });

  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const parseISODate = (s) => {
    if (!s || typeof s !== 'string') return null;
    const d = new Date(`${s}T00:00:00`);
    return Number.isNaN(d.getTime()) ? null : d;
  };

  const withinRange = useCallback((row) => {
    if (range === 'all') return true;
    if (!dateProp) return true;
    const raw = (row.cells || {})[dateProp.id];
    const d = parseISODate(raw);
    if (!d) return false;

    const today = startOfDay(new Date());
    const target = startOfDay(d);
    const diffDays = Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (range === 'today') return diffDays === 0;
    if (range === 'tomorrow') return diffDays === 1;
    if (range === 'week') return diffDays >= 0 && diffDays <= 7;
    if (range === 'year') return target.getFullYear() === today.getFullYear();
    return true;
  }, [range, dateProp]);

  const rows = useMemo(() => (db.rows || []).filter(withinRange), [db.rows, withinRange]);

  const setView = (view) => onUpdateDb({ view });

  const addRow = () => {
    const id = uid();
    const nextRow = {
      id,
      cells: {
        ...(titleProp ? { [titleProp.id]: 'New item' } : {}),
        ...(statusProp ? { [statusProp.id]: statusProp.options?.[0] || 'Backlog' } : {}),
        ...(dateProp ? { [dateProp.id]: new Date().toISOString().slice(0, 10) } : {})
      },
      coverUrl: ''
    };
    onUpdateDb({ rows: [nextRow, ...(db.rows || [])] });
  };

  const addTask = () => {
    if (!titleProp) return;
    const name = newName.trim();
    if (!name) return;
    const id = uid();
    const nextRow = {
      id,
      cells: {
        [titleProp.id]: name,
        ...(statusProp ? { [statusProp.id]: newStatus } : {}),
        ...(dateProp ? { [dateProp.id]: newDate } : {})
      },
      coverUrl: ''
    };
    onUpdateDb({ rows: [nextRow, ...(db.rows || [])] });
    setNewName('');
  };

  const updateCell = (rowId, propId, value) => {
    const rows = (db.rows || []).map((r) =>
      r.id === rowId ? { ...r, cells: { ...(r.cells || {}), [propId]: value } } : r
    );
    onUpdateDb({ rows });
  };

  const views = [
    { id: 'table', label: 'Table' },
    { id: 'board', label: 'Board' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'list', label: 'List' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <div className="mt-6">
      <div className="flex flex-col gap-4 mb-5">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-[2.5rem] border border-black/5 dark:border-white/5 bg-white/60 dark:bg-neutral-900/40 backdrop-blur-2xl p-8 shadow-2xl shadow-black/5 dark:shadow-white/20"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-purple-500 mb-2">Task Planner</div>
              <h3 className="text-xl font-black tracking-tight">Focus your day.</h3>
              <p className="text-sm text-gray-400 mt-1">Plan tomorrow, next week, or the full year ahead.</p>
            </div>
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 bg-black/5 dark:bg-white/5 rounded-2xl">
              <RangePill label="All" active={range === 'all'} onClick={() => setRange('all')} />
              <RangePill label="Today" active={range === 'today'} onClick={() => setRange('today')} />
              <RangePill label="Tomorrow" active={range === 'tomorrow'} onClick={() => setRange('tomorrow')} />
              <RangePill label="Week" active={range === 'week'} onClick={() => setRange('week')} />
              <RangePill label="Year" active={range === 'year'} onClick={() => setRange('year')} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-3">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="What needs to be done?"
              className="px-6 py-4 rounded-[1.25rem] bg-white dark:bg-black/40 border border-black/5 dark:border-white/10 outline-none text-sm font-bold focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/5 transition-all w-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTask();
              }}
            />
            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="px-4 py-4 rounded-[1.25rem] bg-white dark:bg-black/40 border border-black/5 dark:border-white/10 outline-none text-sm font-bold text-gray-500 dark:text-gray-300 focus:border-purple-500/50 transition-all cursor-pointer"
            />
            {statusProp ? (
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="px-6 py-4 rounded-[1.25rem] bg-white dark:bg-black/40 border border-black/5 dark:border-white/10 outline-none text-sm font-bold text-gray-600 dark:text-gray-200 focus:border-purple-500/50 transition-all cursor-pointer appearance-none"
              >
                {(statusProp.options || []).map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : null}
            <button
              onClick={addTask}
              className="px-8 py-4 rounded-[1.25rem] bg-purple-600 text-white font-black text-sm hover:bg-purple-700 active:scale-95 transition-all shadow-lg shadow-purple-500/20"
            >
              Add Task
            </button>
          </div>
        </motion.div>

        <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-2">
          {views.map((v) => (
            <button
              key={v.id}
              onClick={() => setView(v.id)}
              className={`px-3 py-2 rounded-xl text-xs font-black transition-colors ${
                db.view === v.id
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'hover:bg-gray-50 dark:hover:bg-white/5 text-gray-500 dark:text-gray-300'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        <button
          onClick={addRow}
          className="px-4 py-2 rounded-full bg-gray-100 text-black dark:bg-white/5 dark:text-white font-black text-sm hover:opacity-90 inline-flex items-center gap-2 border border-black/5 dark:border-white/10"
        >
          <FaPlus />
          New
        </button>
      </div>

      {db.view === 'table' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="overflow-x-auto rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-white/5"
        >
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-black/5 dark:bg-white/5">
              <tr>
                {db.properties.map((p) => (
                  <th key={p.id} className="text-left px-6 py-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 border-b border-black/5 dark:border-white/5">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="group/row transition-colors hover:bg-black/5 dark:hover:bg-white/5">
                  {db.properties.map((p) => (
                    <td key={p.id} className="px-6 py-4 align-top border-b border-black/5 dark:border-white/5">
                      {p.type === 'select' ? (
                        <select
                          value={(r.cells || {})[p.id] || ''}
                          onChange={(e) => updateCell(r.id, p.id, e.target.value)}
                          className="px-3 py-1.5 rounded-xl bg-white dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-xs font-bold focus:ring-4 focus:ring-purple-500/10 transition-all cursor-pointer appearance-none"
                        >
                          {(p.options || []).map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          value={(r.cells || {})[p.id] || ''}
                          onChange={(e) => updateCell(r.id, p.id, e.target.value)}
                          className={`w-full bg-transparent outline-none font-medium ${p.type === 'title' ? 'font-black' : ''}`}
                          placeholder={p.type === 'date' ? 'YYYY-MM-DD' : ''}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}

      {db.view === 'board' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(statusProp?.options || ['Backlog', 'In Progress', 'Done']).map((col) => {
            const items = rows.filter((r) => (r.cells || {})[statusProp?.id] === col);
            return (
              <div key={col} className="rounded-[2rem] border border-black/5 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 backdrop-blur-sm overflow-hidden flex flex-col h-fit">
                <div className="px-5 py-4 flex items-center justify-between border-b border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${col === 'Done' ? 'bg-green-500' : col === 'In Progress' ? 'bg-blue-500' : 'bg-gray-400'}`} />
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">{col}</div>
                  </div>
                  <div className="text-[10px] font-black font-mono text-gray-400 bg-black/5 dark:bg-white/10 px-2 py-0.5 rounded-full">{items.length}</div>
                </div>
                <div className="p-4 space-y-3">
                  {items.map((r, i) => (
                    <motion.div 
                      key={r.id} 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/card cursor-pointer"
                    >
                      <div className="font-bold text-sm tracking-tight leading-tight group-hover/card:text-purple-600 dark:group-hover/card:text-purple-400 transition-colors">{(r.cells || {})[titleProp?.id] || 'Untitled'}</div>
                      <div className="flex items-center justify-between mt-4">
                        {dateProp && (
                          <div className="text-[10px] font-bold text-gray-400 flex items-center gap-1.5 uppercase tracking-wider">
                            <span className="w-1 h-1 rounded-full bg-gray-300" />
                            {(r.cells || {})[dateProp.id] || 'No Date'}
                          </div>
                        )}
                        <div className="opacity-0 group-hover/card:opacity-100 transition-opacity">
                          <button className="text-gray-300 hover:text-red-500 transition-colors">
                            <FaTrash size={10} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  {items.length === 0 && (
                     <div className="py-8 text-center border-2 border-dashed border-black/5 dark:border-white/5 rounded-2xl">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Drop here</div>
                     </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {db.view === 'calendar' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl p-8"
        >
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-6">Monthly Roadmap</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rows
              .slice()
              .sort((a, b) => ((a.cells || {})[dateProp?.id] || '').localeCompare((b.cells || {})[dateProp?.id] || ''))
              .map((r, i) => (
                <motion.div 
                  key={r.id} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="text-[10px] font-black uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">{dateProp ? (r.cells || {})[dateProp.id] : 'No date'}</div>
                  <div className="font-black text-sm">{(r.cells || {})[titleProp?.id] || 'Untitled'}</div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}

      {db.view === 'timeline' && (
        <div className="rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-4">
          <div className="text-xs text-gray-400">Timeline view is driven by the Date property. (Basic view)</div>
          <div className="mt-4 space-y-3">
            {rows
              .slice()
              .sort((a, b) => ((a.cells || {})[dateProp?.id] || '').localeCompare((b.cells || {})[dateProp?.id] || ''))
              .map((r) => (
                <div key={r.id} className="flex items-center gap-4">
                  <div className="w-28 text-xs font-black uppercase tracking-[0.25em] text-gray-400">
                    {dateProp ? (r.cells || {})[dateProp.id] : ''}
                  </div>
                  <div className="flex-1 p-4 rounded-2xl border border-gray-200 dark:border-neutral-800">
                    <div className="font-black">{(r.cells || {})[titleProp?.id] || 'Untitled'}</div>
                    {statusProp && <div className="text-xs text-gray-400 mt-1">{(r.cells || {})[statusProp.id] || ''}</div>}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {db.view === 'list' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          {rows.map((r, i) => (
            <motion.div 
              key={r.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md flex items-center justify-between hover:bg-white dark:hover:bg-neutral-900 hover:shadow-lg transition-all cursor-pointer group/lst"
            >
              <div>
                <div className="font-black tracking-tight group-hover/lst:text-purple-600 dark:group-hover/lst:text-purple-400 transition-colors">{(r.cells || {})[titleProp?.id] || 'Untitled'}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1 flex items-center gap-2">
                  {statusProp && (
                    <span className="px-1.5 py-0.5 rounded-md bg-black/5 dark:bg-white/5">{(r.cells || {})[statusProp.id]}</span>
                  )}
                  {statusProp && dateProp ? <span className="w-1 h-1 rounded-full bg-gray-300" /> : ''}
                  {dateProp && (r.cells || {})[dateProp.id]}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {db.view === 'gallery' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rows.map((r, i) => (
            <motion.div 
              key={r.id} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-[2rem] border border-black/5 dark:border-white/5 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden group/gal"
            >
              <div className="h-40 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-[2px] opacity-0 group-hover/gal:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="font-black text-lg tracking-tight group-hover/gal:text-purple-600 dark:group-hover/gal:text-purple-400 transition-colors">{(r.cells || {})[titleProp?.id] || 'Untitled'}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {statusProp && (r.cells || {})[statusProp.id] && (
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-gray-500 underline decoration-purple-500/30">
                      {(r.cells || {})[statusProp.id]}
                    </span>
                  )}
                  {dateProp && (r.cells || {})[dateProp.id] && (
                    <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-lg bg-black/5 dark:bg-white/5 text-gray-400">
                      {(r.cells || {})[dateProp.id]}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

function BlockInput({ block, inputRef, onChange, onKeyDown, updateBlock }) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const result = await uploadMedia(file, 'notion', (p) => setProgress(p));
      updateBlock(block.id, { url: result.url, text: file.name });
    } catch (err) {
      console.error(err);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const common = {
    ref: inputRef,
    value: block.text || '',
    onChange: (e) => onChange(e.target.value),
    onKeyDown,
    className:
      'w-full bg-transparent outline-none placeholder:text-gray-300 dark:placeholder:text-neutral-700'
  };

  if (block.type === 'image' || block.type === 'video' || block.type === 'file') {
    return (
      <div className="w-full py-2">
        {uploading ? (
          <div className="w-full h-32 rounded-2xl bg-gray-50 dark:bg-white/5 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 dark:border-neutral-800">
             <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Uploading {progress}%</div>
             <div className="w-48 h-1 bg-gray-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-purple-500"
                />
             </div>
          </div>
        ) : block.url ? (
          <div className="relative group/media rounded-2xl overflow-hidden border border-gray-200 dark:border-neutral-800">
            {block.type === 'image' && (
              <Image
                src={block.url}
                alt={block.text}
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 900px"
                className="w-full max-h-[500px] object-contain bg-gray-50 dark:bg-neutral-900"
              />
            )}
            {block.type === 'video' && (
              <video src={block.url} controls className="w-full max-h-[500px] bg-black" />
            )}
            {block.type === 'file' && (
              <a href={block.url} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                <FaFile className="text-purple-500" />
                <span className="text-sm font-bold">{block.text}</span>
              </a>
            )}
            <button 
              onClick={() => updateBlock(block.id, { url: null, text: '' })}
              className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover/media:opacity-100 transition-opacity hover:bg-black"
            >
              <FaTrash size={12} />
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center w-full h-32 rounded-2xl border-2 border-dashed border-gray-200 dark:border-neutral-800 hover:border-purple-500/50 hover:bg-purple-50/30 dark:hover:bg-purple-950/10 cursor-pointer transition-all">
            <input type="file" className="hidden" onChange={handleUpload} accept={block.type === 'image' ? 'image/*' : block.type === 'video' ? 'video/*' : '*'} />
            <div className="flex flex-col items-center gap-2">
              {block.type === 'image' && <FaImage className="text-gray-400" />}
              {block.type === 'video' && <FaVideo className="text-gray-400" />}
              {block.type === 'file' && <FaFile className="text-gray-400" />}
              <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Click to upload {block.type}</span>
            </div>
          </label>
        )}
      </div>
    );
  }

  if (block.type === 'code') {
    return (
      <textarea
        {...common}
        rows={Math.max(3, (block.text || '').split('\n').length)}
        placeholder="Enter code here..."
        className={`${common.className} font-mono text-[13px] leading-relaxed bg-black/5 dark:bg-white/5 rounded-2xl px-6 py-5 border border-black/5 dark:border-white/10 shadow-inner focus:border-purple-500/30 transition-all`}
      />
    );
  }

  if (block.type === 'quote') {
    return (
      <div className="border-l-[6px] border-purple-500/30 pl-6 py-2 my-4">
        <textarea
          {...common}
          rows={Math.max(1, (block.text || '').split('\n').length)}
          placeholder="Empty quote"
          className={`${common.className} text-xl font-bold italic text-gray-600 dark:text-gray-300 h-auto resize-none`}
        />
      </div>
    );
  }

  if (block.type === 'h1') {
    return <input {...common} placeholder="Heading" className={`${common.className} text-4xl font-black tracking-tight`} />;
  }
  if (block.type === 'h2') {
    return <input {...common} placeholder="Heading" className={`${common.className} text-2xl font-black tracking-tight`} />;
  }
  if (block.type === 'h3') {
    return <input {...common} placeholder="Heading" className={`${common.className} text-xl font-black tracking-tight`} />;
  }

  if (block.type === 'bullet') {
    return (
      <div className="flex items-start gap-4 w-full group/bl">
        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500/50 shadow-sm shadow-purple-500/20" />
        <input {...common} placeholder="List item" className={`${common.className} text-[15px] font-medium leading-relaxed`} />
      </div>
    );
  }

  if (block.type === 'todo') {
    return (
      <div className="flex items-center gap-4 w-full">
        <button 
          onClick={() => updateBlock(block.id, { checked: !block.checked })}
          className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition-all ${
            block.checked 
              ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/20' 
              : 'border-black/5 dark:border-white/10 hover:border-purple-500/50'
          }`}
        >
          {block.checked && <div className="w-2 h-2 rounded-full bg-white" />}
        </button>
        <input 
          {...common} 
          placeholder="To-do" 
          className={`${common.className} text-[15px] font-medium leading-relaxed ${block.checked ? 'line-through text-gray-400' : ''}`} 
        />
      </div>
    );
  }

  if (block.type === 'toggle') {
    return <input {...common} placeholder="Toggle title" className={`${common.className} text-[15px]`} />;
  }

  return <input {...common} placeholder="Type '/' for commands" className={`${common.className} text-[15px] leading-relaxed`} />;
}
