const express = require('express');
const bollyRouter = require('./route/bollydata');
const fitnessRouter = require('./route/fitnessdata');
const foodRouter = require('./route/fooddata');
const hollyRouter = require('./route/hollydata');
const techRouter = require('./route/techdata');
const trendRouter = require('./route/trenddata');
const cors = require("cors");

const app = express();
const port = 9000;

app.use(cors());
app.use("/s", bollyRouter);
app.use("/s", fitnessRouter);
app.use("/s", foodRouter);
app.use("/s", hollyRouter);
app.use("/s", techRouter);
app.use("/s", trendRouter);


app.listen(process.env.PORT || port, ()=>{
    console.log(`Connected to Port ${port}`);
})

