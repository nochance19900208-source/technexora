export default function TeamMember({ name, role, image }) {
  return (
    <div className="card rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 text-center group">
      <div className="relative w-48 h-48 sm:w-52 sm:h-52 md:w-56 md:h-56 mx-auto mb-5 rounded-2xl overflow-hidden soft-border ring-2 ring-white/10 group-hover:ring-blue-400/50 transition-all shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          style={{ 
            objectPosition: name === 'Quinn Davis' ? 'center 60%' : 'center center',
            transform: 'scale(1.2)',
            transformOrigin: 'center center'
          }}
        />
      </div>
      <div className="text-white font-semibold text-xl mb-2">{name}</div>
      <div className="text-base text-white/70">{role}</div>
    </div>
  );
}

