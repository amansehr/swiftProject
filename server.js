const express = require("express");
const app = express();
require('dotenv').config()

const bodyParser = require('body-parser')
const {sequelize} = require("./models/index");

// sequelize.sync({ force: true }).then(() => console.log("table created"));


app.use(bodyParser.json({ type: 'application/*+json' }))

const req = require("./routes/index");
app.use('*',req);
//app.use("/",req);


app.listen(process.env.PORT,(req,res) => {
    console.log("Server started at",process.env.PORT);
});
