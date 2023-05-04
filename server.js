require("dotenv").config();
require("./config/database");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// View Engine Middleware Configure
const reactViewsEngine = require("jsx-view-engine").createEngine();
app.engine("jsx", reactViewsEngine);
app.set("view engine", "jsx");
app.set("views", "./views");

// Custom Middleware
app.use(express.urlencoded({ extended: false }));

const flightRouter = require("./routes/flights");
app.use("/flights", flightRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
