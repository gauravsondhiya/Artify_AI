import userModel from "../modals/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userAuth from "../middlewares/auth.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.json({
        success: false,
        message: "detail missing",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const userdata = {
      name,
      email,
      password: hashedpassword,
    };
    const newUser = new userModel(userdata);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token, user: { name: user.name } });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res({ message: "user not exist" });
    }

    const ismatch = await bcrypt.compare(password, user.password);

    if (ismatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token, user: { name: user.name } });
    } else {
      return res({ message: "invalid" });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const userCredit = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await userModel.findById(userId);
    res.json({
      success: true,
      credits: user.creditbalance,
      user: { name: user.name },
    });
  } catch (error) {
    res.json({
        message:"credit ki gand fadgi"
    })
  }
};

