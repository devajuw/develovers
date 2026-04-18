require('dotenv').config()
const express = require('express')
const connectDB = require ("./Config/database")
const app = express()
const User = require("./models/user")
app.post("/signup", async (req, res) => {
// creating a new instance of the User Model
const user = new User({
    firstName: "Dev",
    lastName : "Raj",
    emailId : "devvib@gmail.com",
    password : "ijhajhd9",
})
try {
await user.save()
res.send("User added successfully!!")
} catch(err){
    res.status(40).send("User NOY ADDED !!!"+ errr.message)
}

})

connectDB().then (() =>{
    console.log("database conncted✅")
    app.listen(3000,() => {
        console.log("The server is Running at PORT 3000")
    })
}).catch(err=> {
    console.log("database not conncted❌", err.message)
})