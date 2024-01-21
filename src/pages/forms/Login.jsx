import "./form.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginuser } from "../../redux/apicalls/authapicalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passwored, setPassword] = useState("");
  const dispatch = useDispatch();
  // From Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");
    if (passwored.trim() === "") return toast.error("Password is required");

    console.log({ email, passwored });
    dispatch(loginuser({ email, passwored }));
  };

  return (
    <section className="form-container">
      <h1 className="form-title">Login to your account</h1>
      <form onSubmit={formSubmitHandler} className="form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={passwored}
            type="password"
            id="password"
            placeholder="Enter your password"
            className="form-input"
          />
        </div>
        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
      <div className="form-footer">
        Did you forget your password?{" "}
        <Link to="/forgot-password">Forgot Password</Link>
      </div>
    </section>
  );
};

export default Login;
