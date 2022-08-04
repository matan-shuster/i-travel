const express = require("express");
const bodyParser = require("body-parser");
const router = require("./server/routes/api.js");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/client/build/"));
app.use("/", router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
