import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slices/userSlice";

function Header() {
  const dispatch = useDispatch();
  const { email, id, token } = useSelector((state) => state.user);
  const { firstName } = useSelector((state) => state.client);

  return (
    <div className="header">
      
      {email === null ? (
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
          <Link to="/client" className="link-profile">{firstName}</Link>
          <div>
            <div> {email} </div>
            <button
              className="btn btn-out"
              onClick={() => dispatch(removeUser())}
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
