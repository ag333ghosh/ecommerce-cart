import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { clearMessage, login, signup } from "../../Slices/AuthSlice";

const LoginSignup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    let redirectURL;

    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
    });

    const toggleForm = () => {
        dispatch(clearMessage()); // Reset message when switching
        setIsLogin(!isLogin);
        setFormData({ email: "", password: "", name: "" }); // Reset fields when switching
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            dispatch(login({ email: formData.email, password: formData.password }));
        } else {
            dispatch(signup(formData));
        }
    };



    return (
        <div className="flex h-[535px] bg-white items-center justify-center p-4">
            <div className="bg-gray-100 rounded-3xl shadow-lg flex w-full max-w-4xl overflow-hidden">
                {/* Left Side: Form */}
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        {isLogin ? "Welcome Back!" : "Join Us Today!"}
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="text-gray-700 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                    required
                                />
                            </div>
                        )}

                        <div>
                            <label className="text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            />
                        </div>

                        <div>
                            <label className="text-gray-700 font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gray-600 text-white p-3 rounded-md font-medium hover:bg-gray-700 transition duration-300"
                        >
                            {isLogin ? "Login" : "Create Account"}
                        </button>
                    </form>

                    {/* Show alert messages */}
                    {auth.message && (
                        <p className="text-center mt-2 text-red-600 font-medium">{auth.message}</p>
                    )}

                    {/* Toggle Form */}
                    <p className="text-center mt-4 text-gray-600 text-sm">
                        {isLogin ? "New here?" : "Already a member?"}
                        <button
                            onClick={toggleForm}
                            className="text-blue-600 font-medium ml-1 hover:underline"
                        >
                            {isLogin ? "Sign Up" : "Login"}
                        </button>
                    </p>
                </div>

                {/* Right Side: Image */}
                <div className="w-1/2 hidden md:block">
                    <img
                        src="/login.jpg"
                        alt="Login Illustration"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
