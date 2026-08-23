const mongoose=require("mongoose")
const detailschema=new mongoose.Schema({
    newname:{
        type:String,
        required:true,
    },

age:{
    type:Number,
    required:true
},
team:{
    type:String,
    required:true,
}
})


let DetailModel=mongoose.model("all",detailschema)
module.exports=DetailModel