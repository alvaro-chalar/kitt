const { Car } = require("../models");

const CarsController = {
  async index(req, res) {
    const cars = await Car.find().populate("owner");
    res.status(200).json({ cars });
  },
  async show(req, res) {
    try {
      const car = await Car.findById(req.params.id).populate("owner");
      res.status(302).json({ car });
    } catch (e) {
      res.json({ car: "No Car was found" });
    }
  },
  async create(req, res) {
    const car = new Car(req.body);
    try {
      await car.save();
      res.status(201).json({ car });
    } catch (e) {
      res.json(e);
    }
  },
  async update(req, res) {
    try {
      await Car.updateOne({ _id: req.params.id }, req.body);
      const updatedCar = await Car.findById(req.params.id).populate("owner");
      res.status(200).json({ car: updatedCar });
    } catch (e) {
      res.json(e);
    }
  },
  async destroy(req, res) {
    try {
      await Car.findByIdAndRemove(req.params.id);
      res.status(200).json({});
    } catch (e) {
      res.json(e);
    }
  },
};

module.exports = CarsController;
