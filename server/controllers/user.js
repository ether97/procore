import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const _id = req.id;
    const user = await User.findOne({ _id });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
