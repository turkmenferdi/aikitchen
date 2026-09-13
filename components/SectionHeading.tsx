import React from 'react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  eyebrow?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">{eyebrow}</p>
      )}
      <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-on-surface md:text-[2.5rem]">{title}</h2>
      {description && (
        <p className="text-lg leading-relaxed text-on-surface-variant">{description}</p>
      )}
    </div>
  );
}
