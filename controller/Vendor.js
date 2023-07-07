const {vendorModal} = require('../database/Model')

const vendoRegisterController = async (req, res) => {
    let fetchuser='';
    const {vendor}=req.body;
    const fetchData = await vendorModal.find({name:vendor})
    fetchData.map((item) => {
        fetchuser = item.name;  
    })
if(fetchuser===vendor){
     res.send({msg:" vendor name already exist in our database"})  

}else{
    const registerDocument = new vendorModal({
        name: vendor,
    })
    const result = await registerDocument.save()
    console.log(result);
    res.send({msg:"vendor name insert sucessfully",result:true})
}
}

const vendorData=async(req,res)=>{
    const fetchData = await vendorModal.find()

    res.send(fetchData)

}

const {resourceModal} = require('../database/Model')

const multer=require('multer')
const path=require('path')
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/image')

    },
    filename:(req,file,cb)=>{
        cb(null,file.fieldname +"_" +Date.now() + path.extname(file.originalname))
    }
})
const upload=multer({storage:storage})

const resourceController = async (req, res) => {
     const { fullName,vendorName,technology } = req.body;
     console.log(fullName,vendorName,technology);

    const registerDocument = new resourceModal({
        name: fullName,
        image:req.file?.filename,
        vendorname:vendorName,
        technology:technology,
    })
     const result = await registerDocument.save()
    console.log(result);
    res.send({msg:"resouce deatial store sucessfully",result:true})
}
const resourceData=async(req,res)=>{
    const fetchData = await resourceModal.find()

    res.send(fetchData)

}



module.exports = { vendoRegisterController,resourceController,vendorData ,upload,resourceData}