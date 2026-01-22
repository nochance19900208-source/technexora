import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";

const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition",
        scrolled ? "bg-ink-900/85 backdrop-blur-md soft-border" : "bg-transparent"
      ].join(" ")}
    >
      <div className="container-1920 h-[84px] flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`hover:text-white transition ${
                location.pathname === item.href ? "text-white font-medium" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link to="/account" className="btn-secondary">
                Account
              </Link>
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                className="btn-primary"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/auth" className="btn-secondary">
                Login
              </Link>
              <Link to="/auth" className="btn-primary">
                Register
              </Link>
            </>
          )}
        </div> */}
      </div>
    </header>
  );
}
