import jwt from "jsonwebtoken";

// admin authentication middleware

const authAdmin = async (req, res, next) => {
  try {
    const atoken  = req.headers['Authorization'];
    if (!atoken) {
      return res.json({ success: false, msg: "Not authorized" });
    }
    const token_decode = jwt.verify(atoken, process.env.JWT_SECRETkEY);
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, msg: "Not authorized" });
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};
export default authAdmin;
