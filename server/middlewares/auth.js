import jwt from 'jsonwebtoken'

const userAuth= async (req , res ,next )=>{
    const{token}= req.headers

    if(!token){
        res.json({success:false})
    }
    try {
        const tokendecode = jwt.verify(token, process.env.JWT_SECRET)
        if(tokendecode.id){
            req.body.user._id = tokendecode.id  
        }else{
            return res.json({success:false,message:'not authorized'})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({message:"guu "})
    }
}

export default userAuth