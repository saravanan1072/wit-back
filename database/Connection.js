const mongo=require('mongoose')

const url="mongodb+srv://saravanan10722:saravanan10722@cluster0.glcm6ft.mongodb.net/?retryWrites=true&w=majority"

//const url="mongodb://127.0.0.1:27017"

const  connect=async()=>{
    try{
      const data=await  mongo.connect(url)
      console.log("connected");


    }
    catch{
        console.log("error");

    }
}
module.exports=connect;