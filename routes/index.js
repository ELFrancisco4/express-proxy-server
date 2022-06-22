const url = require('url');
const express = require("express");
const router = express.Router();
const needle = require('needle')


// Define Environment Variables
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;

router.get("/", async(req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query
    })
    const apiRes = await needle('get',`${API_BASE_URL}&${params}`);
    res.status(200).json(apiRes.body);
  } catch (error) {
    res.status(500).json(error)
    
  }
});


module.exports = router;
