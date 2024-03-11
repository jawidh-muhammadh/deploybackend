const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("server is up s and running");
});

app.get("/", (req, res) => {
  res.send("Hi this is a hit");
});

app.post("/postme", (req, res) => {
  console.log("got a hit on postme");
  res.send("hello this is post");
});
