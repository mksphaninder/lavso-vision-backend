const googleVision = require('@google-cloud/vision');
const axios = require('axios');

class Vision {
    constructor() {}

    getGoogleVisionLogoDetection(req) {}

    static async getWebLinkDetection(imageBuffer) {
        // Creates a client
        const client = new googleVision.ImageAnnotatorClient();
        const [result] = await client.webDetection(imageBuffer);
        const [fullMatchingImages] = result.webDetection.pagesWithMatchingImages;
        // const matchingPages = result.webDetection;
        return fullMatchingImages;
    }
}

module.exports = Vision;
