import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signin", { email, password });

      alert("Login Successful!");
      navigate("/account");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white px-6 pt-10 pb-6">
        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-sm text-gray-600 mb-4 flex items-center gap-1 cursor-pointer"
        >
          ← Back
        </button>
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 leading-snug">
          Signin to your <br /> PopX account
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-sm mt-3 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          {/* Email Field */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Email Address
            </legend>

            <input
              type="email"
              placeholder="Enter email address"
              className="w-full py-2 outline-none text-sm"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          {/* Password Field */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Password
            </legend>

            <input
              type="password"
              placeholder="Enter password"
              className="w-full py-2 outline-none text-sm"
              onChange={(e) => setPassword(e.target.value)}
            />
          </fieldset>

          {/* Button */}
          <button type="submit" className="btnPrimary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
