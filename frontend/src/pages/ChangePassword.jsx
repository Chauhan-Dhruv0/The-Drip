import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from "sonner";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
      toast.error("New password must contain at least 1 letter, 1 number, and 1 special character.");
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/change-password`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      toast.success("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      navigate("/profile")
    } catch (error) {
      const message = error.response?.data?.message || "Error changing password";
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-10">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <div>
        <label>Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div>
        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800"
      >
        Update Password
      </button>
    </form>
  );
};

export default ChangePassword;
