// import React, { use, useState } from "react";
// import Lottie from "lottie-react";
// // import registerLottie from "../../src/assets/register.json";

// import { AuthContext } from "../context/AuthContext";
// import SocialLogin from "../components/SocialLogin";
// import { Link, NavLink } from "react-router";
// const Register = () => {
//   const { createUser } = use(AuthContext);
//   // const navigate = useNavigate();
//   const [passwordError, setPasswordError] = useState("");
//   const validatePassword = (password) => {
//     const hasUppercase = /[A-Z]/.test(password);
//     const hasLowercase = /[a-z]/.test(password);
//     const isLengthValid = password.length >= 6;

//     if (!hasUppercase) {
//       return "Password must contain at least one uppercase letter.";
//     }
//     if (!hasLowercase) {
//       return "Password must contain at least one lowercase letter.";
//     }
//     if (!isLengthValid) {
//       return "Password must be at least 6 characters long.";
//     }

//     return ""; // No error
//   };
//   const handleRegister = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     const errorMsg = validatePassword(password);
//     if (errorMsg) {
//       setPasswordError(errorMsg);
//       return;
//     } else {
//       setPasswordError("");
//     }
//     // create user
//     createUser(email, password)
//       .then((result) => {
//         console.log(result.user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         {/* <div className="text-center lg:text-left">
//           <Lottie
//             style={{ width: "300px" }}
//             animationData={registerLottie}
//             loop={true}
//           />
//         </div> */}
//         <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
//           <div className="card-body">
//             <h1 className="text-5xl font-bold">Register now!</h1>
//             <form onSubmit={handleRegister}>
//               <label className="label">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="input text-gray-500 w-full"
//                 placeholder="Name"
//                 required
//               />
//               <label className="label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="input w-full"
//                 placeholder="Email"
//               />
//               <label className="label">Photo</label>
//               <input
//                 type="text"
//                 name="photo"
//                 className="input text-gray-500 w-full"
//                 placeholder="Photo URL"
//               />
//               <label className="label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="input text-gray-500 w-full"
//                 placeholder="Password"
//                 required
//               />
//               {passwordError && (
//                 <p className="text-red-500 text-sm mt-1">{passwordError}</p>
//               )}

//               <div>
//                 <a className="link link-hover cursor-pointer text-gray-500">
//                   Forgot password?
//                 </a>
//               </div>

//               {/* <div>
//                   <a className="link link-hover">Forgot password?</a>
//                 </div> */}
//               <NavLink to="/signIn">
//                 {" "}
//                 <button className="btn btn-neutral mt-4 w-full">
//                   Register
//                 </button>
//               </NavLink>
//               <p className="text-center mt-4 text-base">
//                 Already have an account?{" "}
//                 <Link
//                   to="/signIn"
//                   className="text-blue-500 underline font-bold"
//                 >
//                   Sign In
//                 </Link>
//               </p>
//             </form>
//             <SocialLogin />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import SocialLogin from "../components/SocialLogin";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLengthValid = password.length >= 6;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!isLengthValid) {
      return "Password must be at least 6 characters long.";
    }

    return ""; // No error
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;

    const errorMsg = validatePassword(password);
    if (errorMsg) {
      setPasswordError(errorMsg);
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password, name)
      .then((result) => {
        console.log("User registered:", result.user);
        form.reset();
        // You can redirect or show success message here
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input text-gray-500 w-full"
                placeholder="Name"
                required
              />
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="label">Photo</label>
              <input
                type="text"
                name="photo"
                className="input text-gray-500 w-full"
                placeholder="Photo URL"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input text-gray-500 w-full"
                placeholder="Password"
                required
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}

              <div>
                <a className="link link-hover cursor-pointer text-gray-500">
                  Forgot password?
                </a>
              </div>

              {/* Use a normal submit button */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Register
              </button>

              <p className="text-center mt-4 text-base">
                Already have an account?{" "}
                <Link
                  to="/signIn"
                  className="text-blue-500 underline font-bold"
                >
                  Sign In
                </Link>
              </p>
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
