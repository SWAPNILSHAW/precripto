import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, msg: "Not authorized" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRETkEY);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};
export default authUser;
