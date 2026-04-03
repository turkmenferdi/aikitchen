import React from 'react';

interface CaseStudyCardProps {
  company: string;
  industry: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  outcomes: string[];
  className?: string;
}

export function CaseStudyCard({
  company,
  industry,
  metric,
  metricLabel,
  challenge,
  outcomes,
  className = '',
}: CaseStudyCardProps) {
  return (
    <div className={`bg-surface-container rounded-[1.5rem] p-8 border border-outline/20 shadow-2xl shadow-primary/10 hover:border-primary/40 hover:bg-surface-container-high transition-all duration-300 ${className}`}>
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-primary/90 mb-3">{industry}</p>
        <h3 className="text-2xl font-extrabold text-on-surface leading-tight">{company}</h3>
      </div>

      <div className="mb-6 rounded-3xl bg-surface-container-high p-6 border border-outline/20 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-primary/20 p-4">
            <p className="text-4xl font-bold text-primary">{metric}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-on-surface">{metricLabel}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-on-surface uppercase tracking-wide mb-2">Challenge</p>
        <p className="text-on-surface-variant leading-relaxed">{challenge}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-on-surface uppercase tracking-wide mb-4">Outcomes</p>
        <ul className="grid gap-3">
          {outcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 text-primary">●</span>
              <span className="text-on-surface-variant leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
