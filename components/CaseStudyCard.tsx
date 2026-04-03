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
    <div className={`bg-white rounded-[1.5rem] p-8 border border-transparent shadow-2xl shadow-slate-200/60 hover:border-accent-teal/30 hover:bg-white transition-all duration-300 ${className}`}>
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent-teal/90 mb-3">{industry}</p>
        <h3 className="text-2xl font-extrabold text-foreground leading-tight">{company}</h3>
      </div>

      <div className="mb-6 rounded-3xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="rounded-3xl bg-accent-teal/10 p-4">
            <p className="text-4xl font-bold text-accent-teal">{metric}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{metricLabel}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-2">Challenge</p>
        <p className="text-muted leading-relaxed">{challenge}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Outcomes</p>
        <ul className="grid gap-3">
          {outcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="mt-1 text-accent-teal">●</span>
              <span className="text-muted leading-relaxed">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
