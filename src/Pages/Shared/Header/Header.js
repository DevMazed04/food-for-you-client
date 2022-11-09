import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="navbar navbar-expand-lg nav-bg navbar-dark mb-5 sticky-to">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <CiGift className="fs-3 path"></CiGift>
          <span className="ms-2 path"> Food For You</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active" to="/courses">
                Services
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active" to="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active" to="/blog">
                Blogs
              </Link>
            </li>

            <li className="nav-item mx-1 text-white mt-2">
              <p>Dark</p>
            </li>

            {/* <li className="nav-item mx-1">
              <Link className="nav-link active" to="/login">Login</Link>
            </li> */}

            <li className="nav-item mx-1 d-flex align-items-center">
              <Link className="nav-link active fw-bold log-in" to="/">
                {user?.uid ? (
                  <Link
                    className="nav-link active fw-bold log-in"
                    to="/login"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className="nav-link active fw-bold log-in" to="/login">
                    Login
                  </Link>
                )}
              </Link>
            </li>
          </ul>

          <span className="navbar-text">
            <Link className="navbar-brand ms-2 me-0" to="/">
              {user?.photoURL
                ? (
                  <img
                    src={user.photoURL
                    }
                    alt=""
                    width="30"
                    height="28"
                    className="d-inline-block align-text-top rounded-pill"
                    title={user?.displayName}
                  />
                ) : (
                  <FaUserCircle className="fs-4"></FaUserCircle>
                )}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
