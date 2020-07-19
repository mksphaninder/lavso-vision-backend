const express = require('express');
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload');
const path = require('path');
const fs = require('fs');
const visionRoutes = require('./routes/vision');
// Imports the Google Cloud client library
// const vision = require('@google-cloud/vision');

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false}));
// parse application/json
app.use(bodyParser.json());
app.use(fileUpload());
app.use('/vision',visionRoutes);
app.get('/', (req,res)=> {
    res.send('welcome to vision service.');
});
app.use((req, res) => {
    res.status(404).send("Not Found! " + req.url);
});

app.listen(3000, () => {
    console.log('Server started on the port 3000');
});