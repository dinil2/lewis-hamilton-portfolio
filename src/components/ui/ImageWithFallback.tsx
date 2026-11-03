import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSvg?: React.ReactNode;
  fallbackText?: string;
  category?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackSvg,
  fallbackText,
  category,
  ...props
}) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
    // Explicit Instruction 12: log a clear console warning
    console.info(`[Asset Notice] Image not found at "${src}". Rendering graceful vector illustration fallback.`);
  };

  if (error || !src) {
    if (fallbackSvg) {
      return <div className={`relative overflow-hidden ${className}`}>{fallbackSvg}</div>;
    }

    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-cream-200/50 dark:bg-raceDark-card text-text-muted p-6 text-center select-none overflow-hidden ${className}`}
      >
        {/* Race contour grid backdrop */}
        <div className="absolute inset-0 opacity-10 bg-circuit-contour-bg pointer-events-none" />
        <div className="w-12 h-12 rounded-full border border-rosso/30 flex items-center justify-center mb-2 text-rosso font-mono text-xs font-bold">
          44
        </div>
        {category && (
          <span className="text-[10px] tracking-widest uppercase font-mono text-rosso mb-1">
            {category}
          </span>
        )}
        <p className="text-xs font-medium text-text-secondary line-clamp-2 max-w-[200px]">
          {fallbackText || alt || 'Lewis Hamilton Archive'}
        </p>
      </div>
    );
  }

  return <img src={src} alt={alt} onError={handleError} className={className} {...props} />;
};

