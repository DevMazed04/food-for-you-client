import React from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import login from "../../login.json";
import "./Login.css";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {
    signIn,
    googleSignIn,
    updateUser,
    loading,
    setLoading,
    passwordReset,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  console.log("userPasswordLength:", userPassword.length);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data, event) => {
    event.preventDefault();
    const email = data.email;
    const password = event.target.password.value;

    if (userPassword.length > 0) {
      setPasswordError("");
    } else {
      setPasswordError("Please Enter Your Password");
      return;
    }

    signIn(email, password)
      .then((result) => {
        // const user = result.user;
        // console.log(user);
        toast.success("Login Successful..");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful..");
        navigate(from, { replace: true });

        const name = user.displayName;
        const email = user.email;

        const userInfo = {
          name: name,
          email: email,
        };

        updateUser(userInfo)
          .then(() => { })
          .catch((err) => console.error(err));
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        // setPasswordError(error.message);
        setLoading(false);
      });
  };

  const handlePasswordReset = () => {
    if (!userEmail) {
      toast.error("Please enter your email to reset password");
      return;
    }
    passwordReset(userEmail)
      .then(() => {
        toast.success("please check your email for password reset link");
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <section className="d-flex flex-column flex-md-row justify-content-between align-items-center">

      <div className="lottie-signup">
        <Lottie animationData={login} loop={true} />
      </div>

      <div className="login mx-auto shadow p-4 rounded-3 mt-5 card">
        <h4 className="mb-4 text-center form-header fw-bold">Sign In</h4>

        <div className="">
          <div className="google-log mx-auto">
            <Button
              variant="success"
              type="submit"
              className="w-100 rounded-3"
              onClick={handleGoogleSignIn}
            >
              <GrGoogle className="fs-6"></GrGoogle>
              <span className="ms-2 google">
                WITH GOOGLE
              </span>
            </Button>
          </div>
        </div>
        <Form onSubmit={handleSubmit(handleLogin)}>
          <div className="d-flex justify-content-around mt-3">
            <hr className="w-hr" />
            <p>
              <small className="text-center text-primary fw-semibold mb-2">
                OR
              </small>
            </p>
            <hr className="w-hr" />
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="border border-1 rounded-3"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { required: "Please! Enter your email" })}
              onBlur={(event) => setUserEmail(event.target.value)}
            />
            {errors.email && (
              <p className="text-danger fw-semibold text-start mt-2">
                {errors.email?.message}
              </p>
            )}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

            <div className="d-flex justify-content-center align-items-center">
              <Form.Control
                className="border border-1 rounded-3"
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                {...register("password")}
                onChange={(e) => setUserPassword(e.target.value)}
              />
              {userPassword.length > 0 ? (
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <AiFillEyeInvisible className="show-password" />
                  ) : (
                    <AiFillEye className="show-password" />
                  )}
                </span>
              ) : (
                <></>
              )}
            </div>

            {userPassword.length === 0 ? (
              <>
                {passwordError && (
                  <p className="text-danger fw-semibold text-start mt-2">
                    {passwordError}
                  </p>
                )}
              </>
            ) : (
              <></>
            )}
          </Form.Group>


          <div className="mb-3" onClick={handlePasswordReset}>
            <Form.Text>
              <span className="forget-password">Forgot Your Password?</span>
            </Form.Text>
          </div>


          <div>
            <div>
              <Button
                variant="primary"
                type="submit"
                className="w-100 login-btn rounded-3"
              >
                {loading ? (
                  <div className="d-flex justify-content-center align-items-center py-1">
                    <ScaleLoader color="#fff" height="13" speedMultiplier=".6" />
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </div>

            <p className="m-0 text-center mt-3">
              <small>
                Don't have an account? Please
                <Link to="/register">
                  <span className="dont-acc ms-1">Sign up</span>
                </Link>
              </small>
            </p>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Login;
