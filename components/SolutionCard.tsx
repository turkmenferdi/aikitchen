import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon?: React.ReactNode;
  points?: string[];
}

export function SolutionCard({ title, description, href, cta, icon, points = [] }: SolutionCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-3xl border border-outline-variant bg-surface-container p-8 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_-20px_rgba(79,70,229,0.35)]"
    >
      {icon && <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-fixed">{icon}</span>}
      <h2 className="mb-3 text-2xl font-bold text-on-surface">{title}</h2>
      <p className="mb-6 text-lg leading-relaxed text-on-surface-variant">{description}</p>
      {points.length > 0 && (
        <ul className="mb-8 space-y-2.5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-on-surface">
              <Check size={18} className="mt-0.5 flex-shrink-0 text-primary-fixed" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-2 font-semibold text-primary-fixed">
        {cta}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
