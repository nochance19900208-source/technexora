import React, { useState } from "react";
import Section from "../components/Section.jsx";
import { IMAGES } from "../utils/constants.js";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Formspree endpoint - Replace with your Formspree form ID
  // Get it from: https://formspree.io/forms (free account required)
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Check if Formspree is configured
      if (FORMSPREE_ENDPOINT.includes('YOUR_FORM_ID')) {
        throw new Error('Formspree is not configured. Follow these 3 steps: 1) Sign up at formspree.io 2) Create a form and copy the endpoint URL 3) Create a .env file with VITE_FORMSPREE_ENDPOINT=your_url. See QUICK_SETUP.md for detailed instructions.');
      }

      // Send form data to Formspree
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Message from ${formData.name}`
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      setSubmitStatus({ type: 'success', message: 'Thank you for your message! We\'ll get back to you soon.' });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'Failed to send message. Please try again or contact us directly at info@technexora.co' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] pt-[84px] overflow-hidden">
        <img
          src={IMAGES.contactHero}
          alt="Contact us"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/70 to-ink-950/50" />
        <div className="absolute inset-0 gradient-noise opacity-40" />
        <div className="container-1920 relative py-12 md:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              Have a project in mind? Tell us what you're building — we'll respond quickly with next steps,
              timeline expectations, and a clear plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Let's Start a Conversation</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Whether you're looking to build a new product, modernize existing systems,
                or need expert guidance on your technology strategy, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="card rounded-2xl p-6">
                  <div className="text-white font-semibold mb-2">Email</div>
                  <a href="mailto:info@technexora.co" className="text-blue-400 hover:text-blue-300">
                    info@technexora.co
                  </a>
                </div>

                <div className="card rounded-2xl p-6">
                  <div className="text-white font-semibold mb-2">Location</div>
                  <div className="text-white/70">Boston, MA</div>
                  <div className="text-white/70 mt-1">Serving clients worldwide</div>
                </div>

                <div className="card rounded-2xl p-6">
                  <div className="text-white font-semibold mb-4">Response Time</div>
                  <div className="text-white/70">
                    We typically respond within 24 hours during business days.
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card rounded-3xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-white mb-2.5">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional CTA */}
      <Section className="bg-ink-900/25">
        <div className="container-1920">
          <div className="card rounded-3xl p-10 md:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
            <div className="relative max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Prefer a Different Way to Connect?
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                We're flexible. Whether you prefer email, phone, or a video call,
                we'll find the best way to discuss your project.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

