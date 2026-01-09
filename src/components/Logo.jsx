import React from "react";
import logoImage from "/techlogo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <img 
        src={logoImage} 
        alt="TechNexora Logo" 
        className="h-40 md:h-48 lg:h-52 xl:h-56 w-auto"
      />
    </div>
  );
}
