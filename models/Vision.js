const googleVision = require('@google-cloud/vision');
const axios = require('axios');

class Vision {
    constructor() {

    }
    /**
     * Get response from logoDetection logo annotation and check if the logo 
     * annotation property is empty.
     * 
     * If found not empty then take the logo data and make call to the shopping
     * link service and send back the response.
     * 
     * Get the response from webDetection and check if it is empty. If not empty
     * then search for the matching brand links and store them in an object
     * 
     * Take then results from both the call and send back the response to the
     * frontend
     *  
     */
    getGoogleVisionLogoDetection(req) {
        
    }

    static async getWebLinkDetection(imageBuffer) {
        // Creates a client
        const client = new googleVision.ImageAnnotatorClient();
        const [result] = await client.webDetection(imageBuffer);
        const matchingPages = result.webDetection.pagesWithMatchingImages;
        return matchingPages
    }
}

module.exports = Vision;
