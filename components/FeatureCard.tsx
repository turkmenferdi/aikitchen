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
    <div className={`bg-white rounded-lg p-8 border border-border hover:border-accent-teal transition-all duration-300 ${className}`}>
      {Icon && (
        <div className="mb-4">
          <Icon className="w-8 h-8 text-accent-teal" stroke-width={1.5} />
        </div>
      )}
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted leading-relaxed">{description}</p>
    </div>
  );
}
