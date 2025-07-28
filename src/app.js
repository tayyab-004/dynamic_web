const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const { PORT, DB_CONNECTION_STRING } = require("../config/index");
const routes = require("./routes/main");
const Detail = require("./models/Detail");
const Slider = require("./models/Slider");
const Service = require("./models/Service");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/static", express.static("public"));
app.use("", routes);

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

mongoose.set("strictQuery", false);

// async connection function
const startServer = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_STRING);
    console.log("Database connected!");

    // await Service.create([
    //   {
    //     icon: "fa-solid fa-key",
    //     title: "Access to Fresh Produce",
    //     description:
    //       "We provide you with health conscious crops from door-to-door.",
    //     linkText: "https://www.google.com",
    //     link: "Order",
    //   },
    //   {
    //     icon: "fa-solid fa-earth-americas",
    //     title: "Nutritional Information",
    //     description: "You will be able to have good decision for your health.",
    //     linkText: "https://www.google.com",
    //     link: "Check",
    //   },
    //   {
    //     icon: "fa-solid fa-earth-americas",
    //     title: "Nutritional Information",
    //     description: "You will be able to have good decision for your health.",
    //     linkText: "https://www.google.com",
    //     link: "Check",
    //   },
    // ]);

    // await Slider.create([
    //   {
    //     title: "Here we connects farmers and consumers",
    //     subTitle: "Agriculture is the backbone of Pakistan!",
    //     imageURL: "/static/images/s1.jpg",
    //   },
    //   {
    //     title: "Fresh crops are available here",
    //     subTitle: "Grow healthy!",
    //     imageURL: "/static/images/s2.jpg",
    //   },
    //   {
    //     title: "Find healthy tips here",
    //     subTitle: "Live like a braver!",
    //     imageURL: "/static/images/s3.jpg",
    //   },
    // ]);

    // await Detail.create({
    //   brandName: "AgriTrade",
    //   brandIconURL:
    //     "https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg",
    //   links: [
    //     { label: "Home", url: "/" },
    //     { label: "Services", url: "/#services_section" },
    //     { label: "Gallery", url: "/#gallery" },
    //     { label: "About", url: "/#about_us_section" },
    //     { label: "Contact Us", url: "/#contact_us_section" },
    //   ],
    // });

    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

startServer();
