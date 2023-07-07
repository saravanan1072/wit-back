const express=require('express')
const route=express();
const vendocontroller=require('../controller/Vendor');
route.post('/vendorRegister',vendocontroller.vendoRegisterController)
route.get('/vendorRegister',vendocontroller.vendorData)
route.post('/resource',vendocontroller.upload.single("resume"),vendocontroller.resourceController)
route.get('/resource',vendocontroller.resourceData)







module.exports=route;