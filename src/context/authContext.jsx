import React, { createContext, useState, useMemo, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const rememberMe = localStorage.getItem("@app_remember_me");

    let token;
    if (JSON.parse(rememberMe)) {
      token = localStorage.getItem("@app_token");
    } else {
      token = sessionStorage.getItem("@app_token");
    }

    if (token) {
      setUser(JSON.parse(token));
    } else {
      setUser(null);
    }
  }, []);

  const onLogin = async (values, actions) => {
    try {
      const { rememberMe, ...rest } = values;
      const res = await axiosInstance.post("login", rest);
      localStorage.setItem("@app_remember_me", rememberMe);
      if (rememberMe) {
        localStorage.setItem("@app_token", JSON.stringify(res));
      } else {
        sessionStorage.setItem("@app_token", JSON.stringify(res));
      }
      actions.resetForm();
      setUser(res);
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  };

  const onRegister = async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post("register", rest);
      sessionStorage.setItem("@app_token", JSON.stringify(res));
      actions.resetForm();
      setUser(res);
    } catch (error) {
      actions.setErrors({ serverError: error.message });
    }
  };

  const onLogout = () => {
    sessionStorage.clear();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      onLogin,
      onRegister,
      onLogout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
