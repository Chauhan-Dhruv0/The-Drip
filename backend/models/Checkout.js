const mongoose = require("mongoose");

const CheckoutItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity:{
      type:Number,
      required: true,
    },
    size: String,
    color: String
  },
  { _id: false }
);

const CheckoutSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    checkoutItems: [CheckoutItemSchema], //  renamed for clarity
    shippingAddress: { //  fixed typo
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    paymentDetails: {
      type: mongoose.Schema.Types.Mixed,
    },
    paymentStatus: {
      type: String,
      default: "Pending",
    },
    isFinalize: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//  Use a clean model name
module.exports = mongoose.model("Checkout", CheckoutSchema);
