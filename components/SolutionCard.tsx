import React from 'react';
import Link from 'next/link';

interface SolutionCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
  className?: string;
}

export function SolutionCard({
  title,
  description,
  icon,
  href,
  className = '',
}: SolutionCardProps) {
  return (
    <Link href={href}>
      <div className={`bg-surface-container-high rounded-lg border border-outline/20 overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group h-full ${className}`}>
        {icon && (
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
            {icon}
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-on-surface mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed mb-4">{description}</p>
          <div className="text-primary font-medium text-sm flex items-center gap-2">
            Learn More
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
