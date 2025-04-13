const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Product");
const products = require("./data/products");

dotenv.config();

// mongoDB connect
mongoose.connect(process.env.MONGO_URI);

// seed data

const seedData = async () => {
    try {
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        // create default admin
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin",
        });

        // assign user id each product

        const userID = createdUser._id;
        const sampleProducts = products.map((product) => {
            return {
                ...product,
                user:userID,
            };
        });
        // into database
        await Product.insertMany(sampleProducts);
        console.log("Product data seeded successfully");
        process.exit();
    } catch (error) {
        console.error("Error seeding data", error);
        process.exit(1);
     }
};

seedData()