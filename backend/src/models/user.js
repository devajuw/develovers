const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
    type: String,
    required: true
    },
    lastName : {
        type: String
    },
    emailId :{
        type: String,
      required: true,
      unique: true,
    lowercase: true
    },
    password :{
        type: String,
    required: true
    } ,
    age :{
        type: Number,
    required: true
    },
    gender : {
      type: String,
      validate(value) {
        if (!["male", "female", "others"].includes(value)) {
          throw new Error("Gender data is not valid")
        }
      }
  },
  about: {
    type: String,
    default : "This is a default about section."
  }
}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)
