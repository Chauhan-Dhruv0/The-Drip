import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiDollarSign, FiPackage, FiShoppingCart, FiActivity } from "react-icons/fi";
import { fetchAdminProducts } from "../../redux/Slice/adminProductSlice";
import { fetchAllOrders } from "../../redux/Slice/adminOrderSlice";
import { useDispatch, useSelector } from "react-redux";


// const orders = [
//     {
//         _id: 123123,
//         user: { name: "Dhruv Chauhan" },
//         totalPrice: 100,
//         status: "Processing",
//     },
//     {
//         _id: 123124,
//         user: { name: "John Doe" },
//         totalPrice: 250,
//         status: "Delivered",
//     },
// ];


const AdminHomepage = () => {
    
const dispatch = useDispatch();
const {
    products,loading: productsLoading,error: productsError,} = useSelector((state) => state.adminProduct);

const {
    orders,
    totalOrders,
    totalSales,
    loading: ordersLoading,
    error: ordersError,
} = useSelector((state) => state.adminOrders);

useEffect(() => {
    dispatch(fetchAdminProducts())
    dispatch(fetchAllOrders())
},[dispatch])

// useEffect(() => {
//     console.log(products); // Check if products data is coming through
//     console.log(orders); // Check if orders data is coming through
//     console.log(totalSales); // Check if totalSales value is available
//     console.log(totalOrders); // Check if totalOrders value is available
// }, [products, orders, totalSales, totalOrders]);
    return (
        <div className="max-w-7xl mx-auto p-6">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
                <span className="text-sm text-gray-600">Last updated: Today</span>
            </div>
            {productsLoading || ordersLoading ? (
                <p>Loading ...</p>
            ) : productsError ? (
                <p className="text-red-500">Error fetching products: {productsError}</p>
            ) : ordersError ? (
                <p className="text-red-500">Error fetching orders: {ordersError}</p>
            ) : (
                
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                    <FiDollarSign className="text-2xl text-blue-500 mb-4" />
                    <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${totalSales.toFixed(2)}</p>
                    <span className="text-sm text-green-500">↑ 12% from last month</span>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                    <FiShoppingCart className="text-2xl text-green-500 mb-4" />
                    <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">${totalOrders}</p>
                    <Link to="/admin/orders" className="text-sm text-green-500 hover:underline inline-block mt-2">
                        View Orders →
                    </Link>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
                    <FiPackage className="text-2xl text-purple-500 mb-4" />
                    <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">{products.length}</p>
                    <Link to="/admin/products" className="text-sm text-purple-500 hover:underline inline-block mt-2">
                        Manage Products →
                    </Link>
                </div>

                {/* <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
                    <FiActivity className="text-2xl text-orange-500 mb-4" />
                    <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
                    <p className="text-2xl font-bold text-gray-900 mt-2">2,345</p>
                    <span className="text-sm text-orange-500">↓ 3% from last week</span>
                </div> */}
            </div>
        )}

            {/* Recent Orders Table */}
            <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
                    <Link to="/admin/orders" className="text-blue-500 hover:underline text-sm">
                        View All Orders
                    </Link>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left text-sm text-gray-500 border-b">
                                <th className="pb-3">Order ID</th>
                                <th className="pb-3">Customer</th>
                                <th className="pb-3">Amount</th>
                                <th className="pb-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="py-4 text-sm text-gray-900">#{order._id}</td>
                                        <td className="py-4 text-sm text-gray-900">{order.user?.name}</td>
                                        <td className="py-4 text-sm text-gray-900">${order.totalPrice.toFixed(2)}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered"
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-yellow-100 text-yellow-800"
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-xl text-gray-800">
                                        No recent Order found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminHomepage;   



// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { FiDollarSign, FiPackage, FiShoppingCart } from "react-icons/fi";
// import { fetchAdminProducts } from "../../redux/Slice/adminProductSlice";
// import { fetchAllOrders } from "../../redux/Slice/adminOrderSlice";

// function AdminHomepage() {
//     const dispatch = useDispatch();

//     const {
//         products = [],
//         loading: productsLoading = false,
//         error: productsError = null,
//     } = useSelector((state) => state.adminProducts || {});
    
//     const {
//         orders = [],
//         totalOrders = 0,
//         totalSales = 0,
//         loading: ordersLoading = false,
//         error: ordersError = null,
//     } = useSelector((state) => state.adminOrders || {});
    
//     useEffect(() => {
//         dispatch(fetchAdminProducts());
//         dispatch(fetchAllOrders());
//     }, [dispatch]);

//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <div className="flex justify-between items-center mb-8">
//                 <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
//                 <span className="text-sm text-gray-600">Last updated: Today</span>
//             </div>

//             {productsLoading || ordersLoading ? (
//                 <p>Loading ...</p>
//             ) : productsError ? (
//                 <p className="text-red-500">Error fetching products: {productsError}</p>
//             ) : ordersError ? (
//                 <p className="text-red-500">Error fetching orders: {ordersError}</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                     <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
//                         <FiDollarSign className="text-2xl text-blue-500 mb-4" />
//                         <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
//                         <p className="text-2xl font-bold text-gray-900 mt-2">${totalSales}</p>
//                         <span className="text-sm text-green-500">↑ 12% from last month</span>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
//                         <FiShoppingCart className="text-2xl text-green-500 mb-4" />
//                         <h3 className="text-sm font-medium text-gray-500">Total Orders</h3>
//                         <p className="text-2xl font-bold text-gray-900 mt-2">{totalOrders}</p>
//                         <Link to="/admin/orders" className="text-sm text-green-500 hover:underline inline-block mt-2">
//                             View Orders →
//                         </Link>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
//                         <FiPackage className="text-2xl text-purple-500 mb-4" />
//                         <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
//                         <p className="text-2xl font-bold text-gray-900 mt-2">{products?.length || 0}</p>
//                         <Link to="/admin/products" className="text-sm text-purple-500 hover:underline inline-block mt-2">
//                             Manage Products →
//                         </Link>
//                     </div>

//                     {/* Optional: Future Feature */}
//                     {/* <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
//                         <FiActivity className="text-2xl text-orange-500 mb-4" />
//                         <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
//                         <p className="text-2xl font-bold text-gray-900 mt-2">2,345</p>
//                         <span className="text-sm text-orange-500">↓ 3% from last week</span>
//                     </div> */}
//                 </div>
//             )}

//             {/* Recent Orders Table */}
//             <div className="bg-white rounded-xl shadow-sm p-6">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
//                     <Link to="/admin/orders" className="text-blue-500 hover:underline text-sm">
//                         View All Orders
//                     </Link>
//                 </div>

//                 <div className="overflow-x-auto">
//                     <table className="w-full">
//                         <thead>
//                             <tr className="text-left text-sm text-gray-500 border-b">
//                                 <th className="pb-3">Order ID</th>
//                                 <th className="pb-3">Customer</th>
//                                 <th className="pb-3">Amount</th>
//                                 <th className="pb-3">Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {orders.length > 0 ? (
//                                 orders.map((order) => (
//                                     <tr key={order._id} className="hover:bg-gray-50 transition-colors">
//                                         <td className="py-4 text-sm text-gray-900">#{order._id}</td>
//                                         <td className="py-4 text-sm text-gray-900">{order.user?.name}</td>
//                                         <td className="py-4 text-sm text-gray-900">${order.totalPrice}</td>
//                                         <td className="py-4">
//                                             <span
//                                                 className={`px-3 py-1 rounded-full text-sm ${
//                                                     order.status === "Delivered"
//                                                         ? "bg-green-100 text-green-800"
//                                                         : "bg-yellow-100 text-yellow-800"
//                                                 }`}
//                                             >
//                                                 {order.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan={4} className="p-8 text-center text-xl text-gray-800">
//                                         No recent orders found
//                                     </td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminHomepage;
