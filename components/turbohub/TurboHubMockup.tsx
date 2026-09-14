import { Database, MessageSquareText, Sparkles } from 'lucide-react';

interface TurboHubMockupProps {
  label: string;
  askLabel: string;
  question: string;
  sourcesLabel: string;
  sources: string[];
  answerTitle: string;
  columns: string[];
  rows: string[][];
  footnote: string;
}

export function TurboHubMockup(props: TurboHubMockupProps) {
  const shares = props.rows.map((row) => Number.parseInt(row[2].replace(/\D/g, ''), 10) || 0);

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-secondary/20 via-primary/10 to-transparent blur-2xl" />
      <figure className="relative overflow-hidden rounded-3xl border border-outline-variant bg-surface-container shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between border-b border-outline-variant/80 bg-surface-container-low px-6 py-3.5">
          <p className="font-headline text-sm font-bold text-on-surface">TurboHUB</p>
          <span className="rounded-full bg-surface-container-high px-2.5 py-1 text-xs font-medium text-on-surface-variant">{props.label}</span>
        </div>

        <div className="space-y-4 p-6">
          <div className="flex gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant">
              <MessageSquareText size={17} />
            </span>
            <div className="rounded-2xl rounded-tl-sm bg-surface-container-low px-4 py-3">
              <p className="text-xs font-medium text-on-surface-variant">{props.askLabel}</p>
              <p className="text-[15px] font-semibold text-on-surface">{props.question}</p>
            </div>
          </div>

          <div className="flex gap-3">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
              <Sparkles size={17} />
            </span>
            <div className="flex-1 rounded-2xl rounded-tl-sm border border-outline-variant p-4">
              <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-on-surface-variant">
                <Database size={13} />
                {props.sourcesLabel}:
                {props.sources.map((source) => (
                  <span key={source} className="rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary-fixed">
                    {source}
                  </span>
                ))}
              </div>
              <p className="mb-3 text-sm font-bold text-on-surface">{props.answerTitle}</p>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-xs text-on-surface-variant">
                    {props.columns.map((column, idx) => (
                      <th key={column} scope="col" className={`pb-2 font-medium ${idx > 0 ? 'text-right' : ''}`}>
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/70">
                  {props.rows.map((row, idx) => (
                    <tr key={row[0]}>
                      <td className="py-2 font-medium text-on-surface">
                        <span className="mb-1 block">{row[0]}</span>
                        <span className="block h-1.5 rounded-full bg-surface-container-high">
                          <span className="block h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${Math.min(100, shares[idx] * 3)}%` }} />
                        </span>
                      </td>
                      <td className="py-2 text-right tabular-nums text-on-surface">{row[1]}</td>
                      <td className="py-2 text-right tabular-nums text-on-surface-variant">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <figcaption className="border-t border-outline-variant/80 bg-surface-container-low px-6 py-3 text-xs text-on-surface-variant">
          {props.footnote}
        </figcaption>
      </figure>
    </div>
  );
}
