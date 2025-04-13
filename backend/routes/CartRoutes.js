const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router(); 
// Use express.Router(), not require("./userRoutes")

// Helper function to get userID or Guest ID
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
};

// @route POST /api/cart
// @desc Add a product to cart for guest
// @access Public

router.post("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;

    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not Found" });
        }

        let cart = await getCart(userId, guestId);

        if (cart) {
            const productIndex = cart.products.findIndex(
                (p) => p.productId.toString() === productId &&
                       p.size === size &&
                       p.color === color
            );
            // const productIndex = cart.products.findIndex(
            //     (p) =>
            //         p.productId.toString() === productId.toString() &&
            //         p.size.toString() === size.toString() &&
            //         p.color.toString() === color.toString()
            // );

            // console.log("Found product index:", productIndex);

            if (productIndex > -1) {
                console.log("Updating existing product quantity");
                cart.products[productIndex].quantity += parseInt(quantity, 10);
            } else {
                console.log("Adding new product to cart");
                cart.products.push({
                    productId,
                    name: product.name,
                    image: product.images[0].url,
                    price: product.price,
                    size,
                    color,
                    quantity //: parseInt(quantity, 10),
                });
            }

            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );

            // console.log("Final cart:", JSON.stringify(cart, null, 2));
            await cart.save();
            return res.status(200).json(cart);
        } else {
            // console.log("Creating new cart");
            const newCart = await Cart.create({
                user: userId || undefined,
                guestId: guestId || "guest_" + new Date().getTime(),
                products: [
                    {
                        productId,
                        name: product.name,
                        image: product.images[0].url,
                        price: product.price,
                        size,
                        color,
                        quantity //: parseInt(quantity, 10),
                    },
                ],
                totalPrice: product.price * quantity //parseInt(quantity, 10),
            });

            return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});

// @route PUT /api/cart
// @desc Update product quantity in cart
// @acess Public

router.put("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });

        const productIndex = cart.products.findIndex(
            (p) =>
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );
        if (productIndex > -1) {
            // update quantity
            if (quantity > 0) {
                cart.products[productIndex].quantity = quantity;
            } else {
                cart.products.splice(productIndex, 1);
            }
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "Product not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
});

// @route DELETE /api/cart
// @desc remove from the cart
// @acess Public

router.delete("/", async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        let cart = await getCart(userId, guestId);
        if (!cart) return res.status(404).json({ message: "Cart not found" });
        const productIndex = cart.products.findIndex(
            (p) =>
                p.productId.toString() === productId &&
                p.size === size &&
                p.color === color
        );
        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            cart.totalPrice = cart.products.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
            );
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: "products not found in cart" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

// @route GET /api/cart
// @desc get logged user or guest user id
// @acess Public

router.get("/", async (req, res) => {
    const { userId, guestId } = req.query;

    try {
        const cart = await getCart(userId, guestId);
        if (cart) {
            res.json(cart);
        } else {
            res.status(404).json({ message: "Cart not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// @route GET /api/cart/merge
// @desc merge guest cart into usercart
// @acess private

router.post("/merge", protect, async (req, res) => {
    const { guestId } = req.body;

    try {
        // find the guest cart and user cart

        const guestCart = await Cart.findOne({ guestId });
        const userCart = await Cart.findOne({ user: req.user._id });

        if (guestCart) {
            if (guestCart.products.length === 0) {
                return res.status(400).json({ message: "Guest cart is empty" });
            }
            if (userCart) {
                // Merge guest cart into user cart
                guestCart.products.forEach((guestItem) => {
                    const productIndex = userCart.products.findIndex(
                        (item) =>
                            item.productId.toString() === guestItem.productId.toString() &&
                            item.size === guestItem.size &&
                            item.color === guestItem.color
                    );
                    if(productIndex > -1){
                        // if item exist in the user cart update the quantity
                        userCart.products[productIndex].quantity += guestItem.quantity;

                    }else{
                        userCart.products.push(guestItem);
                    }
                });
                userCart.totalPrice = userCart.products.reduce((acc,item)=>
                acc + item.price * item.quantity,
                0
                );
                await userCart.save();

                // remove guest cart after merge
                try{
                    await Cart.findOneAndDelete({guestId});
                }catch(error){
                    console.error("Error deleting guest cart:",error)
                }
                res.status(200).json(userCart)
            }else{
                // if no cart
                guestCart.user = req.user._id;
                guestCart.guestId = undefined,
                await guestCart.save();

                res.status(200).json(guestCart);
            }
        }else{
            if(userCart){
                // Guest cart has alread merge return user cart

                return res.status(200).json(userCart);

            }
            return res.status(404).json({message: "Guest cart not found"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router; 
