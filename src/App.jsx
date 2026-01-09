import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import HomePage from "./pages/HomePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import AccountPage from "./pages/AccountPage.jsx";

export default function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/auth";

  return (
    <div className="min-h-screen bg-ink-950 text-white flex flex-col">
      <ScrollToTop />
      {!isAuthPage && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
}
