import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

  return (
    <div className="login mx-auto shadow-lg p-4 rounded-4 mt-5">
      <h4 className="mb-4 text-center form-header fw-bold">Login Here</h4>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            className="border border-1"
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="border border-1"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </Form.Group>

        <p className="text-danger fw-bold">{error}</p>

        <div>
          <div>
            <Button variant="primary" type="submit" className="w-100 login-btn rounded-pill">
              Login
            </Button>
          </div>

          <div className="d-flex justify-content-around">
            <hr className="w-hr" />
            <p >
              <small className="text-center text-primary fw-semibold mb-2">OR</small>
            </p>
            <hr className="w-hr" />
          </div>


          <div className="">
            <div>
              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 rounded-pill"
                onClick={handleGoogleSignIn}
              >
                <FaGoogle className="fs-5"></FaGoogle>
                <span className="ms-2">Google</span>
              </Button>
            </div>

            {/* <div>
              <Button
                variant="outline-secondary"
                type="submit"
                className="w-100 rounded-pill"
                onClick={handleGithubSignIn}
              >
                <FaGithub className="fs-5"></FaGithub>
                <span className="ms-2">GitHub</span>
              </Button>
            </div> */}
          </div>

          <p className="m-0 text-center mt-3">
            <small>
              Don't have an account? Please <span> </span>
              <Link to="/register">
                <b>Register</b>
              </Link>
            </small>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
