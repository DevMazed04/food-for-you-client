import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../assets/logo.png";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch((error) => console.error(error));
  };

  return (
    <nav className="navbar navbar-expand-lg nav-bg navbar-dark mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <img
            src={logo}
            alt="logo"
            height="30px"
            className="bg-white rounded p-1"
          />
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1 mt-2 mt-lg-0">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item mx-1">
              <Link className="nav-link active" to="/services">
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
          </ul>

          <li className="nav-item mx-1 d-flex align-items-center">
            <div className="log-in">
              {user?.uid ?
                (
                  <div className="d-flex-col d-lg-flex">
                    <div className="nav-item me-4 fs-6 text-white mt-1 mt-lg-0 mb-4 mb-lg-0">
                      <Link className="nav-link active" to="/my-reviews">
                        My Reviews
                      </Link>
                    </div>

                    <div className="nav-item me-4 fs-6 text-white mb-4 mb-lg-0">
                      <Link className="nav-link active" to="/add-service">
                        Add service
                      </Link>
                    </div>

                    <Link
                      className="nav-link active fw-bold log-in text-white me-2 mb-3 mb-lg-0"
                      to="/login"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </div>

                )
                :
                (
                  <Link
                    className="nav-link active fw-bold log-in text-white me-2"
                    to="/login"
                  >
                    Login
                  </Link>
                )}
            </div>
          </li>

          <span className="navbar-text">
            <Link className="navbar-brand ms-2 me-0" to="/">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt=""
                  width="30"
                  height="28"
                  className="d-inline-block align-text-top rounded-pill mb-3 mb-lg-0"
                  title={user?.displayName}
                />
              ) : (
                <FaUserCircle className="fs-4 mt-3 mt-lg-0 mb-3 mb-lg-0"></FaUserCircle>
              )}
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
