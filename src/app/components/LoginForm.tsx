"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { forgotPassword, resetPassword, loginStart } from "@/utils/authApi";

type ViewState = "login" | "login-otp" | "signup" | "forgot" | "forgot-otp";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [view, setView] = useState<ViewState>("login");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { loginWithOtp, signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (view === "login") {
        if (!email.trim() || !password.trim()) {
          setError("Email and password are required");
          setLoading(false);
          return;
        }
        await loginStart(email, password);
        setView("login-otp");
      } else if (view === "login-otp") {
        if (!otp.trim()) {
          setError("OTP is required");
          setLoading(false);
          return;
        }
        const success = await loginWithOtp(email, otp);
        if (success) {
          router.push("/dashboard");
        } else {
          setError("Invalid or expired OTP");
        }
      } else if (view === "signup") {
        if (!name.trim()) {
          setError("Name is required");
          setLoading(false);
          return;
        }
        const success = await signup(email, password, name);
        if (success) {
          router.push("/dashboard");
        } else {
          setError("Signup failed. Please try again.");
        }
      } else if (view === "forgot") {
        if (!email.trim()) {
          setError("Email is required");
          setLoading(false);
          return;
        }
        await forgotPassword(email);
        setView("forgot-otp");
      } else if (view === "forgot-otp") {
        if (!otp.trim() || !newPassword.trim()) {
          setError("OTP and new password are required");
          setLoading(false);
          return;
        }
        await resetPassword(email, otp, newPassword);
        setView("login");
        setPassword("");
        setOtp("");
        setNewPassword("");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleView = (newView: ViewState) => {
    setView(newView);
    setError("");
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-earth-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gold-400">
        {view === "login" && "Login"}
        {view === "login-otp" && "Enter OTP"}
        {view === "signup" && "Sign Up"}
        {view === "forgot" && "Forgot Password"}
        {view === "forgot-otp" && "Reset Password"}
      </h2>
      
      {error && (
        <div className="p-3 bg-red-900/50 border border-red-500 rounded-md text-red-200 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {view === "signup" && (
          <div>
            <label
              htmlFor="name"
              className="text-sm font-medium text-gold-500"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
        )}
        {(view === "login" || view === "signup") && (
          <>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gold-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gold-500"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </>
        )}
        {view === "forgot" && (
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gold-500"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
            />
          </div>
        )}
        {view === "forgot-otp" && (
          <>
            <div>
              <label
                htmlFor="otp"
                className="text-sm font-medium text-gold-500"
              >
                OTP Code
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="one-time-code"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
            <div>
              <label
                htmlFor="new-password"
                className="text-sm font-medium text-gold-500"
              >
                New Password
              </label>
              <input
                id="new-password"
                name="new-password"
                type="password"
                autoComplete="new-password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-between">
          {view === "login" && (
            <>
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-gold-600 bg-earth-700 border-earth-600 rounded focus:ring-gold-500"
                />
                <label
                  htmlFor="remember-me"
                  className="block ml-2 text-sm text-gold-500"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleView("forgot");
                  }}
                  className="font-medium text-gold-600 hover:text-gold-500"
                >
                  Forgot your password?
                </a>
              </div>
            </>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-gold-600 rounded-md hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : (
            <>
              {view === "login" && "Send OTP"}
              {view === "login-otp" && "Verify & Login"}
              {view === "signup" && "Sign Up"}
              {view === "forgot" && "Send OTP"}
              {view === "forgot-otp" && "Reset Password"}
            </>
          )}
        </button>
      </form>
      <p className="text-sm text-center text-gold-500">
        {view === "login" && (
          <>
            Don&apos;t have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleView("signup");
              }}
              className="font-medium text-gold-600 hover:text-gold-500"
            >
              Sign up
            </a>
          </>
        )}
        {view === "signup" && (
          <>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleView("login");
              }}
              className="font-medium text-gold-600 hover:text-gold-500"
            >
              Login
            </a>
          </>
        )}
        {view === "forgot" && (
          <>
            Remember your password?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleView("login");
              }}
              className="font-medium text-gold-600 hover:text-gold-500"
            >
              Login
            </a>
          </>
        )}
        {view === "forgot-otp" && (
          <>
            Remember your password?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleView("login");
              }}
              className="font-medium text-gold-600 hover:text-gold-500"
            >
              Login
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginForm;
