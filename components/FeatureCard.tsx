import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  return (
    <div className={`group bg-surface-container/80 backdrop-blur-xl rounded-[1.25rem] p-8 border border-outline/20 shadow-lg shadow-primary/10 hover:-translate-y-1 hover:border-primary/50 transition-all duration-300 ${className}`}>
      {Icon && (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/20 text-primary shadow-sm shadow-primary/20">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-on-surface mb-3">{title}</h3>
      <p className="text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  );
}
