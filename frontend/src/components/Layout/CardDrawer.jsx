import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function CardDrawer({ 
  drawerOpen, 
  toggleCartDrawer,
  cartItems = [],
  // handleQuantityChange = () => {},
  // handleRemoveItem = () => {}
}) {
  const navigate = useNavigate();
  const drawerRef = useRef(null);

  const {user,guestId}= useSelector((state)=> state.auth);
  const {cart} = useSelector((state)=>state.cart);
  const userId = user ?user._id : null ;




  const handleCheckout = () => {
    toggleCartDrawer();
    if(!user){
      navigate("/login?redirect=checkout");
    }else{
      navigate("/checkout");
    }
    
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleCartDrawer();
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [drawerOpen, toggleCartDrawer]);

  return (
    <div className={`fixed inset-0 z-50 flex justify-end ${drawerOpen ? "block" : "hidden"}`}>
      {/* Overlay to detect outside clicks */}
      <div className=" opacity-50" onClick={toggleCartDrawer}></div>

      {/* Cart Drawer */}
      <div
        ref={drawerRef}
        className={`relative w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cart && cart?.products?.length > 0 ? (
            <CartContents cart={cart} userId={userId} guestId={guestId}/>
          ):(
            <p>Your cart is empty</p>
          )}

          {/* {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            <CartContents 
              cartItems={cart}
              handleQuantityChange={handleQuantityChange}
              handleRemoveItem={handleRemoveItem}
            />
          )} */}

        </div>

        <div className="p-4 bg-white sticky bottom-0">
          {cart && cart?.products?.length > 0 && 
          <>
           <button
            
            onClick={handleCheckout}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            // disabled={cartItems.length === 0}
          >
            Checkout
          </button>
          </>
          }
         
        </div>
      </div>
    </div>
  );
}

export default CardDrawer;
