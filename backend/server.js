const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

dotenv.config({
  path: "backend/config/config.env",
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`server is running port ${PORT}`);
  }
});
