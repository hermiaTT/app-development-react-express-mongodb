const mongoose = require('mongoose');

const UserDetailSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    mobile: String,
    password: String,
    points:{type:Number, min:0},
    vip: Boolean,
    vipDetails: {
        level: Number,
        storedCredit:Number,
        birthDay: Date
    }
     
},
{
    colletion: "UserInfo"
});

mongoose.model("UserInfo", UserDetailSchema);

