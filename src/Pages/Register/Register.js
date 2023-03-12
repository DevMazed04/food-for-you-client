import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Register.css";
import Lottie from "lottie-react";
import signup from "../../signup.json";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { createUser, updateUser, loading, setLoading, verifyEmail } = useContext(AuthContext);

  const [userPassword, setUserPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (data) => {
    console.log(data);
    const name = data.name;
    // const image = data.image;
    const email = data.email;
    const password = data.password;

    setUserPassword(password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success(`Registration Successful...`);
        navigate("/");

        const userInfo = {
          displayName: name,
        };

        updateUser(userInfo)
          .then(() => {
            verifyEmail().then(() => {
              toast.success("Please check your email for verification link");
            });
          })
          .catch((err) => console.error(err));
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
        <Lottie animationData={signup} loop={true} />
      </div>

      <div className="signup-container">
        <div className="register mx-auto shadow p-4 rounded-4 mt-5 mb-5 card">
          <h4 className="mb-4 text-primar text-center fw-bold form-header">
            Sign Up
          </h4>

          <Form onSubmit={handleSubmit(handleRegister)}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                className="border border-1"
                type="text"
                placeholder="Enter Full Name"
                {...register("name", { required: "Full Name is required" })}
              />
              {errors.name && (
                <p className="text-danger fw-semibold text-start mt-2">
                  {errors.name?.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                className="border border-1"
                type="text"
                name="photoURL"
                placeholder="Enter photo URL"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                className="border border-1"
                type="email"
                placeholder="Enter Email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-danger fw-semibold text-start mt-2">
                  {errors.email?.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <div className="d-flex justify-content-center align-items-center">
                <Form.Control
                  className="border border-1"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be six character or longer",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                      message:
                        "Password must have uppercase, number and special characters",
                    },
                  })}
                />
                {userPassword.length === 0 ? (
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
              {errors.password && (
                <p className="text-danger fw-semibold text-start mt-2">
                  {errors.password?.message}
                </p>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Terms and Conditions"
                {...register("check", { required: "Tick this box" })}
              />
              {errors?.check && (
                <p className="text-danger fw-semibold text-start mt-2">
                  {errors.check?.message}
                </p>
              )}
            </Form.Group>

            <div>
              <div>
                <Button variant="primary" type="submit" className="reg-btn w-100">
                  {loading ? (
                    <div className="d-flex justify-content-center align-items-center py-1">
                      <ScaleLoader color="#fff" height="13" speedMultiplier=".6" />
                    </div>
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
              <p className="m-0 text-center">
                <small>
                  Already have an account? Please <span> </span>
                  <Link to="/login">
                    <b>Sign in</b>
                  </Link>
                </small>
              </p>
            </div>
          </Form>
        </div >
      </div>
    </section>
  );
};

export default Register;
