// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { fetchAllOrders, updateOrderStatus } from "../../redux/Slice/adminOrderSlice";

// // const ordersData = [
// //     { id: "#67540ced3371612b361a0ed0", customer: "Admin User", total: "$199.96", status: "Processing" },
// //     { id: "#67540d3ca67b4a70e434e092", customer: "Admin User", total: "$40", status: "Shipped" },
// //     { id: "#675bf26c6a77bd83eedf7a18", customer: "Admin User", total: "$39.99", status: "Delivered" },
// //     { id: "#675c24b09b88827304bd5cc1", customer: "Admin User", total: "$39.99", status: "Cancelled" },
// // ];



// const OrderManagement = () => {
//     const navigate =useNavigate();
//     const dispatch = useDispatch();

//     const {user} = useSelector((state)=> state.auth);
//     const {orders, loading,error} = useSelector((state)=> state.adminOrders);

//     useEffect(()=>{
//         if(!user || user.role !== "admin"){
//             navigate("/")
//         }else{
//             dispatch(fetchAllOrders())
//         }
//     },[dispatch,user,navigate])

//     const updateStatus = (orderId, newStatus) => {
//         dispatch(updateOrderStatus({ id:orderId , newStatus}));
//         // const updatedOrders = [...orders];
//         // updatedOrders[index].status = newStatus;
//         // setOrders(updatedOrders);
//     };

//     if(loading) return <p>Loading...</p>
//     if(error) return <p>Error:{error}</p>

//     const statusStyles = {
//         Processing: "bg-blue-100 text-blue-800",
//         Shipped: "bg-purple-100 text-purple-800",
//         Delivered: "bg-green-100 text-green-800",
//         Cancelled: "bg-red-100 text-red-800",
//     };

//     return (
//         <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="mb-8 flex justify-between items-center">
//                 <h2 className="text-3xl font-bold text-gray-900">Order Management</h2>
//                 <div className="flex gap-2">
//                     <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
//                         Filter Orders
//                     </button>
//                     <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
//                         Sort By
//                     </button>
//                 </div>
//             </div>

//             <div className="overflow-x-auto rounded-lg border border-gray-200">
//                 <table className="w-full">
//                     <thead className="bg-gray-50">
//                         <tr>
//                             <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
//                             <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
//                             <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
//                             <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
//                             <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                         {orders.length > 0 ? (
//                             orders.map((order, index) => (
//                                 <tr key={order._id} className="hover:bg-gray-50 transition-colors">
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order._id}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.user.name}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{order.customer}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">{order.totalPrice.toFixed(2)}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <select
//                                             value={order.status}
//                                             onChange={(e) => updateStatus(index, e.target.value)}
//                                             className={`w-full max-w-[160px] px-3 py-1 rounded-md text-sm border focus:outline-none focus:ring-2 ${
//                                                 statusStyles[order.status]
//                                             } border-transparent focus:border-current transition-all`}
//                                         >
//                                             <option value="Processing" className="bg-blue-50 text-blue-800">Processing</option>
//                                             <option value="Shipped" className="bg-purple-50 text-purple-800">Shipped</option>
//                                             <option value="Delivered" className="bg-green-50 text-green-800">Delivered</option>
//                                             <option value="Cancelled" className="bg-red-50 text-red-800">Cancelled</option>
//                                         </select>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                                         <button
//                                             onClick={() => updateStatus(index, "Delivered")}
//                                             className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
//                                         >
//                                             Mark Delivered
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="5" className="px-6 py-24 text-center">
//                                     <div className="text-gray-400 text-sm">No orders found</div>
//                                     <p className="mt-1 text-xs text-gray-500">Your new orders will appear here</p>
//                                 </td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default OrderManagement;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllOrders, updateOrderStatus } from "../../redux/Slice/adminOrderSlice";

const OrderManagement = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { orders, loading, error } = useSelector((state) => state.adminOrders);

    useEffect(() => {
        if (!user || user.role !== "admin") {
            navigate("/");
        } else {
            dispatch(fetchAllOrders());
        }
    }, [dispatch, user, navigate]);

    const updateStatus = (orderId, status) => {
        dispatch(updateOrderStatus({ id: orderId, status }));
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const statusStyles = {
        Processing: "bg-blue-100 text-blue-800",
        Shipped: "bg-purple-100 text-purple-800",
        Delivered: "bg-green-100 text-green-800",
        Cancelled: "bg-red-100 text-red-800",
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="mb-8 flex justify-between items-center">
                <h2 className="text-3xl font-bold text-gray-900">Order Management</h2>
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
                        Filter Orders
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg transition-all">
                        Sort By
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Order ID</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order._id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {order.user?.name || "N/A"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                        ${order.totalPrice.toFixed(2) || "0.00"}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <select
                                            value={order.status}
                                            onChange={(e) => updateStatus(order._id, e.target.value)}
                                            className={`w-full max-w-[160px] px-3 py-1 rounded-md text-sm border focus:outline-none focus:ring-2 ${
                                                statusStyles[order.status]
                                            } border-transparent focus:border-current transition-all`}
                                        >
                                            <option value="Processing" className="bg-blue-50 text-blue-800">Processing</option>
                                            <option value="Shipped" className="bg-purple-50 text-purple-800">Shipped</option>
                                            <option value="Delivered" className="bg-green-50 text-green-800">Delivered</option>
                                            <option value="Cancelled" className="bg-red-50 text-red-800">Cancelled</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button
                                            onClick={() => updateStatus(order._id, "Delivered")}
                                            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors"
                                        >
                                            Mark Delivered
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-24 text-center">
                                    <div className="text-gray-400 text-sm">No orders found</div>
                                    <p className="mt-1 text-xs text-gray-500">Your new orders will appear here</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderManagement;
