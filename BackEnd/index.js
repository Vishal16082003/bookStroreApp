// const express = require('express')
// const dotenv =require("dotenv")
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
 import cors from "cors"


const app = express()
app.use(cors());
app.use(express.json())

dotenv.config()
const port = 3000;
const URI = process.env.MongodbURI;




//connect to mongo db
try {
  mongoose.connect(URI, {

  });
  console.log("Connted to mongoDb")
} catch (error) {
  console.log("error:", error);
}
// defining route
app.use("/book",bookRoute)
app.use("/users", userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

