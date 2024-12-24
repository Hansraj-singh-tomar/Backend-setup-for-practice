const express = require("express");

const app = express();

//! app.use("/", (req, res) => res.send("home route is here"));
//! app.use appect all the route

app.get("/", (req, res) => {
    res.send("home route is here")
})

//! params - http://localhost:3000/user/1
app.get("/user/:userId", (req, res) => {
    console.log(req.params); // { userId: '1' }    
    res.send("user route is here");
})

//! query params - http://localhost:3000/user?userId=101&name=hansraj&password=123456
app.get("/user", (req, res) => {
    console.log(req.query); // { userId: '101', name: 'hansraj', password: '123456' }    
    res.send("user route is here");
})

app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
})