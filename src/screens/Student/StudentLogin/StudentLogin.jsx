import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "../../../App.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const StudentLogin = ({ reload, setReload }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    console.log(email, password);
    try {
      const response = await fetch("http://localhost:3000/api/signin-student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (response.status == 200) {
        const user = await response.json();
        localStorage.setItem("student", JSON.stringify(user));
        setError(false);
        setReload((pre) => !pre);
        navigate("/");
      } else {
        setError(true);
      }
    } catch (error) {
      alert("Invalid details");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="screen flex centre-horizontal centre-vertical">
      <form
        className="form centre-horizontal "
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <h1 className="text-center fsize-22">Signin</h1>
        </div>
        <div>
          {error ? (
            <p className="error-message">Email or password is invalid</p>
          ) : null}
          <div className="input-container margin-bottom-10">
            <div className="flex centre-horizontal">
              <MdEmail className="form-icon" />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="form-input"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="flex centre-horizontal">
              <RiLockPasswordFill className="form-icon" />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="form-input"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex fcol">
          <button
            className="margin-bottom-10 btn-primary"
            onClick={handleSubmit}
          >
            SIGN IN
          </button>
          <p className="margin-bottom-10 text-center fsize-12 cursor-pointer">
            forgot password?
          </p>
          <p className="text-center">
            <span className="text-center fsize-12">New student?</span>{" "}
            <span className="text-center fsize-12 cursor-pointer">
              <Link to={"/signup"}>Register Now</Link>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};
export default StudentLogin;
