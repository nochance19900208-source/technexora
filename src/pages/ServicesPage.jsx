import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { IMAGES } from "../utils/constants.js";

const services = [
  {
    title: "Web Platforms",
    text: "High-performance web apps, portals, and e-commerce experiences built for speed, SEO, and conversion. We create responsive, accessible, and scalable web solutions that drive business growth.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Custom Software",
    text: "Workflow automation, internal tools, and tailored systems that reduce manual effort and unlock efficiency. Custom solutions designed to fit your unique business processes.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Enterprise Systems",
    text: "Secure, scalable architecture for complex integrations, governance, and reliability requirements. Enterprise-grade solutions that support mission-critical operations.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Cloud & DevOps",
    text: "CI/CD, infrastructure automation, observability, and cost control for always-on production systems. Modern cloud infrastructure that scales with your needs.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "System Modernization",
    text: "Refactor legacy apps, migrate infrastructure, and upgrade performance without disrupting operations. Seamless transitions to modern technology stacks.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Product Engineering",
    text: "End-to-end delivery: discovery → design → development → QA → launch → long-term support. Complete product lifecycle management from concept to market.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] pt-[84px] overflow-hidden">
        <img
          src={IMAGES.servicesHero}
          alt="Services"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/50" />
        <div className="absolute inset-0 gradient-noise opacity-40" />
        <div className="container-1920 relative py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Our Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/75 leading-relaxed">
              We build secure, scalable digital systems tailored to your business —
              fast execution for SMBs and robust delivery for enterprise teams.
            </p>
            <div className="mt-5">
              <Link to="/contact" className="btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Popular Services</h2>
            <p className="text-white/70 leading-relaxed">
              We Run All kinds Of IT Services that vow Your Success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={idx}
                title={service.title}
                text={service.text}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Industries We Serve</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              We build across domains where reliability, security, and performance matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              "FinTech",
              "E-commerce",
              "Healthcare",
              "B2B SaaS",
              "Logistics",
              "Education",
              "Real Estate",
              "Enterprise IT"
            ].map((industry) => (
              <div key={industry} className="card rounded-2xl p-8 hover:bg-white/[0.06] transition text-center">
                <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white font-semibold text-xl mb-3">{industry}</div>
                <div className="text-base text-white/70">
                  Practical solutions with clean UX and scalable architecture.
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="card rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Let's discuss how we can help bring your vision to life with the right technology solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/about" className="btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

