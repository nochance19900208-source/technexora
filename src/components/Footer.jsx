import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact Us", href: "/contact" }
    ],
    services: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile App Development", href: "/services" },
      { label: "Custom Software", href: "/services" },
      { label: "Enterprise Systems", href: "/services" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "#" }
    ]
  };

  return (
    <footer className="bg-ink-950 border-t border-white/10 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 to-ink-950 opacity-50" />

      <div className="container-1920 py-5 md:py-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 mb-3 md:mb-4">
          {/* Company Info */}
          <div className="lg:col-span-2 flex flex-col">
            <Link to="/" className="flex items-center mb-1 md:mb-1.5">
              <Logo />
            </Link>
            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-lg mb-1 md:mb-1.5">
              Building high-quality websites and software for serious businesses.
              A long-term technology partner delivering secure, scalable digital products.
            </p>

            {/* Contact Info */}
            <div className="space-y-1.5">
              <a
                href="mailto:info@technexora.net"
                className="text-blue-400 hover:text-blue-300 text-base md:text-lg font-medium transition inline-flex items-center gap-2 group"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                info@technexora.net
              </a>

              <div className="flex items-center gap-2 text-white/70 text-base md:text-lg">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>1-14-2 Tamagawa, Setagaya City, Tokyo 158-0094</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-8 md:pt-10">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-1.5">Company</h3>
            <ul className="space-y-1">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-base md:text-lg transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="pt-8 md:pt-10">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-1.5">Services</h3>
            <ul className="space-y-1">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-base md:text-lg transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="pt-8 md:pt-10">
            <h3 className="text-white font-semibold text-lg md:text-xl mb-1.5">Legal</h3>
            <ul className="space-y-1">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-white text-base md:text-lg transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400/0 group-hover:bg-blue-400 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-2 md:pt-3 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white/70 text-base md:text-lg font-medium">
              © 2026 TechNexora. All rights reserved.
            </p>
            <a
              href="mailto:info@technexora.net"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <EnvelopeIcon className="h-5 w-5" />
              <span>info@technexora.net</span>
            </a>
            <a
              href="tel:+18578337936"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <PhoneIcon className="h-4 w-4" />
              <span>+1 (857) 833-7936</span>
            </a>
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm md:text-base">
                NextGen Software Innovators
              </span>
              <div className="h-3 w-px bg-white/20" />
              <span className="text-white/60 text-sm md:text-base">
                Digital Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

