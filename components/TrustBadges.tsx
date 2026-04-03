import React from 'react';
import { Shield, Lock, Zap } from 'lucide-react';

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface TrustBadgesProps {
  badges?: TrustBadge[];
  className?: string;
}

export function TrustBadges({ badges, className = '' }: TrustBadgesProps) {
  const defaultBadges: TrustBadge[] = badges || [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      label: 'Enterprise Security',
      value: 'On-premises deployment',
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      label: 'Compliant',
      value: 'SOC2, HIPAA, GDPR ready',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      label: 'Proven Track Record',
      value: 'Deployed across industries',
    },
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${className}`}>
      {defaultBadges.map((badge, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="flex-shrink-0">{badge.icon}</div>
          <div>
            <p className="font-semibold text-on-surface text-sm uppercase tracking-wider">
              {badge.label}
            </p>
            <p className="text-on-surface-variant text-sm mt-1">{badge.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
