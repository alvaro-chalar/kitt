const express = require("express");
const bodyParser = require("body-parser");

const environ = process.env.NODE_ENV || "development";
const environConfig = require("./environments")[environ];

const app = express();

require("./database/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes/index")(app);

app.use((req, res) => {
  res.send("<h1>File not found</h1>");
});

app.listen(environConfig.port, () => {
  console.log(`Express server listening on port ${environConfig.port}`);
});
