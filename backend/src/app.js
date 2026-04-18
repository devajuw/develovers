const express = require('express')
const app = express()

const {adminAuth, userAuth} = require("./Middlewares/auth")
app.use("/admin" , adminAuth);

app.get("/getUserData", (req, res) => {
    //Logic of DB call
try{
    throw new Error("dbbnakbd")
    res.send("User Data Sent!!")

}
catch (err){
    res.status(500).send("Some error contact support team")
}}
)

app.get("/user", userAuth, (req, res) => {
    // console.log("Save data to DB!")
    res.send("User Data Send !!")
})
app.get("/admin/getAllData",(req, res) => {
    // console.log("Save data to DB!")
    res.send("All data sent")
})
app.listen(3000,() => {
    console.log("The server is Running at PORT 3000")
    app.use("/", (err, req, res, next) => {
        if (err) {
            res.staus(500).send("Something went wrong")
        }
    })
    })
    