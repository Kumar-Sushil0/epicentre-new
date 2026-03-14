"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { api, endpoints } from "@/utils/api";

type ViewMode = "login" | "signup" | "forgot" | "otp";
type OtpPurpose = "login" | "reset";

interface LoginFormProps {
  initialView?: ViewMode;
  onAuthComplete?: () => void;
  signupOnly?: boolean;
}

const LoginForm = ({
  initialView = "login",
  onAuthComplete,
  signupOnly = false,
}: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [view, setView] = useState<ViewMode>(initialView); // 'login', 'signup', 'forgot', 'otp'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpPurpose, setOtpPurpose] = useState<OtpPurpose>("login");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { login, signup, verifyOtp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (view === "login") {
        const result = await login(email, password);
        if (result === "success") {
          if (onAuthComplete) {
            onAuthComplete();
          } else {
            router.push("/dashboard");
          }
        } else {
          setError("Invalid email or password");
        }
      } else if (view === "signup") {
        if (!name.trim()) {
          setError("Name is required");
          setLoading(false);
          return;
        }
        const signupResult = await signup(email, password, name);
        if (signupResult === "success") {
          if (onAuthComplete) {
            onAuthComplete();
          } else {
            router.push("/dashboard");
          }
        } else if (signupResult === "otp_required") {
          setOtpPurpose("login");
          setView("otp");
        } else {
          setError("Signup failed. Please try again.");
        }
      } else if (view === "forgot") {
        try {
          await api.post(endpoints.auth.forgotPassword, { email });
          setOtpPurpose("reset");
          setView("otp");
        } catch (err) {
          setError("Failed to send reset code. Please check the email and try again.");
        }
      } else if (view === "otp") {
        if (otpPurpose === "login") {
          const success = await verifyOtp(email, otp);
          if (success) {
            if (onAuthComplete) {
              onAuthComplete();
            } else {
              router.push("/dashboard");
            }
          } else {
            setError("Invalid or expired code. Please try again.");
          }
        } else {
          // Password reset flow
          if (!newPassword || newPassword.length < 6) {
            setError("New password must be at least 6 characters.");
            setLoading(false);
            return;
          }
          if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
          }

          try {
            await api.post(endpoints.auth.resetPassword, {
              email,
              otp,
              newPassword,
            });
            alert("Password reset successfully. Please login with your new password.");
            setOtp("");
            setNewPassword("");
            setConfirmPassword("");
            setOtpPurpose("login");
            setView("login");
          } catch (err) {
            setError("Invalid code or unable to reset password. Please try again.");
          }
        }
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleView = (newView: ViewMode) => {
    setView(newView);
    setError("");
    if (newView !== "otp") {
      setOtp("");
      setOtpPurpose("login");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-earth-800 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gold-400">
        {view === "login" && "Login"}
        {view === "signup" && "Sign Up"}
        {view === "forgot" && "Forgot Password"}
        {view === "otp" && (otpPurpose === "reset" ? "Reset Password" : "Enter Verification Code")}
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
        {view === "otp" && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="otp"
                className="text-sm font-medium text-gold-500"
              >
                Verification Code
              </label>
              <input
                id="otp"
                name="otp"
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400 tracking-[0.35em] text-center"
              />
              <p className="mt-2 text-xs text-gold-500/80">
                {otpPurpose === "reset"
                  ? "We’ve sent a 6-digit reset code to your email. Enter it here to change your password."
                  : "We’ve sent a 6-digit code to your email. Enter it here to complete sign-in."}
              </p>
            </div>
            {otpPurpose === "reset" && (
              <>
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
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="text-sm font-medium text-gold-500"
                  >
                    Confirm New Password
                  </label>
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-3 py-2 mt-1 text-white bg-earth-700 border border-earth-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-400"
                  />
                </div>
              </>
            )}
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
              {view === "otp" && (otpPurpose === "reset" ? "Reset Password" : "Verify Code")}
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
                if (signupOnly) {
                  router.push("/login");
                } else {
                  toggleView("login");
                }
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
        {view === "otp" && (
          <>
            Entered the wrong email?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setOtp("");
                toggleView("login");
              }}
              className="font-medium text-gold-600 hover:text-gold-500"
            >
              Go back
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default LoginForm;
