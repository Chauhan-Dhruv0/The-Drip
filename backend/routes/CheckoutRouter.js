const express = require("express");
const Cart = require("../models/Cart");
const Checkout = require("../models/Checkout");
const Order = require("../models/Order");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @Route POST api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", protect, async (req, res) => {
  const { checkoutItems, shippingAddress, paymentMethod, totalPrice } = req.body;

  if (!checkoutItems || checkoutItems.length === 0) {
    return res.status(400).json({ message: "No item in checkout" });
  }

  try {
    const newCheckout = await Checkout.create({
      user: req.user._id,
     
      checkoutItems, 
      shippingAddress,
      paymentMethod,
      totalPrice,
      paymentStatus: "Pending",
      isPaid: false,
    });

    console.log(`Checkout created for user: ${req.user._id}`);
    res.status(201).send(newCheckout);
  } catch (error) {
    console.log("Error creating checkout session", error);
    res.status(500).send("Server Error");
  }
});

// @Route PUT api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
router.put("/:id/pay", protect, async (req, res) => {
  const { paymentStatus, paymentDetails } = req.body;

  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus === "paid") {
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails;
      checkout.paidAt = Date.now();

      await checkout.save(); 

      res.status(200).json(checkout);
    } else {
      res.status(400).json({ message: "Invalid payment status" });
    }
  } catch (error) {
    
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @Route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect, async (req, res) => {
  try {
    const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (checkout.isPaid && !checkout.isFinalize) {
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkoutItems, // Fixed field
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails,
      });

      checkout.isFinalize = true;
      checkout.finalizedAt = Date.now(); 
      await checkout.save(); 

      await Cart.findOneAndDelete({ user: checkout.user });

      res.status(201).json(finalOrder);
    } else if (checkout.isFinalize) {
      res.status(400).json({ message: "Checkout already finalized" });
    } else {
      res.status(400).json({ message: "Checkout is not paid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
