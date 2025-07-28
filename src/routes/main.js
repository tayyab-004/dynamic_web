const express = require('express');
const Detail = require('../models/Detail');
const Service = require('../models/Service');
const Slider = require('../models/Slider');
const Contact = require('../models/Contact');
const { create } = require('hbs');
const routes = express.Router();

routes.get("/", async(req,res) => {
    const details = await Detail.findOne()
    const slides = await Slider.find()
    const services = await Service.find()
    // console.log(details)
    // console.log(slides)

    res.render("index", {
        details:details,
        slides:slides,
        services:services
    }); 
})

routes.get("/gallery",async(req,res) => {
    const details = await Detail.findOne()
    res.render("gallery", {
        details:details
    });
})

// process contact form
routes.post("/process-contact-form", async(req,res) => {
    console.log("Form Submitted Successfully!");
    console.log(req.body);
    // saving data of form to DB
    try{

        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect("/")

    } catch(e){
        console.log(e)
        res.redirect("/")
    }
})

module.exports = routes