import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {clearCart} from "../redux/Slice/cartSlice"

// const checkout = {
//   _id: "12323",
//   createdAt: new Date(),
//   checkoutItems: [
//     {
//       productId: "1",
//       name: "Jacket",
//       color: "black",
//       size: "M",
//       price: 150,
//       quantity: 1,
//       image: "https://picsum.photos/150?random=1",
//     },
//     {
//       productId: "2",
//       name: "Jacket",
//       color: "black",
//       size: "M",
//       price: 150,
//       quantity: 1,
//       image: "https://picsum.photos/150?random=2",
//     },
//   ],
//   shippingAddress: {
//     address: "123 Fashion Street",
//     city: "New York",
//     country: "USA",
//   },
// };
 


function OrderConfirmation() {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {checkout} = useSelector((state)=> state.checkout);


  // const {cart , loading, error} = useSelector((state)=>state.cart)
  // const {user} = useSelector((state)=> state.auth)

// Clear cart whhen order confirm
useEffect(()=>{
  if (checkout && checkout._id) {
    dispatch(clearCart());
    localStorage.removeItem("cart");
  } else {
    navigate("/my-orders");
  }
},[dispatch,checkout,navigate])

  const calculateEstimated = (orderDate) => {
    const estimatedDate = new Date(orderDate);
    estimatedDate.setDate(estimatedDate.getDate() + 10);
    return estimatedDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You For Your Order
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order ID and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p>
                Estimated Delivery: {calculateEstimated(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* Order items */}
          <div className="mb-28">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div className="text-sm text-gray-500">
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p>
                    {item.color} || {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">Paypal</p>
            </div>

            {/* delievry info */}

            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">{checkout.shippingAddress.address}</p>
              <p className="text-gray-600">{checkout.shippingAddress.city},{" "} {checkout.shippingAddress.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
