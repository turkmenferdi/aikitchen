export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-headline text-sm font-extrabold text-white shadow-md shadow-primary/30">
        AK
      </span>
      <span className={`font-headline text-lg font-bold tracking-tight ${inverted ? 'text-white' : 'text-on-surface'}`}>
        AI Kitchen
      </span>
    </span>
  );
}
