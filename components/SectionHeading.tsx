import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">{description}</p>
      )}
    </div>
  );
}
