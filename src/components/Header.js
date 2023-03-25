import React, { useMemo, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const { firstName } = useSelector((state) => state.client);

  const [firstNameLocal, setFirstNameLocal] = useState(
    JSON.parse(localStorage.getItem("firstNameLocal"))
  );
  const emailLocal = JSON.parse(localStorage.getItem("emailLocal"));

  useEffect(() => {
    setFirstNameLocal(JSON.parse(localStorage.getItem("firstNameLocal")));
  }, [firstName]);

  const removeUser = () => {
    localStorage.setItem("emailLocal", JSON.stringify(null));
    localStorage.setItem("idLocal", JSON.stringify(null));
    localStorage.setItem("accesLocal", JSON.stringify(null));
    navigate("/login");
  };

 

  return (
    <div className="header">
      {emailLocal === null ? (
        <div className="wrapper-sign">
          <Link to= "/">
            <h1>Смачно.tyt</h1>
          </Link>
          <Link to="/login" className="btn btn-login">
            login
          </Link>
          <Link to="/register" className="btn btn-register">
            register
          </Link>
        </div>
      ) : (
        <div className="wrapper-sign">
          <Link to="/">
            <h1>Смачно.tyt</h1>
          </Link>

          {!isMobile ? (
            <div className="sign-box">
              {" "}
              <Link to="/client"className="link-profile">
                Ваш профіль {firstNameLocal}
              </Link>
              <div>
                <div> {emailLocal} </div>
                <button className="btn btn-out" onClick={() => removeUser()}>
                  {" "}
                  login out{" "}
                </button>
              </div>{" "}
            </div>
          ) : <div>
            <div className="menu" onClick={()=>setMenu(!menu)}>Menu</div>
            {menu && <button className="btn btn-out" onClick={() => removeUser()}>
            {" "}
            login out{" "}
          </button>}
         </div>
          }
        </div>
      )}
    </div>
  );
}

export default Header;
