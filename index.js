import express from "express";
import cors from 'cors'
import './Database/connection.js'
import shiftRouter from "./Database/Model/Router/shiftRouter.js";
const app = express()
app.use(cors())
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