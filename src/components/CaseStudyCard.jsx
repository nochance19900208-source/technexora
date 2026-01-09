import { Link } from "react-router-dom";

export default function CaseStudyCard({ title, description, category, link }) {
  return (
    <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition h-full flex flex-col">
      <div className="text-xs text-blue-400 font-semibold mb-3 uppercase tracking-wide">
        {category}
      </div>
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-white/70 leading-relaxed flex-grow mb-6">{description}</p>
      {link && (
        <Link to={link} className="text-blue-400 hover:text-blue-300 font-semibold text-sm transition">
          Learn More →
        </Link>
      )}
    </div>
  );
}

