import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { galleryItems } from '@/data/gallery';
import { GalleryItem } from '@/types';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Ferrari Era', 'Championship', 'McLaren Era', 'Mercedes Era'];

  const filteredItems =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category.toLowerCase().includes(activeFilter.toLowerCase()));

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === 'Escape') setSelectedItem(null);
      if (e.key === 'ArrowRight') {
        const idx = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const next = (idx + 1) % filteredItems.length;
        setSelectedItem(filteredItems[next]);
      }
      if (e.key === 'ArrowLeft') {
        const idx = filteredItems.findIndex((it) => it.id === selectedItem.id);
        const prev = (idx - 1 + filteredItems.length) % filteredItems.length;
        setSelectedItem(filteredItems[prev]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, filteredItems]);

  return (
    <SectionWrapper
      id="gallery"
      badge="Visual Chronicle"
      subtitle="Iconic Moments in Photography"
      title="The Career Gallery"
      description="Twelve defining captures spanning twenty years of Grand Prix racing. From the maiden podium at Albert Park in 2007 to the emotional victory in Barcelona and pole in Mexico City."
    >
      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all border ${
              activeFilter === cat
                ? 'bg-rosso text-white border-rosso font-bold shadow-md'
                : 'glass-panel text-text-secondary border-surface-border hover:border-rosso/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedItem(item)}
            className="group relative rounded-card overflow-hidden glass-panel border border-surface-border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-rosso/50"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-cream-200/50 dark:bg-raceDark-card">
              <ImageWithFallback
                src={`/assets/gallery/${item.id}.webp`}
                alt={item.title}
                category={item.category}
                fallbackText={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-raceDark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="p-3 rounded-full bg-rosso text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>

              {/* Tag pill */}
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-raceDark/70 backdrop-blur-md text-[10px] font-mono text-white">
                {item.year}
              </div>
            </div>

            <div className="p-5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-rosso font-bold block mb-1">
                {item.category}
              </span>
              <h3 className="font-displayGrotesk font-black text-lg text-text-primary tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-xs text-text-secondary line-clamp-2 leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Accessible Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-raceDark/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl rounded-card overflow-hidden bg-cream-50 dark:bg-raceDark-surface border border-surface-border shadow-2xl flex flex-col"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-raceDark/60 hover:bg-raceDark text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[16/10] bg-raceDark overflow-hidden flex items-center justify-center">
                <ImageWithFallback
                  src={`/assets/gallery/${selectedItem.id}.webp`}
                  alt={selectedItem.title}
                  category={selectedItem.category}
                  fallbackText={selectedItem.title}
                  className="w-full h-full object-contain"
                />

                {/* Left / Right Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const idx = filteredItems.findIndex((it) => it.id === selectedItem.id);
                    const prev = (idx - 1 + filteredItems.length) % filteredItems.length;
                    setSelectedItem(filteredItems[prev]);
                  }}
                  className="absolute left-4 p-2.5 rounded-full bg-raceDark/60 hover:bg-raceDark text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const idx = filteredItems.findIndex((it) => it.id === selectedItem.id);
                    const next = (idx + 1) % filteredItems.length;
                    setSelectedItem(filteredItems[next]);
                  }}
                  className="absolute right-4 p-2.5 rounded-full bg-raceDark/60 hover:bg-raceDark text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-rosso font-bold uppercase">
                    {selectedItem.category} · {selectedItem.year}
                  </span>
                  <div className="flex gap-1.5">
                    {selectedItem.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-cream-200 dark:bg-raceDark text-[10px] font-mono text-text-muted"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-displayGrotesk font-black text-2xl text-text-primary mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {selectedItem.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};
