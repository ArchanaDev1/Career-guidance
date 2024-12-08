import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import "../../../App.css";
const AdminLogin = () => {
  return (
    <div className="screen flex centre-horizontal centre-vertical">
      <form className="form centre-horizontal ">
        <div>
          <h1 className="text-center fsize-22">Signin</h1>
        </div>
        <div>
          <div className="input-container margin-bottom-10">
            <div className="flex centre-horizontal">
              <MdEmail className="form-icon" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="form-input" />
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
              />
            </div>
          </div>
        </div>
        <div className="flex fcol">
            <button className="margin-bottom-10 btn-primary">SIGN IN</button>
            <p className="margin-bottom-10 text-center fsize-12 cursor-pointer">forgot password?</p>
            <p className="text-center">
              <span className="text-center fsize-12">New student?</span> <span className="text-center fsize-12 cursor-pointer">Register Now</span>
            </p>
          </div>
      </form>
    </div>
  );
};
export default AdminLogin;
