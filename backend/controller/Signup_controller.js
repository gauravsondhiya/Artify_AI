import usertable from "../models/Signup_models.js"
import bcrypt from 'bcrypt'

const Signup =async(req,res)=>{
  try {
    let {name, email, password} =req.body
      let emailcheck = await usertable.findOne({email})
      if(emailcheck) {
        return res.status(400).json("email already resigesterd")
      }
      let bcrupt_password = await bcrypt.hash(password,10)
     let datasave = new usertable({name,email,password:bcrupt_password})
     datasave.save()
     .then(()=>{
      res.send({status:true})
      console.log("datasaved done")
     })
  } catch (error) {
    console.log("kuch too error ha")
  }
   
}


export default Signup