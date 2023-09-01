const express = require('express');
const hbs = require('hbs');
const app = express();
const mongoose = require('mongoose');
const routes = require('./routes/main');
const Detail = require('./models/Detail');
const Slider = require('./models/Slider');
const Service = require('./models/Service');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}))

// /static/css/style.css
app.use('/static',express.static("public"));
// routes
app.use('', routes);

// template engine 
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials")

// db connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://aslibutt333:aslibutt333@cluster0.vpubwdz.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log("DataBase connected!");

    // Service.create([
    //     {
    //         icon: 'fa-solid fa-key',
    //         title: 'Access to Fresh Produce',
    //         description: 'We provide you with health conscious crops from door-to-door.',
    //         linkText: 'https://www.google.com',
    //         link: 'Order'
    //     },
    //     {
    //         icon: 'fa-solid fa-earth-americas',
    //         title: 'Nutritional Information',
    //         description: 'You will be able to have good decision for your health.',
    //         linkText: 'https://www.google.com',
    //         link: 'Check'
    //     },
    //     {
    //         icon: 'fa-solid fa-earth-americas',
    //         title: 'Nutritional Information',
    //         description: 'You will be able to have good decision for your health.',
    //         linkText: 'https://www.google.com',
    //         link: 'Check'
    //     }
    // ])

    // Slider.create([
    //         {
    //             title: 'Here we connects farmers and consumers',
    //             subTitle: 'Agriculture is the backbone of Pakistan!',
    //             imageURL: '/static/images/s1.jpg'
    //         },
    //         {
    //             title: 'Fresh crops are available here',
    //             subTitle: 'Grow healthy!',
    //             imageURL: '/static/images/s2.jpg'
    //         },
    //         {
    //             title: 'Find healthy tips here',
    //             subTitle: 'Live like a braver!',
    //             imageURL: '/static/images/s3.jpg'
    //         },
    //     ])


    // Detail.create({
    //     brandName: "AgriTrade",
    //     brandIconURL: "https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact-us"
    //         },
    //     ]
    // })
});


app.listen(process.env.PORT | 8080,()=> {
    console.log("server started");
})