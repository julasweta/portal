import React from "react";
import { useSelector } from "react-redux";

function useAuth() {
  const { email, password, id } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    email,
    password,
    id,
  };
}

export default useAuth;
