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

// @route   PUT api/users/change-password
// @desc    Change password for logged-in user
// @access  Private
router.put("/change-password", protect, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await user.matchPassword(currentPassword);

    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Validate new password pattern
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^_-])[A-Za-z\d@$!%*#?&^_-]{6,}$/;
    if (!passwordRegex.test(newPassword)) {
      return res.status(400).json({ message: "New password must include at least 1 letter, 1 number, and 1 special character." });
    }

    user.password = newPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});


// @router GET api/users/profile
// @desc Get user logged-in user's profile (Protected Route)
// @access Private  

router.get("/profile",protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
