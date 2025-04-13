import React from "react";
import { FaBoxOpen, FaClipboardList, FaSignOutAlt, FaStore, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {logout} from "../../redux/Slice/authSlice";
import {clearCart} from "../../redux/Slice/cartSlice";

function AdminSidebar({ isSidebarOpen, toggleSidebar }) {
    const navigate =useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () =>{
        dispatch(logout())
        dispatch(clearCart())
        navigate ("/");
    }
    return (
        <>
            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0  bg-opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:static top-0 left-0 w-64 bg-gray-800 text-white p-6 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 transition-transform duration-300 ease-in-out z-20`}
            >
                <div className="mb-6">
                    <Link to={"/admin"} className="text-2xl font-medium">
                        The Drip
                    </Link>
                </div>

                <h2 className="text-lg font-medium mb-6 text-center">Sidebar Menu</h2>

                <nav className="flex flex-col space-y-2">
                    <NavLink
                        to={"/admin/users"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                                : "text-gray-300  hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                        }
                    >
                        <FaUser/>
                        <span>Users</span>
                    </NavLink>
                    <NavLink
                        to={"/admin/products"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                                : "text-gray-300  hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                        }
                    >
                        <FaBoxOpen/>
                        <span>Product</span>
                    </NavLink>
                    <NavLink
                        to={"/admin/orders"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                                : "text-gray-300  hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                        }
                    >
                        <FaClipboardList/>
                        <span>Orders</span>
                    </NavLink>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
                                : "text-gray-300  hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
                        }
                    >
                        <FaStore/>
                        <span>Shop</span>
                    </NavLink>
                </nav>
                <div className="mt-6">
                    <button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center justify-center space-x-2">
                        <FaSignOutAlt/>
                        <span>Logout</span>
                    </button>
                </div>


            </div>
        </>
    );
}

export default AdminSidebar;
