import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) {
      return res.status(403).send("Access denied!");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    //verified is the user _id, not the user object
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    //put the id in the request
    req.id = verified;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
