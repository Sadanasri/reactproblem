import { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", {
        ...formData,
        isAgency: formData.isAgency === "yes",
      });

      alert("Account Created Successfully!");
      navigate("/signin");
    } catch (error) {
      alert(error.response?.data?.message || "Signup Failed");
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
          Create your <br /> PopX account
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          
          {/* Full Name */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Full Name<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className="w-full py-2 outline-none"
              onChange={handleChange}
            />
          </fieldset>

          {/* Phone */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Phone number<span className="text-red-500">*</span>
            </legend>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              className="w-full py-2 outline-none"
              onChange={handleChange}
            />
          </fieldset>

          {/* Email */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Email address<span className="text-red-500">*</span>
            </legend>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full py-2 outline-none"
              onChange={handleChange}
            />
          </fieldset>

          {/* Password */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Password<span className="text-red-500">*</span>
            </legend>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="w-full py-2 outline-none"
              onChange={handleChange}
            />
          </fieldset>

          {/* Company */}
          <fieldset className="border rounded-md px-3">
            <legend className="text-sm text-purple-600 font-semibold px-2">
              Company name
            </legend>
            <input
              type="text"
              name="company"
              placeholder="Enter Company Name"
              className="w-full py-2 outline-none"
              onChange={handleChange}
            />
          </fieldset>

          {/* Agency */}
          <div>
            <p className="text-sm font-semibold text-gray-900">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>

            <div className="flex gap-8 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="accent-purple-600"
                />
                No
              </label>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="btnPrimary"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
