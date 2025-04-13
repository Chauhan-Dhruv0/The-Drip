const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscribe");

// @route   POST /api/subscribe
// @desc    Handle newsletter subscription
// @access  Public
router.post("/subscribe", async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: "Email is required." });
    }
    try {
        // Check if email is already subscribed
        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
            return res.status(400).json({ message: "Email already subscribed." });
        }

        // Create and save new subscriber
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();

        res.status(201).json({ message: "Successfully subscribed!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
