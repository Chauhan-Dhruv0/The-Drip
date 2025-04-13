import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayPalButton from "./PayPalButton";
import { useDispatch, useSelector } from "react-redux";
import {createCheckout} from "../../redux/Slice/checkoutSlice"
import axios from "axios";
import { clearFilters } from "../../redux/Slice/productSlice";


function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {cart , loading, error} = useSelector((state)=>state.cart)
  const {user} = useSelector((state)=> state.auth)

  const [checkoutId, setCheckoutId] = useState(null);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  // Ensure cart is loaded before proceding
  useEffect(()=>{
    if(!cart || !cart.products || cart.products.length === 0){
      navigate("/");
    }
  },[cart,navigate])
  const [email, setEmail] = useState("user@example.com");

  const handleCreateCheckout = async (e) => {
    e.preventDefault();
    if (cart && cart.products.length > 0) {
      
      const res = await dispatch(
        createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Paypal",
          totalPrice: cart.totalPrice,
          
        })
      );
      console.log(res); //  Add this to see what you get
      
    
      if (res.payload && res.payload._id) {
        setCheckoutId(res.payload._id); // Set checkout ID if checkout was successful
      }
    }
    
    
    
  };

  const handlePaymentSuccess = async (details) => {
    // console.log("Payment Successful", details);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
        { paymentStatus: "paid", paymentDetails: details },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      // if(response.status === 200){
        await handleFinalizeCheckout(checkoutId) // finalizze checkout if paymen successful
      // }else{
      //   console.error(error);
      // }
    } catch (error) {
      console.error(error);
    }
    clearFilters
    navigate("/order-confirmation");
    
  };
const handleFinalizeCheckout = async (checkoutId)=>{
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    // if(res/ponse.status === 200){
      navigate("/order-confirmation")
    // }else{
    //   console.error(error);
    // }
  } catch (error) {
    console.error(error);
  }
}

if(loading) return <p>Loading Cart...</p>
if(error) return <p>Error :{error}</p>
if(!cart || !cart.products || cart.products.length === 0){
  return <p>Your Cart is empty</p>
} 

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6">
      {/* Left Section: Checkout Form */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl uppercase font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          {/* Contact Details */}
          <h3 className="text-lg font-medium mb-3">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={user? user.email : ""}
              className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>

          {/* Shipping Details */}
          <h3 className="text-lg font-medium mb-3">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["firstName", "lastName"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type="text"
                  value={shippingAddress[field]}
                  onChange={(e) =>
                    setShippingAddress((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            ))}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress((prev) => ({ ...prev, address: e.target.value }))
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4">
            {["city", "postalCode", "country"].map((field) => (
              <div key={field}>
                <label className="block text-gray-700">{field.replace(/([A-Z])/g, " $1")}</label>
                <input
                  type="text"
                  value={shippingAddress[field]}
                  onChange={(e) =>
                    setShippingAddress((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            ))}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Payment Section */}
          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg font-medium mb-3">Pay with PayPal</h3>
                <PayPalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={() => alert("Payment Failed, try again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section: Order Summary */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold uppercase mb-4">Order Summary</h2>
        <ul className="divide-y divide-gray-300">
          {cart.products.map((product, index) => (
            <li key={index} className="flex items-center gap-4 py-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded object-cover"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600 text-sm">
                  Size: {product.size} | Color: {product.color}
                </p>
              </div>
              <p className="text-gray-900 font-bold">${product.price}</p>
            </li>
          ))}
        </ul>

        {/* Pricing Details */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between text-lg">
            <span>Subtotal</span>
            <span className="font-semibold">${cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-lg">
            <span>Shipping</span>
            <span className="font-semibold text-green-600">
              {cart.shippingCost > 0 ? `€${cart.shippingCost}` : "FREE"}
            </span>
          </div>
          <div className="border-t pt-3 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${((cart.totalPrice || 0) + (cart.shippingCost || 0)).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;




// const cart = {
//   products: [
//     {
//       name: "Stylish Jacket",
//       size: "M",
//       color: "Black",
//       price: 120,
//       image: "https://picsum.photos/150?random=1",
//     },
//     {
//       name: "Stylish Jacket",
//       size: "S",
//       color: "White",
//       price: 100,
//       image: "https://picsum.photos/150?random=2",
//     },
//   ],
//   totalPrice: 220,
//   shippingCost: 0, // Default added to avoid undefined issues
// };