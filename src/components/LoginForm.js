import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { authAsync, authAutoLoginAsync } from "../features/auth/authSlice"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  useEffect(
    ()=>{
      const token = localStorage.getItem('accessToken')
      if (token) {
        const headers = { 'Authorization':  `Bearer ${token}` };
        dispatch( authAutoLoginAsync({ headers}));
      }
    }
  )

  

  const handleSubmit = async (e) => {
    e.preventDefault();  
    try {
      dispatch( authAsync({email,password}));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
