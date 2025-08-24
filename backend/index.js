import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"
import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "node:fs";

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


async function main() {

  const ai = new GoogleGenAI({
    GEMINI_API_KEY:process.env.GEMINI_API_KEY
  });

  const contents =
    "Hi, can you create a 3d rendered image of a pig " +
    "with wings and a top hat flying over a happy " +
    "futuristic scifi city with lots of greenery?";

  // Set responseModalities to include "Image" so the model can generate  an image
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-preview-image-generation",
    contents: contents,
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
    },
  });
   console.log(response)
}

app.post("/generateimage",(req,res)=>{
 main()
 res.send("done")
})