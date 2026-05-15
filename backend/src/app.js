require("dotenv").config();
const express = require("express");
const connectDB = require("./Config/database");
const app = express();
const User = require("./models/user");
const { validateSignUpData } = require("./Utils/validation");
app.use(express.json());

// User SignUP
app.post("/signup", async (req, res) => {
  try {
    // validate the data
    validateSignUpData(req);
    const user = new User(req.body);
    await user.save();
    res.send("User added successfully!!");
  } catch (err) {
    res.status(400).send("Error : " + err.message);
  }
});

app.get("/GetUser", async (req, res) => {
  const userEmail = req.query.userEmail;
  try {
    const user = await User.find({});
    //empty filter means searching all users
    if (!user || user.length === 0) res.status(400).send("User not found");
    else res.send(user);
    console.log(user);
  } catch (err) {
    res.status(400).send("Something went wrong: " + err.message);
  }
});

// deleting the user

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted Successfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

// UPDATE the data of the user

app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  const ALLOWED_UPDATES = ["userId", "photoUrl", "about", "gender", "age"];
  try {
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k),
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "before",
      runValidators: true,
    });
    console.log(user);
    res.send("User Updated Successfully");
  } catch (err) {
    res.status(400).send("🚨Update Failed: " + err.message);
  }
});

connectDB()
  .then(async () => {
    console.log("database conncted✅");
    app.listen(3000, () => {
      console.log("The server is Running at PORT 3000");
    });
  })
  .catch((err) => {
    console.log("database not conncted❌", err.message);
  });
