import { useState,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  },[])

  const handleLogin = () => {
    auth.login(user);
    navigate('/profile')
  }

  return (
    <div className="login_page">
      <input ref={inputRef} type="text" placeholder="Enter name..." onChange={(e) => setUser(e.target.value)} />
      {/* <br />
      <input type="text" placeholder="Password..." />
      <br /> */}
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}