import React from "react";
import { useSelector } from "react-redux";

function useAuth() {
  const { email, password, id } = useSelector((state) => state.user);
  const emailLocal = JSON.parse(localStorage.getItem("emailLocal") );
  const idLocal = JSON.parse(localStorage.getItem("idLocal") );
  const accesLocal = JSON.parse(localStorage.getItem("accesLocal") );

  return {
    isAuth: !!emailLocal,
    emailLocal,
    accesLocal,
    idLocal,
  };
}

export default useAuth;
