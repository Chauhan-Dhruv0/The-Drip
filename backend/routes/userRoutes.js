const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @router POST api/users/register
// @desc Register a user
// @access Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.status(400).send("User already exists");

    user = new User({ name, email, password });
    await user.save();

    //    Create JWT Payload

    const payload = {
      user: { id: user._id, role: user.role },
    };

    // sign in return token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        // set user token
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @router POST api/users/login
// @desc Login a user
// @access Public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    // check password

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    //    Create JWT Payload

    const payload = { user: { id: user._id, role: user.role } };

    // sign in return token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        if (err) throw err;

        // set user token
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @router GET api/users/profile
// @desc Get user logged-in user's profile (Protected Route)
// @access Private  

router.get("/profile",protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
