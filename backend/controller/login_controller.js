import usertable from "../models/Signup_models.js";
import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import "dotenv/config";

let login_controller = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usertable.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log(isPasswordValid)
    if (isPasswordValid) {
     return res.status(200).json({
      message: "Login successful",
      status: true,
      username: user.name,
      // token,
    });
  
    }

    // Optional JWT generation
    // const token = jwt.sign(
    //   { email: user.email },
    //   process.env.Secret_key,
    //   { expiresIn: "3h" }
    // );

   
 return res.status(401).json({
        message: "Invalid password",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default login_controller;
