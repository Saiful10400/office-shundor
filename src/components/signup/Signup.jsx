import React, { useState } from 'react';
import LoginBanner from "../../assets/images/5048649.jpg"
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import "./Signup.css";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="flex max-w-screen-2xl mx-auto">
            <div className="image-container">
                <img src={LoginBanner} alt="login image" />
            </div>

            <div className="form-container relative">
                <div className="mx-auto text-center mt-12">
                    <h1 className="text-4xl font-semibold">Create New Account</h1>
                    <div className="mt-3">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></div>
                </div>

                <form className="flex flex-col justify-center items-center absolute signup-form">
                    <div className="flex">
                        <div className="flex flex-col w-full mr-2">
                            <label className="text-gray-400 mb-2">First Name</label>
                            <input type="text" required placeholder="First Name" name="firstName" />
                        </div>

                        <div className="flex flex-col w-full ml-2">
                            <label className="text-gray-400 mb-2">Last Name</label>
                            <input type="text" placeholder="Last Name" name="lastName" />
                        </div>
                    </div>


                    <div className="flex flex-col w-full mt-5">
                        <label className="text-gray-400 mb-2">Email</label>
                        <input type="email" required placeholder="Email" name="email" />
                    </div>

                    <div className="flex flex-col w-full my-5">
                        <label className="text-gray-400 mb-2">Password</label>

                        <div className='flex items-center password-field' title={showPassword ? "Hide password" : "Show password"}>
                            <input type={showPassword ? "text" : "password"} required placeholder="Password" name="password" />
                            <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer">
                                {
                                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                                }
                            </div>
                        </div>
                    </div>

                    <input type="submit" value="Create Account" className="w-full" />
                </form>
            </div>
        </div>
    );
};

export default Signup;