const { Car, Owner } = require("../models");

const ActivitiesController = {
  async buy(req, res) {
    try {
      const car = await Car.findById(req.body.car_id);
      const owner = await Owner.findById(req.body.owner_id);

      if (!car.owner) {
        await Car.updateOne({ _id: req.body.car_id }, { owner: owner._id });

        owner.cars.push(car);

        await owner.save();

        console.log(`${car.make}[${car.model}] has a new Owner!`);

        res.status(200).json(car.populate("owner"));
      } else {
        res
          .status(403)
          .json({ car: `${car.make}[${car.model}] already has an Owner!` });
      }
    } catch (err) {
      res.status(404).json({ car: "Not Found" });
    }
  },
};

module.exports = ActivitiesController;
