import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function AuthPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Validation
      if (!formData.email || !formData.password) {
        throw new Error("Please fill in all required fields");
      }

      if (!isLogin) {
        if (!formData.name) {
          throw new Error("Please enter your name");
        }
        if (formData.password !== formData.confirmPassword) {
          throw new Error("Passwords do not match");
        }
        if (formData.password.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
      }

      // Simulate API call - Replace with your actual authentication endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (isLogin) {
        // Login successful - set auth state
        login({
          email: formData.email,
          name: formData.email.split("@")[0] // Use email prefix as name for demo
        });

        setSubmitStatus({
          type: "success",
          message: "Login successful! Redirecting..."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

        // Redirect after a moment
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        // Registration successful - auto login
        login({
          email: formData.email,
          name: formData.name
        });

        setSubmitStatus({
          type: "success",
          message: "Registration successful! Redirecting..."
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: ""
        });

        // Redirect after a moment
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "An error occurred. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink-950 text-white flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo/Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-white/70">
            {isLogin
              ? "Sign in to access your account and manage your projects."
              : "Join us to get started with our services and solutions."}
          </p>
        </div>

        <div className="card rounded-3xl p-8 md:p-10">
          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-white/10">
            <button
              type="button"
              onClick={() => {
                setIsLogin(true);
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setSubmitStatus(null);
              }}
              className={`pb-4 px-2 font-semibold transition ${
                isLogin
                  ? "text-white border-b-2 border-blue-500"
                  : "text-white/50 hover:text-white/75"
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setSubmitStatus(null);
              }}
              className={`pb-4 px-2 font-semibold transition ${
                !isLogin
                  ? "text-white border-b-2 border-blue-500"
                  : "text-white/50 hover:text-white/75"
              }`}
            >
              Register
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={!isLogin}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Your full name"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-2.5">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                placeholder={isLogin ? "Enter your password" : "Create a password (min. 6 characters)"}
              />
            </div>

            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-2.5">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required={!isLogin}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/[0.03] text-blue-500 focus:ring-blue-500/50"
                  />
                  <span className="text-sm text-white/70">Remember me</span>
                </label>
                <Link to="#" className="text-sm text-blue-400 hover:text-blue-300 transition">
                  Forgot password?
                </Link>
              </div>
            )}

            {submitStatus && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting
                ? isLogin
                  ? "Logging in..."
                  : "Creating account..."
                : isLogin
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          {isLogin && (
            <div className="mt-6 text-center text-sm text-white/70">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Sign up
              </button>
            </div>
          )}

          {!isLogin && (
            <div className="mt-6 text-center text-sm text-white/70">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className="text-blue-400 hover:text-blue-300 font-semibold transition"
              >
                Sign in
              </button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-white/50">
          By {isLogin ? "signing in" : "registering"}, you agree to our{" "}
          <Link to="/privacy-policy" className="text-blue-400 hover:text-blue-300 transition">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link to="#" className="text-blue-400 hover:text-blue-300 transition">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}

