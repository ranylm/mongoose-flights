const express = require("express");
const Destination = require("../models/destination");
const router = express.Router();
const Flight = require("../models/flight");

router.use(express.urlencoded({ extended: false }));

router.get("/", async (req, res) => {
  try {
    const flight = await Flight.find({});
    console.log(flight);
    res.render("flights/Index", {
      flight: flight,
      sort: req.query.sort,
    });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/new/", async (req, res) => {
  try {
    res.render("flights/New");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/show/", async (req, res) => {
  try {
    const flight = await Flight.findById(req.query.id);
    res.render("flights/Show", { flight: flight });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const { airline, flightNo, departs, airport } = req.body;
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const flight = await Flight.create({
      airline: airline,
      flightNo: flightNo,
      departs: departs || date,
      airport: airport,
      departures: [],
    });
    res.redirect("./");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/addDestination/:id/", async (req, res) => {
  if (!req.body.airport) {
    return res.redirect(`/flights/show/?id=${req.params.id}`);
  }
  try {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    const flight = await Flight.findByIdAndUpdate(req.params.id, {
      $push: {
        destinations: {
          airport: req.body.airport,
          arrival: req.body.arrival || date,
        },
      },
    });
    res.redirect(`/flights/show/?id=${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
