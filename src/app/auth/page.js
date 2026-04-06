"use client";
import { useState, useEffect } from "react";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import "../../../public/sass/pages/auth.scss";

export default function AuthPage() {

  const router = useRouter();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  // ✅ Already logged in → redirect
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/homepage");
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? "http://localhost:5000/api/auth/signup"
      : "http://localhost:5000/api/auth/login";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      // ✅ LOGIN SUCCESS
      if (data.token) {
        localStorage.setItem("token", data.token);
        router.push("/homepage");
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Server error ❌");
    }
  };

  return (
    <div className="auth">
      <div className="auth__overlay"></div>

      <div className="auth__card">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>

        <form onSubmit={handleSubmit}>

          {/* NAME */}
          {isSignup && (
            <div className="input-group">
              <User className="input-icon" size={18} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="input-group">
            <Mail className="input-icon" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <Lock className="input-icon" size={18} />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>

        </form>

        <p onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? " : "New here? "}
          <span>{isSignup ? "Login" : "Create account"}</span>
        </p>
      </div>
    </div>
  );
}