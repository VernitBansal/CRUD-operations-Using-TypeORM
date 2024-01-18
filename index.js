const express = require('express');
const { router } = require('./routes/user.routes');
const dataSource = require("../typeorm/mysql");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

dataSource.initialize().then(() => {
    console.log("Database connected!!");
})

app.listen(3000, () => {
    console.log("Server Started on Port 3000")
})

