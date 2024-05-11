import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Weed-Ltransparent1.png";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex justify-content-end flex-grow-1">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/strains">
                Strains
              </Link>
            </li>
          </ul>
        </div>

        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ height: "150px" }} />
        </Link>

        <div className="d-flex justify-content-start flex-grow-1">
          {isAuthenticated && (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/sessions">
                  Sessions
                </Link>
              </li>
            </ul>
          )}
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            {isAuthenticated ? (
              <Link className="nav-link" to="/" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>{" "}
                {/* Changed to logout icon */}
              </Link>
            ) : (
              <Link className="nav-link" to="/login_signup">
                <i className="fas fa-user"></i>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
