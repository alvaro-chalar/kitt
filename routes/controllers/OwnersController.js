const { Owner } = require("../models");

const OwnersController = {
  async index(req, res) {
    const owners = await Owner.find().populate("cars");
    res.status(200).json({ owners });
  },
  async show(req, res) {
    try {
      const owner = await Owner.findById(req.params.id).populate("cars");
      res.status(302).json({ owner });
    } catch (e) {
      res.json({ owner: "No Owner was found" });
    }
  },
  async create(req, res) {
    const owner = new Owner(req.body);
    try {
      await owner.save();
      res.status(201).json({ owner });
    } catch (e) {
      res.json(e);
    }
  },
  async update(req, res) {
    try {
      await Owner.updateOne({ _id: req.params.id }, req.body);
      const updatedOwner = await Owner.findById(req.params.id).populate("cars");
      res.status(200).json({ owner: updatedOwner });
    } catch (e) {
      res.json(e);
    }
  },
  async destroy(req, res) {
    try {
      await Owner.findByIdAndRemove(req.params.id);
      res.status(200).json({});
    } catch (e) {
      res.json(e);
    }
  },
};

module.exports = OwnersController;
