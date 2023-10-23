import express from 'express'
const shiftRouter = express.Router()
import ShiftData from '../Schema/shiftSchema.js'
shiftRouter.post('/',async (req,res)=>{
  try {
    const addData = new ShiftData(req.body)
    if(req.body.startTime=="" || req.body.endTime==""){
        res.status(500).send("Please fill input")
    }
    else{
        await addData.save()
        res.status(200).send(true)
    }
   
  } catch (error) {
    res.status(500).send("Internal Server Errors: ",error)
  }
})

shiftRouter.get('/',async(req,res)=>{
    try {
        res.status(200).send(await ShiftData.find({}))
    } catch (error) {
        res.status(500).send("Internal Server Errors: ",error)
    }
})

shiftRouter.delete('/:id',async(req,res)=>{
      try {
        const _id= req.params.id;
        await ShiftData.findByIdAndDelete(_id);
        res.status(200).send({status:"Data Deleted"})
      } catch (error) {
        res.status(500).send("Internal Server Errors: ",error)
      }
})
export default shiftRouter


