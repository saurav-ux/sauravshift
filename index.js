import express from "express";
import cors from 'cors'
import './Database/connection.js'
import shiftRouter from "./Database/Model/Router/shiftRouter.js";
const app = express()
app.use(cors())
app.use(cors({
    origin:['https://deploy-mern-1whq.vercel.app'],
    methods:['POST','GET','DELETE'],
    credentials:true
  }))
const PORT= 5007;
app.use(express.json());
app.use('/shift',shiftRouter)

app.get('/',(req,res)=>{
    console.log("Saurav");
    res.send("Hello Saurav")
}
) 

app.listen(PORT,()=>{
    console.log(`Server is running on : http://localhost:${PORT}`)
})