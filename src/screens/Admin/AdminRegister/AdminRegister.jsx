import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
// const AdminRegister = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <h1>WELCOME </h1>
//         </div>
//         <div>
//           <div>
//             <div>
//               <FaUserAlt />
//             </div>
//             <div>
//               <input type="name" placeholder="Name" />
//             </div>
//           </div>
//           <div>
//             <div>
//               <MdEmail />
//             </div>
//             <div>
//               <input type="email" placeholder="Email" />
//             </div>
//           </div>
//           <div>
//             <div>
//               <RiLockPasswordFill />
//             </div>
//             <div>
//               <input type="password" placeholder="password" />
//             </div>
//           </div>

//           <button>SIGN UP</button>
//         </div>
//       </form>
//     </div>
//   );
// };

const AdminRegister = () => {
  return (
    <div className="screen flex centre-horizontal centre-vertical">
      <form className="form centre-horizontal ">
        <div>
          <h1 className="text-center fsize-22">WELCOME</h1>
        </div>
        <div>
          <div className="input-container margin-bottom-10">
            <div className="flex centre-horizontal">
              <FaUserAlt className="form-icon"/>
            </div>
            <div>
              <input type="name" placeholder="Name" className="form-input"/>
            </div>
          </div>
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
          <button className="margin-bottom-10 btn-primary">SIGN UP</button>
          <p className="text-center">
            <span className="text-center fsize-12">Already have an account?</span>
            <span className="text-center fsize-12 cursor-pointer">
              Sign in now
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminRegister;
