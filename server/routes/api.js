const express = require("express");
const TripdataManager = require("../services/tripdata_manager");
const PlacesManager = require("../services/places_manager");
const router = express.Router();

//Event Router
const tripdataManager = new TripdataManager();

router.get("/events", async (req, res, next) => {
  res.send(await tripdataManager.getEventList());
  next();
});

router.post("/events", async (req, res, next) => {
  const renderedEvents = await tripdataManager.createEvent(req.body.event);
  res.status(200).json(renderedEvents);
});
router.put("/events/:id", async (req, res) => {
  await tripdataManager.updateEvent(req.params.id, req.body.event);
  res.status(200).json(req.body.event);
});
router.delete("/events/:id", async (req, res) => {
  await tripdataManager.deleteEvent(req.params.id);
  res.status(200).json(req.params.id);
});

//Trip Router
router.get("/trips", async (req, res, next) => {
  res.send(await tripdataManager.getTripList());
  next();
});

router.post("/trips", async (req, res, next) => {
  const renderedTrips = await tripdataManager.createTrip(req.body.trip);
  res.status(200).json(renderedTrips);
});
router.put("/trips/:id", async (req, res) => {
  await tripdataManager.updateTrip(req.params.id, req.body.trip);
  res.status(200).json(req.body.trip);
});
router.delete("/trips/:id", async (req, res) => {
  await tripdataManager.deleteTrip(req.params.id);
  res.status(200).json(req.params.id);
});

//User Router
router.get("/users", async (req, res, next) => {
  res.send(await tripdataManager.getUserList());
  next();
});

router.get("/users/:id/trips", async (req, res, next) => {
  res.send(await tripdataManager.getTripsWithEvents(req.params.id));
  next();
});
router.post("/users", async (req, res, next) => {
  const renderedUsers = await tripdataManager.createUser(req.body.user);
  res.status(200).json(renderedUsers);
});
router.put("/users/:id", async (req, res) => {
  await tripdataManager.updateUser(req.params.id, req.body.user);
  res.status(200).json(req.params.user);
});
router.delete("/users/:id", async (req, res) => {
  await tripdataManager.deleteUser(req.params.id);
  res.status(200).json(req.params.id);
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Healthy",
  });
});

//Places Router
const placesManager = new PlacesManager();

router.get("/places/:query", async (req, res, next) => {
  res.send(await placesManager.getPlaces(req.params.query));
  next();
});

router.get("/place-details/:placeId", async (req, res, next) => {
  res.send(await placesManager.getPlaceDetails(req.params.placeId));
  next();
});

module.exports = router;
