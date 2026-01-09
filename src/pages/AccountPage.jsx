import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function AccountPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-ink-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] pt-[84px] overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/50 to-ink-950" />
        <div className="container-1920 relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              My Account
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed">
              Manage your account settings and view your information.
            </p>
          </div>
        </div>
      </section>

      {/* Account Info Section */}
      <Section className="bg-ink-950">
        <div className="container-1920">
          <div className="max-w-2xl mx-auto">
            <div className="card rounded-3xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Account Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-2">
                    Email Address
                  </label>
                  <div className="px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white">
                    {user?.email || "Not available"}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white/70 mb-2">
                    Name
                  </label>
                  <div className="px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white">
                    {user?.name || "Not available"}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/contact" className="btn-secondary">
                      Contact Support
                    </Link>
                    <Link to="/services" className="btn-secondary">
                      View Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

