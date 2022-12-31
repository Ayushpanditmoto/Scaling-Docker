const express = require("express");
const app = express();
const port = 3000;
const os = require("os");
const hostname = os.hostname();

app.use("/", async (req, res) => {
  console.log(`Request received from ${req.ip} and served by ${hostname}`);
  res.json({
    message: `Request received from ${req.ip} and served by ${hostname}`,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
