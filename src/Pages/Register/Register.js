import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useContext, useState, } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = () => {
   const { createUser, updateUserProfile } = useContext(AuthContext);

   const [error, setError] = useState("");
   const [userSuccess, setuserSuccess] = useState(false);

   const handleRegister = (event) => {
      event.preventDefault();
      setuserSuccess(false);
      const form = event.target;
      const name = form.name.value;
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;
      console.log(name, photoURL, email, password);

      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&?])/.test(password)) {
         setError(
            "Password should contain at least one lowercase and uppercase letter, one digit and one special character!"
         );
         return;
      }

      if (password.length < 6) {
         setError("Password should be minimum 6 characters long!");
         return;
      }
      setError("");

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            console.log(user);
            setuserSuccess(true);
            setError("");
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            window.location.reload();
         })
         .catch((error) => {
            console.error("error", error);
            setError(error.message);
            setuserSuccess(false);
         });
   };

   const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL,
      };
      updateUserProfile(profile)
         .then(() => {
            console.log("Profile Updated!");
         })
         .catch((error) => console.error("error", error));
   };

   return (
      <div className="register mx-auto shadow-lg p-4 rounded-4 mt-5 mb-5">
         <h4 className="mb-4 text-primar text-center fw-bold form-header">
            Please Register
         </h4>
         <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicName">
               <Form.Label>Full Name</Form.Label>
               <Form.Control
                  className="border border-1"
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
               />
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

            {userSuccess && (
               <p className="text-success fw-semibold">
                  User Created Successfully...
               </p>
            )}

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Terms and Conditions" required />
            </Form.Group>
            <div>
               <div>
                  <Button variant="primary" type="submit" className="reg-btn w-100">
                     Register
                  </Button>
               </div>
               <p className="m-0 text-center">
                  <small>
                     Already have an account? Please <span> </span>
                     <Link to="/login">
                        <b>Login</b>
                     </Link>
                  </small>
               </p>
            </div>
         </Form>
      </div>
   );
};

export default Register;
