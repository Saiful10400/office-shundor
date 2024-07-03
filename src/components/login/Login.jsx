import React, { useState } from "react";
import "./Login.css";
import TextAreaComponents from "../sharedComponents/TextAreaComponents/TextAreaComponents";
import { ToastContainer, toast } from "react-toastify";
import { loginApi } from "../../api/loginApi/LoginApi";
import "react-toastify/dist/ReactToastify.css";
import LoginBanner from "../../assets/images/5048649.jpg"
import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const UserName = form.userName.value;
    const Password = form.password.value;
    // console.log("form: ", form, UserName, Password);

    setUserName(UserName);
    setPassword(Password);

    var isvalid = true;
    if (userName == "" || userName == undefined) {
      toast.error("User name is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      isvalid = false;
    }
    if (password == "" || password == undefined) {
      toast.error("Password is required", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      isvalid = false;
    }
    if (isvalid) {
      var res = await loginApi(userName, password, 1);
      if (res == "User Not Found") {
        toast.error(res, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        toast.success("Login Successfull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        sessionStorage.setItem("sundorbonToken", res);
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      {/* <div className="loginCard">
        <div className="">
          <TextAreaComponents
            id={6}
            label={"User Name"}
            placeholder={"User Name"}
            value={(props) => {
              setUserName(props);
            }}
          />
        </div>
        <div className="" style={{ marginTop: "1rem" }}>
          <TextAreaComponents
            id={7}
            label={"Password"}
            placeholder={"Password"}
            value={(props) => {
              setPassword(props);
            }}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button
            className="btn btn-login w-100"
            onClick={() => {
              onSubmit();
            }}
          >
            Login
          </button>
        </div>
      </div> */}

      <div className="flex max-w-screen-2xl mx-auto">
        <div className="image-container">
          <img src={LoginBanner} alt="login image" />
        </div>

        <div className="form-container relative">
          <div className="mx-auto text-center mt-16">
            <h1 className="text-4xl font-semibold">Login</h1>
            <div className="mt-3">Don't have an account? <Link to="/signup" className="text-blue-500">Signup</Link></div>
          </div>

          <form className="flex flex-col justify-center items-center absolute" onSubmit={(e)=> onSubmit(e)}>
            <div className="flex flex-col w-full">
              <label className="text-gray-400 mb-2">User Name</label>
              <input type="text" placeholder="User Name" name="userName" />
            </div>

            <div className="flex flex-col w-full my-7">
              <label className="text-gray-400 mb-2">Password</label>
              <div className='flex items-center password-field' title={showPassword ? "Hide password" : "Show password"}>
                <input type={showPassword ? "text" : "password"}  placeholder="Password" name="password" />
                <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                  {
                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                  }
                </div>
              </div>
            </div>

            <input type="submit" value="Login" className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
