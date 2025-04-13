import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/Slice/orderSlice";

function MyOrderPage() {
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   // Simulated fetch data
  //   setTimeout(() => {
  //     const mockOrder = [
  //       {

  //         _id: "13245",
  //         createdAt: new Date().toLocaleDateString(),
  //         shippingAddress: { city: "New York", country: "USA" },
  //         orderItems: [
  //           {
  //             name: "Product 1",
  //             image: "https://picsum.photos/500/500?random=1",
  //           },
  //         ],
  //         totalPrice: 100,
  //         isPaid: true,
  //       },
  //       {
  //         _id: "12245",
  //         createdAt: new Date().toLocaleDateString(),
  //         shippingAddress: { city: "Los Angeles", country: "USA" },
  //         orderItems: [
  //           {
  //             name: "Product 2",
  //             image: "https://picsum.photos/500/500?random=2",
  //           },
  //         ],
  //         totalPrice: 150,
  //         isPaid: false,
  //       },
  //     ];
  //     setOrders(mockOrder);
  //   }, 1000);
  // }, []);


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(fetchUserOrders());
  }, [dispatch])


  const handleRowClick = (orderId) => {
    navigate(`/order/${orderId}`)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error}</p>

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:bg-gray-50">
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {/* <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    /> */}
                    {order.orderItems && order.orderItems.length > 0 ? (
                      <img
                        src={order.orderItems[0].image}
                        alt={order.orderItems[0].name}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-gray-400">No image</span>
                    )}

                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.createdAt}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {/* {order.shippingAddress.city},{" "}
                    {order.shippingAddress.country} */}
                    {order.shippingAddress.city
                      ? `${order.shippingAddress.city},${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems[0].name}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice.toFixed(2)}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.isPaid ? (
                      <span className="text-green-600 font-semibold">Paid</span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Pending
                      </span>
                      //   3:46:00
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center text-gray-500">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrderPage;
