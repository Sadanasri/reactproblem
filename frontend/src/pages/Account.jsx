import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch Logged In User
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/user/me");
        setUser(res.data);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate("/signin");
        }
      }
    };

    fetchUser();
  }, [navigate]);

  // Logout Function
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");

      alert("Logout Successful!");
      navigate("/");
    } catch (error) {
      console.log("Error: ", error)
      alert("Logout Failed");
    }
  };

  if (!user) {
    return (
      <p className="text-center mt-10 font-semibold">
        Loading Account...
      </p>
    );
  }

  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white">
        {/* Header */}
        <h2 className="text-lg font-semibold px-6 py-4 border-b">
          Account Settings
        </h2>

        {/* Profile */}
        <div className="flex gap-4 items-center px-6 py-6">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <h3 className="font-bold">{user.fullName}</h3>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-6 pb-6">
          <button
            onClick={handleLogout}
            className="w-full cursor-pointer bg-red-500 text-white py-3 rounded-lg font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
