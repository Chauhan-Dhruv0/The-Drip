const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes= require("./routes/userRoutes");
const productRoutes= require("./routes/productRoute");
const cartRoutes= require("./routes/CartRoutes");
const checkoutRoutes= require("./routes/CheckoutRouter");
const orderRoutes= require("./routes/orderRoutes");
const uploadRoutes= require("./routes/uploadRoutes");
const subscribeRoutes= require("./routes/SubscriberRouters");
const adminRoutes= require("./routes/adminRoute");
const productAdminRoutes= require("./routes/productAdminRoutes");
const adminOrderRoutes= require("./routes/adminOrderRoutes");

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config()
const PORT = process.env.PORT || 3000;

// MONGODB Connection
connectDB();


app.get("/",(req,res)=>{
    res.send("welcome to api");
})

// API routes

app.use("/api/users",userRoutes);
app.use("/api/products",productRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/checkout",checkoutRoutes);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscribeRoutes);

// Admin
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",adminOrderRoutes);

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})
