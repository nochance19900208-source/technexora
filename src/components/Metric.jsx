export default function Metric({ value, label }) {
  return (
    <div className="card rounded-2xl p-6">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
}


