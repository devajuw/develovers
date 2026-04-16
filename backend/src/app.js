const express = require('express')
const app = express()
app.use("/test",(req, res) => {
    res.send("Hello Bro!!, I am test")
})
app.get("/user",(req, res) => {
    // console.log("Save data to DB!")
    res.send("Yayy GET worled")
})
app.post("/user",(req, res) => {
    // console.log("Save data to DB!")
    res.send("Yayy POST worked")
})
app.listen(3000,() => {
    console.log("The server is Running at PORT 3000")
    app.use("/",(req, res) => {
        res.send("Hello Bro!!, I am the server")
    })
})