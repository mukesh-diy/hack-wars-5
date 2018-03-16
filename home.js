"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.get("/home", function(req, res) {
  return res.json({
	res_txt: "Welcome to hack-wars application home page"
  });
});

restService.post("/assist", function(req, res) {
  var req_result = req.body.result;
  var req_action = req_result.action;
  if(req_action=='select.seat') {
    if(req_result.parameters.preference=='window') {
      res_txt = "Lucky you! Found a window seat. Seat No is A22W";
    }
  }
  return res.json({
    res_txt: req_txt,
    displayText: req_txt,
    source: req_txt
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server is up and listening");
});
