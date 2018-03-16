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
  //var jsonBody = JSON.parse(req.body);
  var req_result = req.body.result;
  var req_action = req_result.action;
  var output_txt = "Did not get that. Seems something went wrong.";
  if(req_action=="select.seat") {
    if(req_result.parameters.preference=="window") {
      output_txt = "Lucky you! Found a window seat. Seat No is A22W";
    } else {
      output_txt = "Sorry, there was no window seat available. Booked another seat for you. Seat No. is Z12"
    }
  }
  
  return res.json({
    fulfillmentText: output_txt,
    speech: output_txt,
    displayText: output_txt,
    source: "Hack-Wars"
  });
});

restService.listen(process.env.PORT || 8000, function() {
  console.log("Server is up and listening");
});
