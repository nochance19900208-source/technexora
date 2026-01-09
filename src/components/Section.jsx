import React from "react";

export default function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`relative py-6 md:py-8 ${className}`}>
      {children}
    </section>
  );
}
