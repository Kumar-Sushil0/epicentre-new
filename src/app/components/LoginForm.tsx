"use client";

import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [view, setView] = useState("login"); // 'login', 'signup', or 'forgot'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (view === "login") {
      // Handle login logic here
      console.log("Email:", email, "Password:", password);
    } else if (view === "signup") {
      // Handle signup logic here
      console.log("Name:", name, "Email:", email, "Password:", password);
    } else {
      // Handle forgot password logic here
      console.log("Email for password reset:", email);
    }
  };

  const toggleView = (newView: string) => {
    setView(newView);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-earth-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gold-400">
        {view === "login" && "Login"}
        {view === "signup" && "Sign Up"}
        {view === "forgot" && "Forgot Password"}
      </h2>
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
        {view !== "login" ? null : (
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
          className="w-full px-4 py-2 text-lg font-semibold text-white bg-gold-600 rounded-md hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
        >
          {view === "login" && "Login"}
          {view === "signup" && "Sign Up"}
          {view === "forgot" && "Send Password Reset Link"}
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
