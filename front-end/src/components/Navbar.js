import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("user");
    navigate("/signup");
    console.log("Logout clicked");
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update">
                  Update Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                {auth ? <Link className="nav-link" onClick={logout} to="/signup">
                  Logout
                </Link> : <Link className="nav-link" to="/signup">
                  SignUp
                </Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
