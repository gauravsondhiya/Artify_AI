import usertable from "../models/Signup_models.js";
import bcrypt from 'bcrypt'
const login_controller = async(req, res) => {
  let { email, password } = req.body;
  let datacheck = await usertable.find({email})
  if(!datacheck) return res.status(404).json("wrong email")
  console.log(password)
  let pass_check = await bcrypt.compare(password,datacheck.password,(e,result)=>{
     console.log(e +"   "+ result)
  })
  console.log(pass_check)
  res.json("login success")
};

export default login_controller;
