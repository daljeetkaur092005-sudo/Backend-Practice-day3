const express=require("express")
const connectdb = require("./config/db")
const DetailModel = require("./models/details")
const app=express()
app.use(express.json())
app.get("/",(req,res)=>{
 res.send("data received")
})

app.post("/detail",async(req,res)=>{
      let {newname,age,team}=req.body
    let newdetail=await DetailModel.create({
        newname,
        age,
        team
    })
  
    res.send({
        success:true,
        message:"request accepted",
        data:newdetail

    })
})
connectdb()
module.exports=app;