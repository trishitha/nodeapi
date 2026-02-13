const express = require("express");
const path = require("path");

const app = express();

// serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Valentine server running on port 3000 💖");
});
