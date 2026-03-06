import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white flex flex-col justify-end px-6 pb-10">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to PopX</h1>

        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-8 space-y-3">
          <button onClick={() => navigate("/signup")} className="btnPrimary">
            Create Account
          </button>

          <button onClick={() => navigate("/signin")} className="btnSecondary">
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
