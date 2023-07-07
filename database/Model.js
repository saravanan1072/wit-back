const mongoose=require('mongoose');

const RegisterStructure=mongoose.Schema({
    name:String
})

const vendorModal=mongoose.model("vendor",RegisterStructure)



const signUpStructure=mongoose.Schema({
    name:String,
    image:String,
    vendorname:String,
    technology:String,

})

const resourceModal=mongoose.model("resource",signUpStructure)

module.exports={vendorModal,resourceModal};