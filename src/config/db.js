const { default: mongoose } = require("mongoose");
const connectdb=async()=>{
    try{
        await mongoose.connect("mongodb+srv://daljeetkaur092005_db_user:srk1234@cluster0.gvsmeup.mongodb.net/")
         console.log("i am running")
    }
    catch(error){
        console.log("error",error)
    }
}
module.exports=connectdb;