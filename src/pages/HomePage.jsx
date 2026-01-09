import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import Pill from "../components/Pill.jsx";
import Metric from "../components/Metric.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import CaseStudyCard from "../components/CaseStudyCard.jsx";
import { IMAGES } from "../utils/constants.js";

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-ink-950 text-white">
      {/* HERO */}
      <section className="relative min-h-[110vh] pt-[84px] overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Team meeting"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/55 to-ink-950/15" />
        <div className="absolute inset-0 gradient-noise opacity-60" />

        <div className="container-1920 relative py-12 md:py-16">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              <Pill>SMB + Enterprise</Pill>
              <Pill>Secure • Scalable • Reliable</Pill>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              NextGen Software Innovators
              <br />
              <span className="text-blue-400">and Digital Solutions</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/75 leading-relaxed">
              We specialize in delivering comprehensive software solutions tailored to meet the unique needs of businesses across various industries. From fast-moving SMB teams to enterprise organizations.
            </p>

            <div className="mt-5">
              <Link to="/contact" className="btn-primary">Explore Our Services</Link>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">5K+</div>
                <div className="mt-2 text-sm text-white/70">Happy Clients</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">10+</div>
                <div className="mt-2 text-sm text-white/70">Years Experience</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400">150+</div>
                <div className="mt-2 text-sm text-white/70">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-white/60 text-sm flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-400/80" />
            Scroll to explore how we work
          </div>
        </div>
      </section>

      {/* PROCESS GRID */}
      <Section id="solutions" className="bg-ink-950">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3">How We Deliver Results</h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Strategy, design, and engineering working together from day one —
              so your product ships faster, performs better, and scales confidently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: IMAGES.process1,
                title: "Architecture Planning",
                description: "Strategic planning and technical architecture design that sets the foundation for scalable, maintainable systems."
              },
              {
                image: IMAGES.process2,
                title: "Engineering Execution",
                description: "Clean, maintainable code with modern best practices, ensuring reliability and performance at every step."
              },
              {
                image: IMAGES.process3,
                title: "UX / UI Delivery",
                description: "User-centered design that drives engagement and creates intuitive experiences your users will love."
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl soft-border hover:scale-[1.02] transition-transform duration-300">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="text-white font-semibold text-xl md:text-2xl mb-3">
                    {item.title}
                  </div>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ACHIEVEMENT SECTION */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">
              Premier Tech Innovations Software Agency
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="card rounded-2xl p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3">5K+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Trusted Global Clients</div>
              </div>
              <div className="card rounded-2xl p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3">150+</div>
                <div className="text-white/70 text-sm uppercase tracking-wide">Best Project Complete</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* SERVICES PREVIEW */}
      <Section id="services" className="bg-ink-950">
        <div className="container-1920">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">We Run All Kinds Of IT Services</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              that vow Your Success
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ServiceCard
              title="Web Development"
              text="High-performance web apps, portals, and e-commerce experiences built for speed, SEO, and conversion."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title="Mobile App Development"
              text="Custom mobile solutions for iOS and Android, delivering native and cross-platform apps that users love."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title="UI/UX Design"
              text="Modern, intuitive interfaces that transform complex ideas into elegant user experiences."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              }
            />
            <ServiceCard
              title="AI/ML Development"
              text="Intelligent systems that process data, uncover insights, and automate critical business tasks."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
            <ServiceCard
              title="Blockchain Development"
              text="Secure, scalable blockchain solutions including smart contracts and decentralized applications."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              }
            />
            <ServiceCard
              title="Custom Software Development"
              text="Workflow automation, internal tools, and tailored systems that reduce manual effort and unlock efficiency."
              icon={
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
            />
          </div>

          <div className="mt-5 text-center">
            <Link to="/services" className="btn-primary">Explore Popular Services</Link>
          </div>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">Explore Our Recent Case Studies</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              Real projects, real results — see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <CaseStudyCard
              category="Web Development"
              title="Enterprise E-Commerce Platform"
              description="We understand that every business is unique, which is why we offer a wide range of web applications development services that are tailored to each client's specific needs."
            />
            <CaseStudyCard
              category="Mobile Development"
              title="Cross-Platform Mobile App"
              description="We offer customized end-to-end solutions for mobile app development, ensuring that your project is delivered on time and to the highest possible standard."
            />
            <CaseStudyCard
              category="UI/UX Design"
              title="Modern Dashboard Redesign"
              description="We create meaningful digital experiences through modern, intuitive UI/UX design. Our team transforms complex ideas into simple, elegant interfaces."
            />
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">Clients Feedback</h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              500+ People Say About Us — Don't just take our word for it, hear from our satisfied clients.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            <TestimonialCard
              quote="Honestly, this was the smoothest dev experience I've had in years. We needed a React dashboard built from scratch, and they jumped in right away, asked the right questions, and delivered a clean, fast UI that my team uses every day."
              author="Will Kerns"
              role="Product Manager"
              company="TechCorp Solutions"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=90"
            />
            <TestimonialCard
              quote="We had a messy backend with half-finished endpoints, database issues, and constant timeouts. They fixed everything. They reorganized our Node.js code, optimized our MySQL queries, and finally made our API stable."
              author="Nima Farshid"
              role="CTO"
              company="DataFlow Inc"
              avatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces&auto=format&q=90"
            />
            <TestimonialCard
              quote="Working with this team was a game-changer for our business. They delivered a complex mobile app faster than we expected, with clean architecture and flawless performance. Communication was clear, and every feature was built exactly the way we envisioned."
              author="Jim Karol"
              role="Founder"
              company="StartupHub"
              avatar="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces&auto=format&q=90"
            />
          </div>
        </div>
      </Section>

      {/* TRUST SECTION */}
      <Section id="case-studies" className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Trusted by SMBs and Enterprise Clients Worldwide
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed">
              From early-stage startups to enterprise platforms, we design and build systems
              that grow with your business — reliably, securely, and at scale.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/45">
            <span className="text-sm tracking-wide">Google</span>
            <span className="text-sm tracking-wide">IBM</span>
            <span className="text-sm tracking-wide">Salesforce</span>
            <span className="text-sm tracking-wide">Spotify</span>
            <span className="text-sm tracking-wide">DocuSign</span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
            <div className="space-y-4">
              <div className="card rounded-2xl p-6">
                <h3 className="text-2xl font-semibold text-white mb-4">We Are A Software Company</h3>
                <h4 className="text-xl font-semibold text-blue-400 mb-3">
                  Innovate Soft Solutions to Grow Tech Business
                </h4>
                <p className="text-white/70 leading-relaxed mb-4">
                  With a portfolio of successful projects spanning various industries, our team has consistently demonstrated the ability to transform ideas into high-performing, user-friendly applications.
                </p>
                <Link to="/about" className="btn-secondary">Learn More About Us</Link>
              </div>

              <div className="card rounded-2xl p-6">
                <div className="text-white font-semibold text-xl mb-3">Who We Work With</div>
                <ul className="mt-3 space-y-1.5 text-white/70">
                  <li>• Startups launching their first platform</li>
                  <li>• SMBs scaling systems and operations</li>
                  <li>• Enterprises modernizing complex software</li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl soft-border">
              <img
                src={IMAGES.meeting}
                alt="Client meeting"
                className="h-full w-full object-cover min-h-[520px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/20 to-transparent" />
              <div className="absolute left-6 bottom-6">
                <div className="text-white font-semibold">Enterprise-grade delivery</div>
                <div className="text-white/70 text-sm mt-1">
                  Clear process • strong communication • measurable outcomes
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="card rounded-3xl p-6 md:p-8 overflow-hidden relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
            <div className="relative max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                Need Help For Your Project?
              </h2>
              <p className="text-white/70 leading-relaxed mb-5">
                We are ready to help your next projects, let's work together
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">Get In Touch</Link>
                <Link to="/services" className="btn-secondary">View Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


