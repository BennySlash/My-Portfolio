const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// router.get("/rockpaperscissors", (req, res) => {
//   res.sendFile(__dirname + "/portfolio-item.html");
// });

// app.listen(3000, () => {
//   console.log("server started");
// });

app.use("/", router);

module.exports.handler = serverless(app);
