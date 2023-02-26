const { Tag } = require("../../db.js");

module.exports = async (req, res) => {
  try {
    let response = await Tag.findAll();
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};