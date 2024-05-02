const express = require("express");
const Contact = require("../model/contact.js");
const route = express.Router();

route.get("/",async (req, res) => {
    try{
        const allContacts = await Contact.find({});
        res.status(200).json({status:"SUCCESS",allContacts});
    } catch(err){
        res.status(500).json({status:"ERROR",err});
    }
})
route.post("/create", async (req,res)=>{
    try{
        const newContact= await Contact.create(req.body);
        res.status(200).json({status: "SUCCESS",newContact});
    } catch(err){
        res.status(500).json({status:"ERROR",err});
    }
})
route.delete("delete/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const removedUser=await Contact.findByIdAndRemove(id);
        res.status(200).json({status: "SUCCESS",removedUser});
    } catch(err){
        console.log(err);
    }
})
module.exports = route;