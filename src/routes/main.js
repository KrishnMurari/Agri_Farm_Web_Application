const express=require('express');

const {route}=require('express/lib/application');

const Detail=require("../models/Detail");
const Service = require('../models/Service');
const Slider = require('../models/Slider');

const Contact=require('../models/Contact');







const routes= express.Router();

routes.get("/", async(req,resp)=>{
    
   const detail=await Detail.findOne({"_id":"63cebc46626d028f6492aceb"})
    // console.log(detail);
   const slider=await Slider.find()

   const services=await Service.find();
    resp.render("index",{
        detail : detail,
        slider: slider,
        services:services
    });
})

routes.get("/gallery", (req,resp)=>{
   
    resp.render("gallery");
    
})
routes.get("/servisec", (req,resp)=>{
   
    resp.render("servisec");
    
})



routes.post("/process-contact-form", async (req,resp)=>{
    console.log("this form is submetted");
    console.log(req.body);
    try {
        const data= await Contact.create(req.body)
        console.log(data);
        resp.redirect("/");

    } catch (e) {
        console.log(e);
        resp.redirect("/");
    }
})

module.exports=routes