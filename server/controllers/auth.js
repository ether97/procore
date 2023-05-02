import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// REGISTER USER

export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exists = await User.findOne({ email });

    if (exists) {
      return res.status(400).json({ message: "user already exists!" });
    }

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });

    if (user) {
      const savedUser = await user.save();
      return res.status(201).json(savedUser);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log("user does not exist!");
      return res.status(400).json({ message: "user does not exist!" });
    }

    const successful = await bcrypt.compare(password, user.password);
    if (!successful) {
      console.log("invalid credentials!");

      return res.status(400).json({ message: "invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
    console.log("hi");
    delete user.password;
    console.log("here");
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
