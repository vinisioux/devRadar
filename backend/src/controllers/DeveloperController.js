const Developer = require("../models/Developer");
const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Developer.findOne({ github_username });

    if (dev) {
      return res.json(dev);
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = response.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Developer.create({
      name,
      github_username,
      bio,
      avatar_url,
      techs: techsArray,
      location
    });

    return res.status(200).json(dev);
  },

  async index(req, res) {
    const devs = await Developer.find();

    return res.status(200).json(devs);
  }
};
