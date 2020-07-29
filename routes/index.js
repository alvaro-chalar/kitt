const express = require("express");

const router = express.Router();

const {
  ActivitiesController,
  CarsController,
  HomeController,
  OwnersController,
} = require("./controllers");

module.exports = (app) => {
  router.post("/activities/buy", ActivitiesController.buy);

  router.get("/cars", CarsController.index);
  router.get("/cars/:id", CarsController.show);
  router.post("/cars", CarsController.create);
  router.put("/cars/:id", CarsController.update);
  router.delete("/cars/:id", CarsController.destroy);

  router.get("/", HomeController.index);

  router.get("/owners", OwnersController.index);
  router.get("/owners/:id", OwnersController.index);
  router.post("/owners", OwnersController.create);
  router.put("/owners", OwnersController.update);
  router.delete("/owners/:id", OwnersController.destroy);

  app.use("/api", router);
};
