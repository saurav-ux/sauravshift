import mongoose from "mongoose";
const shiftSchema7 = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    startTime:{
        type:String,
        required:true,
    },
    endTime:{
        type:String,
        required:true,
    }
})



const ShiftData = new mongoose.model("ShiftData",shiftSchema7)
export default ShiftData