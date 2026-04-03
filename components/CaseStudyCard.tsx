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
    <div className={`bg-white rounded-lg p-8 border border-border hover:border-accent-teal hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="mb-6">
        <p className="text-sm font-semibold text-accent-teal uppercase tracking-wider">{industry}</p>
        <h3 className="text-2xl font-bold text-foreground mt-2">{company}</h3>
      </div>

      <div className="mb-6 pb-6 border-b border-border">
        <div className="flex items-center gap-4">
          <div className="bg-accent-teal/10 rounded-lg p-4">
            <p className="text-4xl font-bold text-accent-teal">{metric}</p>
            <p className="text-sm text-muted font-medium mt-1">{metricLabel}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
          Challenge
        </p>
        <p className="text-muted leading-relaxed">{challenge}</p>
      </div>

      <div>
        <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
          Outcomes
        </p>
        <ul className="space-y-2">
          {outcomes.map((outcome, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-accent-teal font-bold mt-1">✓</span>
              <span className="text-muted">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
