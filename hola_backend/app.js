const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
const bcrypt = require('bcryptjs');

const mongoUrl = "mongodb+srv://hermiathm:ZgGQIxhjT65gg0JU@holammdata.bs2ykqo.mongodb.net/?retryWrites=true&w=majority";



mongoose
    .connect(mongoUrl)
    .then(()=>{
        console.log("connect to Database...");
    })
    .catch((e)=>{
        console.log(e);
    })

require('./UserDetails')

const User = mongoose.model("UserInfo");


app.get("/",(req,res)=>{
    res.send({ status: "Started"});

})

app.post('/register', async(req,res)=>{
    const {name, email,mobile, password} = req.body;
    const oldUser = await User.findOne({email: email});
    if(oldUser){
        return res.send({data:"User already exists!"});
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        await User.create({
            name: name,
            email: email,
            mobile,
            password: encryptedPassword,
        });
        res.send({status: "ok", data: "User Created"});
    } catch (e){
        res.send({status:"error", data:e})
    }
})

app.listen(8080, ()=>{
    console.log("node js server started");
})


