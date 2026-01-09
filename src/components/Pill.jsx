export default function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 soft-border">
      {children}
    </span>
  );
}


