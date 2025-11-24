import express from 'express'
import cors from "cors"
import dbconnect from './config/db.js'
import auth_router from './router/auth_router.js'
// import image_router from './router/Image_router.js'
import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

dbconnect()
const app= express()


app.use(cors())
app.use(express.json())


app.use('/api/auth',auth_router)
app.use("/api/auth",image_router)

app.get('/',(req,res)=>{
   res.send("hello artify ai")
})

app.listen(3000,()=>{
  console.log("server connected")
})
const path = "./data.json";
const markCommit = (x, y) => {
  const date = moment("2024-01-01")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date };

  jsonfile.writeFile(path, data, () => {
    simpleGit().add([path]).commit(date, { "--date": date }).push();
  });
};

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();
  
  const x = random.int(0, 54);
  const y = random.int(0, 6);

  const date = moment("2024-01-01")
    .add(x, "w")
    .add(y, "d")
    .format();

  const data = { date };
  console.log(date);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(date, { "--date": date }, makeCommits.bind(this, --n));
  });
};
makeCommits(150);