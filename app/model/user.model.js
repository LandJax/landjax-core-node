const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { BCRYPT_SALT } = require("./../config")
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    lastname: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    email:{
        type: String,
        trim: true,
        unique: true,
        index: true,
        required: [true, "Email is required"]
    },
    password:{
        type: String,
    },
    dateOfBirth:{
        type: Date,
        trim: true,
        required: true,

    },
    deletedAt:{type: Date}
    
}, {
    timestamps: true
});

userSchema.pre('save', function(next){
    const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
    this.password = hash;
    
    next()
})

module.exports = mongoose.model("User", userSchema)