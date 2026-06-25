const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    marks :{

        type : Number,
        required : true
    },
    
    is_pass :{

        type : String,
        required: true

    },

    age :{

        type: Number,
        required : true
    }



})


const User = mongoose.model("User", userSchema);

module.exports = User;




