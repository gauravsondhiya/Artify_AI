import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.listen(3000);

mongoose.connect(
  "mongodb+srv://gauravsondhiya9425:qwe123@artify.uvthzyb.mongodb.net/"
);
let signupschema = {
  email: String,
  name: String,
  password: String,
  date: String,
};
const signupdata = mongoose.model("signupdata", signupschema);

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const doc = await signupdata.find({ email, password });
  res.send(doc)
});


app.post("/signup", (req, res) => {
  let { email, name, password } = req.body;
  const datasave = new signupdata({ email, name, password, date: Date.now() }).exec();
  datasave.save()
    .then((e) => {
      console.log(e);
    })
    .catch((e) => {
      console.log(e);
    });
  res.json("datasave");
});