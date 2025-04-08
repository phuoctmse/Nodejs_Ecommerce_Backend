const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

//init middleware
app.use(morgan("dev")); //use morgan for logging
app.use(helmet()); //use helmet for security
app.use(compression())  //use compression for gzip compression

// init db

//init routes
app.get("/", (req, res) => {
  const strCompress = "Hello World";
  return res.status(200).json({
    message: "Welcome to the API",
    metadata: strCompress.repeat(1000000), 
  });
});

//handle error

module.exports = app;
