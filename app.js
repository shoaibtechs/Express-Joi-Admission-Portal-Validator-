const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const User = require("./Models/user.js");
const ExpressError = require("./ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");
const {userSchema} = require("./schema.js");
const Joi = require("joi");




console.log(typeof(User));



app.use(express.urlencoded({extended:true}));



const MONGOURL = 'mongodb://127.0.0.1:27017/practice-444';

const main = async()=>{

    mongoose.connect(MONGOURL);

}


main()
    .then(()=>{

        console.log("Databse Connected Sucessfully");

    })

    .catch((err)=>{

        console.log("Error Occured", err);

    })



const validateUser = (req, res, next) =>{

    let {error} = userSchema.validate(req.body, {abortEarly: false});

    if(error)
    {

        let errMsg = error.details.map((el)=>el.message).join("<br>");

        throw new ExpressError(400, errMsg);

    }


    return next();




}




    
app.get("/", (req, res)=>{

    res.send("This is the HOMEPAGE");

})

app.get("/user", (req, res)=>{

    res.render("user.ejs")


})


app.post("/user",   validateUser, wrapAsync(async(req, res)=>{

    let newUser = new User(req.body.user);
    await newUser.save();
    res.send("Addmission Approved");

}))





app.use((err, req, res, next)=>{


    let{message="Some Internal Error", status=400} = err;
    res.status(status).send(message);



})





app.listen(port, ()=>{

    console.log(`The server is running at port  ${port} `);

})
