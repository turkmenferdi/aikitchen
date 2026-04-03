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
    <div className={`group bg-white/95 backdrop-blur-xl rounded-[1.25rem] p-8 border border-border/70 shadow-lg shadow-slate-200/50 hover:-translate-y-1 hover:border-accent-teal transition-all duration-300 ${className}`}>
      {Icon && (
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-accent-teal/10 text-accent-teal shadow-sm shadow-accent-teal/10">
          <Icon className="w-7 h-7" strokeWidth={1.5} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
}
