const mongoose = require("mongoose");

const carModel = mongoose.Schema(
  {
    make: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    registration: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Owner",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Car", carModel);
