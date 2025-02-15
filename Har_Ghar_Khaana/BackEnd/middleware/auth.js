import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { authtoken } = req.headers;
  if (!authtoken) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(authtoken, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
