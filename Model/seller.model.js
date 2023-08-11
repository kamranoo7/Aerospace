let mongoose=require("mongoose")

let sellerSchema=mongoose.Schema({
    name:String,
    gender:String,
    email:String,
    pass:String
})


let SellerModel=mongoose.model("seller",sellerSchema)
module.exports={
    SellerModel
}