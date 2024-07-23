import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";




//app config

const app = express()
const port = 4000


//dbconnection

connectDB();


//api endpoints
app.use("/api/food",foodRouter)
//middleware


app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.send("api working")
})
app.listen(port,()=>{
    console.log(`server started on  http://localhost:${port}`)
})