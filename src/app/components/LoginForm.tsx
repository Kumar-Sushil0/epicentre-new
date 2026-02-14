"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [view, setView] = useState("login"); // 'login', 'signup', or 'forgot'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (view === "login") {
        const success = await login(email, password);
        if (success) {
          router.push("/dashboard");
        } else {
          setError("Invalid email or password");
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
      } else {
        // Handle forgot password logic here
        console.log("Email for password reset:", email);
        alert("Password reset link sent to your email!");
        setView("login");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleView = (newView: string) => {
    setView(newView);
    setError("");
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-earth-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gold-400">
        {view === "login" && "Login"}
        {view === "signup" && "Sign Up"}
        {view === "forgot" && "Forgot Password"}
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
              {view === "login" && "Login"}
              {view === "signup" && "Sign Up"}
              {view === "forgot" && "Send Password Reset Link"}
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
      </p>
    </div>
  );
};

export default LoginForm;
