import mongoose from "mongoose";
const connect = 'mongodb+srv://sauravanand243:fwtqmCPaOqSoLUT3@cluster0.crih8fg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connect,{

}).then(()=>{
    console.log("Connected to Mongodb")
}).catch((error)=>{
    console.log("Connection Failed: ",error)
})
