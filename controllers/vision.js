const Vision = require('../models/Vision');
const googleVision = require('@google-cloud/vision');
const axios = require('axios');

exports.getLinks = (req, res) => {
    res.send('Welcome to vision controller');
}

exports.getImageLabel = async (req, res) => {
    // buffer image
    const imageBuffer = req.files.image.data;
    // Creates a client
    const client = new googleVision.ImageAnnotatorClient();

    Vision.getWebLinkDetection(imageBuffer)
    .then(response => {
        console.log(response);
        res.send(response)
    })
    .catch(err => {
        console.log(err);
        res.status(404).send("Sorry, Could not detect the image");
    })
};
