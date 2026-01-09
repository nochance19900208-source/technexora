export default function ServiceCard({ title, text, icon }) {
  return (
    <div className="card rounded-2xl overflow-hidden hover:bg-white/[0.06] transition-all duration-300 group h-full flex flex-col">
      <div className="p-7 flex-grow flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center text-3xl icon-animated group-hover:scale-110 transition-all duration-300 mx-auto">
            {icon}
          </div>
        </div>
        <h3 className="text-white font-semibold text-xl mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-white/70 flex-grow">{text}</p>
      </div>
    </div>
  );
}

