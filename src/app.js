const express = require('express');

const hbs=require('hbs');
const { default: mongoose } = require('mongoose');

const app = express();

const bodyParser=require('body-parser');
const routes= require('./routes/main');

const Detail=require("./models/Detail");

const Slider= require('./models/Slider')

const services=require('./models/Service')

app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)



app.set('view engine','hbs');
app.set("views","views")

hbs.registerPartials("views/partials");


// db connection

mongoose.connect("mongodb://localhost/Project_tut",()=>{
    console.log("database connected");

    // services.create([
    //     {
    //         icon:'fab fa-accusoft',
    //         title:'Provide Best Cources',
    //         description:'We provide best course that helps our student in placement and learning coding',
    //         linkText:'https://www.learncodewithkrishna.com',
    //         link:'Check'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Project',
    //         description:'We provide best course that helps our student in placement and learning coding',
    //         linkText:'https://www.learncodewithkrishna.com',
    //         link:'Learn'
    //     },
    //     {
    //         icon:'fab fa-affiliatetheme',
    //         title:'Learn Project',
    //         description:'We provide best course that helps our student in placement and learning coding',
    //         linkText:'https://www.learncodewithkrishna.com',
    //         link:'Learn'
    //     },
    // ])

    // Slider.create([
    //     {
    //       title:'Learn Java From Best Teacher',
    //       subTitle:'Java is one the most  and indutrial use languag'
    //       , imageUrl:"/static/image/s1.jpg"
    //     },
    //     {
    //         title:'Learn Node.js From Best Teacher',
    //         subTitle:'Node.js is one the most famous framwork and apllication'
    //         , imageUrl:"/static/image/s3.jpg"
    //       },
    //       {
    //         title:'Learn MongoDB From Best Teacher',
    //         subTitle:'MongoDB is one the best Database and good application in indutries'
    //         , imageUrl:"/static/image/s2.jpg"
    //       },
    // ])
    // Detail.create({
    //     brandName:"Agri Farm Servise",
    //     brandIconUrl :" ",
    //     links:[
    //         {
    //             label: "Home",
    //             url:"/"
    //         },{
    //             label:"services",
    //             url:"/servisec"
    //         }
    //         ,{
    //             label:"Gallery",
    //             url:"/gallery"
    //         }
    //         ,{
    //             label:"About",
    //             url:"/aboout"
    //         }
    //         ,{
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]

    // })
    
})

app.listen( process.env.PORT | 5500, ()=>{
    console.log("server started");
});
