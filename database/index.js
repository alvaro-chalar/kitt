const mongoose = require("mongoose");

const environ = process.env.NODE_ENV || "development";
const environConfig = require("../environments")[environ];

const options = { userNewUrlParser: true, useUnifiedTopology: true };
console.log(environConfig.db);

mongoose.Promise = global.Promise;
mongoose.connect(environConfig.db, options);
