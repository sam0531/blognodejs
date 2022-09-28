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
app.use("/", bollyRouter);
app.use("/", fitnessRouter);
app.use("/", foodRouter);
app.use("/", hollyRouter);
app.use("/", techRouter);
app.use("/", trendRouter);


app.listen(process.env.PORT || port, ()=>{
    console.log(`Connected to Port ${port}`);
})

