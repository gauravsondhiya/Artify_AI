import express from 'express'
import cors from "cors"
import dbconnect from './config/db.js'
import auth_router from './router/auth_router.js'

dbconnect()
const app= express()


app.use(cors())
app.use(express.json())


app.use('/api/auth',auth_router)



app.get('/',(req,res)=>{
   res.send("hello artify ai")
})

app.listen(3000,()=>{
  console.log("server connected")
})