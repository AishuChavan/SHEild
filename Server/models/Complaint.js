const mongoose=require("mongoose");
const complaintSchema=new mongoose({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    Reason:{
        type:String,
        required:true,
    },
    Proof:{
        type:String   //string means link of any image or video or audio
    },
    Date:{
        type:Date,
    },
    status:{
        type:Boolean,
    }
})

module.exports=mongoose.model("Complaint",complaintSchema);
