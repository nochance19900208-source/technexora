import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section.jsx";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-800 text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] pt-[84px] overflow-hidden bg-gray-900 border-b border-gray-700">
        <div className="container-1920 relative py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Privacy Policy
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <Section className="bg-gray-800">
        <div className="container-1920">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 text-gray-200 leading-relaxed">
              
              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">1. Introduction</h2>
                <p>
                  TechNexora ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Personal Information:</strong> Name, email address, company name, and other contact information you provide when contacting us or using our services.</li>
                  <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We may use cookies and similar tracking technologies to track activity on our website and store certain information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Monitor and analyze usage patterns and trends</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in response to valid requests by public authorities.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p className="mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">7. Cookies</h2>
                <p>
                  Our website may use cookies to enhance user experience. You can choose to set your browser to refuse cookies or to alert you when cookies are being sent. However, some parts of our website may not function properly if you disable cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">11. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mt-4">
                  <p className="text-white font-semibold mb-2">Email:</p>
                  <a href="mailto:info@technexora.co" className="text-blue-400 hover:text-blue-300">
                    info@technexora.co
                  </a>
                  <p className="text-white font-semibold mb-2 mt-4">Location:</p>
                  <p className="text-gray-300">Boston, MA, United States</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </Section>

      {/* Back to Home CTA */}
      <Section className="bg-gray-900 border-t border-gray-700">
        <div className="container-1920">
          <div className="text-center">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}

