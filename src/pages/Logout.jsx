import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Remove token from localStorage
    localStorage.removeItem("token");

    // ✅ Redirect to the login page
    navigate("/");
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-700">Logging out...</h1>
    </div>
  );
};

export default Logout;
