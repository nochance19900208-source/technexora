import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import TeamMember from "../components/TeamMember.jsx";
import { IMAGES } from "../utils/constants.js";


// Team members - Japanese team
const teamMembers = [
  {
    name: "Andrew Collins",
    role: "CEO / Co-Founder",
    image: "/members/CEO.png"
  },
  {
    name: "Kevin Lin",
    role: "CTO / Co-Founder",
    image: "/members/CTO.png"
  },
  {
    name: "Brent Holliman",
    role: "HR / Co-Founder",
    image: "/members/HR.png"
  },
  {
    name: "Nikhil Sharma",
    role: "PM / Desktop App",
    image: "/members/PM.png"
  },
  {
    name: "Kenji Nakamura",
    role: "Lead Developer",
    image: "/members/Lead.png"
  },
  {
    name: "Samuel Brooks",
    role: "Senior Engineer",
    image: "/members/senior.png"
  },
  {
    name: "Sofia Chen",
    role: "UX Designer",
    image: "/members/Designer.png"
  },
  {
    name: "Daniel Nguyen",
    role: "DevOps Engineer",
    image: "/members/Devops.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] pt-[84px] overflow-hidden bg-ink-950" >
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 to-ink-950" />
        <div className="container-1920 relative py-8 md:py-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-3">
              About TechNexora
            </h1>
            <p className="mt-3 text-xl md:text-2xl text-white/80 leading-relaxed mb-4">
              A long-term technology partner delivering secure, scalable digital products —
              from fast-moving SMB teams to enterprise organizations.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-1.5">10+</div>
                <div className="text-white/70 text-lg">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-1.5">5K+</div>
                <div className="text-white/70 text-lg">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-1.5">150+</div>
                <div className="text-white/70 text-lg">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card rounded-3xl p-6 md:p-8">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Mission</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                innovation, and sustainable success. We transform complex challenges into elegant, 
                scalable digital products.
              </p>
            </div>
            
            <div className="card rounded-3xl p-6 md:p-8">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-3">Our Vision</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                To be the most trusted technology partner for businesses worldwide, recognized for 
                excellence in software development, innovation, and client success. We envision a 
                future where technology seamlessly enables business transformation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Location Section */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-3">Global Reach, Local Presence</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-4">
                Headquartered in North America, serving clients worldwide.
                We collaborate across time zones with clear documentation and predictable delivery.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold text-xl mb-2">Boston, MA</div>
                  <div className="text-white/70 text-base">Primary base</div>
                </div>
                <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-white font-semibold text-xl mb-2">Global Clients</div>
                  <div className="text-white/70 text-base">Remote-friendly delivery</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl soft-border">
              <img
                src={IMAGES.skyline}
                alt="City skyline"
                className="h-full w-full object-cover min-h-[520px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
              <div className="absolute left-8 bottom-8">
                <div className="text-white font-semibold text-2xl mb-2">Built to scale</div>
                <div className="text-white/80 text-base">
                  Secure foundations for long-term growth
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Members Section */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Professionals</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Meet the talented individuals who bring expertise, passion, and innovation to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Core Values</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-xl mb-3">Innovation</div>
              <div className="text-base text-white/70">
                Embracing cutting-edge technologies and creative solutions.
              </div>
            </div>
            <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-xl mb-3">Excellence</div>
              <div className="text-base text-white/70">
                Committed to delivering the highest quality in every project.
              </div>
            </div>
            <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-xl mb-3">Integrity</div>
              <div className="text-base text-white/70">
                Honest communication and ethical practices in all we do.
              </div>
            </div>
            <div className="card rounded-2xl p-8 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-white font-semibold text-xl mb-3">Growth</div>
              <div className="text-base text-white/70">
                Continuously learning and evolving to serve clients better.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Our Approach</h2>
            <p className="text-xl text-white/80 leading-relaxed">
              We believe in building long-term partnerships with our clients, delivering solutions
              that not only meet immediate needs but scale with business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card rounded-3xl p-10 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-2xl mb-4">Transparency</div>
              <div className="text-white/80 text-lg leading-relaxed">
                Clear communication, honest timelines, and transparent processes throughout every project.
              </div>
            </div>
            <div className="card rounded-3xl p-10 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-2xl mb-4">Quality</div>
              <div className="text-white/80 text-lg leading-relaxed">
                Enterprise-grade code quality, security best practices, and thorough testing in every deliverable.
              </div>
            </div>
            <div className="card rounded-3xl p-10 hover:bg-white/[0.06] transition text-center">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-white font-semibold text-2xl mb-4">Partnership</div>
              <div className="text-white/80 text-lg leading-relaxed">
                Long-term relationships built on trust, reliability, and shared success with our clients.
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="card rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Let's Work Together
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Ready to discuss your next project? Get in touch and let's explore how we can help.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
                <Link to="/services" className="btn-secondary">View Services</Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}


