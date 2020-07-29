const mongoose = require("mongoose");

const ownerModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cars: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Owner", ownerModel);
