const { Schema, model } = require("mongoose");
const destination = require("./destination");

const setDate = () => {
  let date = new Date();
  return date.setFullYear(date.getFullYear() + 1);
};

const flightSchema = new Schema({
  airline: { type: String, enum: ["American", "Southwest", "United"] },
  flightNo: { type: Number, min: 10, max: 9999, required: true },
  departs: { type: Date, default: setDate() },
  airport: {
    type: String,
    enum: ["AUS", "DAL", "LAX", "SAN", "SEA"],
    default: "SAN",
  },
  destinations: [destination],
});

const Flight = model("flights", flightSchema);
module.exports = Flight;
