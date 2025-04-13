import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "/assets/page-assets/leaves.png";
import { registerUser } from "../redux/Slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { mergeCart } from "../redux/Slice/cartSlice";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { user, guestId,loading } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);

    // Get redirect parameters and check if it's checkout or something
    const redirect = new URLSearchParams(location.search).get("redirect") || "/";
    const isCheckoutRedirect = redirect.includes("checkout");

    useEffect(() => {
        if (user) {
            if (cart?.products.length > 0 && guestId) {
                dispatch(mergeCart({ guestId, user })).then(() => {
                    navigate(isCheckoutRedirect ? "/checkout" : "/");
                });
            } else {
                navigate(isCheckoutRedirect ? "/checkout" : "/");
            }
        }
    }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({ name, email, password }));
        // console.log("User Registered",{Name,email,password});
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Column - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gray-50">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg transition-all hover:shadow-xl"
                >
                    <div className="space-y-6">
                        {/* Logo & Heading */}
                        <div className="text-center space-y-4">
                            <h1 className="text-3xl font-bold text-gray-900">The Drip</h1>
                            <h2 className="text-2xl font-semibold">Welcome 👋</h2>
                            <p className="text-gray-500">
                                Enter your credentials to access your account
                            </p>
                        </div>

                        {/* Form Fields */}
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="Enter Your full name"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 active:bg-gray-700 transition-colors"
                        >
                             {loading ? "Sign Up...":"Sign Up"}
                        </button>

                        {/* Registration Link */}
                        <p className="text-center text-sm text-gray-600">
                            have an account?{" "}
                            <Link
                                to={`/login?redirect=${encodeURIComponent(redirect)}`}
                                className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>

            {/* Right Column - Image */}
            <div className=" md:block md:w-1/2 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src={loginImage}
                        alt="Decorative leaves pattern"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
