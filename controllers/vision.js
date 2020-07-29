const Vision = require("../models/Vision");

exports.getLinks = (req, res) => {
  res.send("Welcome to vision controller");
};

exports.getImageLabel = async (req, res) => {
  if (req.files) {
    // buffer image
    const imageBuffer = req.files.image.data;
    Vision.getWebLinkDetection(imageBuffer)
      .then((response) => {
        console.log(response);
        res.send(response);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send("Sorry, Could not detect the image");
      });
  } else {
    res.status(400).send("Did you send the image?");
  }
};
