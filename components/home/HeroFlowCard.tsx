import { Check, Clock3, TriangleAlert, UserRound, Bot } from 'lucide-react';

type StepStatus = 'done' | 'warning' | 'human' | 'pending';

interface HeroFlowCardProps {
  label: string;
  title: string;
  footer: string;
  steps: { title: string; detail: string; status: string }[];
}

const statusStyles: Record<StepStatus, { icon: typeof Check; ring: string; text: string }> = {
  done: { icon: Check, ring: 'bg-success/10 text-success ring-success/25', text: 'text-on-surface' },
  warning: { icon: TriangleAlert, ring: 'bg-amber-400/10 text-amber-300 ring-amber-500/30', text: 'text-on-surface' },
  human: { icon: UserRound, ring: 'bg-primary/10 text-primary-fixed ring-primary/30', text: 'text-on-surface' },
  pending: { icon: Clock3, ring: 'bg-surface-container-high text-outline ring-outline-variant', text: 'text-on-surface-variant' },
};

export function HeroFlowCard({ label, title, footer, steps }: HeroFlowCardProps) {
  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent blur-2xl" />
      <figure className="relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between border-b border-outline-variant/80 bg-surface-container-low px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
              <Bot size={18} />
            </span>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">{label}</p>
              <p className="font-headline text-base font-bold text-on-surface">{title}</p>
            </div>
          </div>
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
            <span className="h-2.5 w-2.5 rounded-full bg-outline-variant" />
          </span>
        </div>

        <ol className="px-6 py-5">
          {steps.map((step, index) => {
            const style = statusStyles[(step.status as StepStatus) in statusStyles ? (step.status as StepStatus) : 'pending'];
            const Icon = style.icon;
            const isLast = index === steps.length - 1;
            return (
              <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
                {!isLast && <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-2.25rem)] w-px bg-outline-variant" />}
                <span className={`relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ring-1 ${style.ring}`}>
                  <Icon size={16} strokeWidth={2.4} />
                </span>
                <div className={`flex-1 rounded-xl px-3 py-1.5 ${step.status === 'human' ? 'bg-primary/5 ring-1 ring-primary/20' : ''}`}>
                  <p className={`text-[15px] font-semibold ${style.text}`}>{step.title}</p>
                  <p className="text-sm text-on-surface-variant">{step.detail}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <figcaption className="border-t border-outline-variant/80 bg-surface-container-low px-6 py-3.5 text-sm font-medium text-on-surface-variant">
          {footer}
        </figcaption>
      </figure>
    </div>
  );
}
