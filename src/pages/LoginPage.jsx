import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user)
    navigate('/')
  }

  return (
    <div>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}