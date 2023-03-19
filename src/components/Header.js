import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state) => state.client);
  const navigate = useNavigate();

  const emailLocal = JSON.parse(localStorage.getItem("emailLocal") );
   const firstNameLocal = JSON.parse(
    localStorage.getItem("firstNameLocal")
  );

  const removeUser = () => {
    localStorage.setItem("emailLocal", JSON.stringify(null));
    localStorage.setItem("idLocal", JSON.stringify(null));
    localStorage.setItem("accesLocal", JSON.stringify(null));
    navigate("/login");
  }

  return (
    <div className="header">
      
      {emailLocal === null ? (
        <div className="wrapper-sign">
          <Link to="*"><h1>Смачно.tyt</h1></Link>
          <Link to="/login" className="btn btn-login">
            login
          </Link>
          <Link to="/register" className="btn btn-register">
            register
          </Link>
        </div>
      ) : (
        <div className="wrapper-sign">
          <Link to="/">Home</Link>
          <Link to="/client" className="link-profile">{firstNameLocal}</Link>
          <div>
            <div> {emailLocal} </div>
            <button
              className="btn btn-out"
              onClick={() => removeUser()}
            >
              {" "}
              login out{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
