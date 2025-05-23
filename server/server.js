import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import userRouter from './routes/userRoutes.js'
const app = express();
const port = process.env.PORT || 4000;
app.listen(port);

app.use(express.json());
app.use(cors());

app.use('/api/user',userRouter)

await connectDb()
app.get("/", (req, res) => {
  res.send("hello");
});
