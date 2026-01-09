export default function TestimonialCard({ quote, author, role, company, avatar }) {
  return (
    <div className="card rounded-2xl p-8 h-full">
      <div className="text-white/90 leading-relaxed mb-6">
        "{quote}"
      </div>
      <div className="border-t border-white/10 pt-6 flex items-center gap-4">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
          />
        )}
        <div className="flex-1">
          <div className="text-white font-semibold">{author}</div>
          <div className="text-sm text-white/60 mt-1">
            {role} {company && `• ${company}`}
          </div>
        </div>
      </div>
    </div>
  );
}

