
const express = require('express');
const EventManager = require('../services/event_manager');
const TripManager = require('../services/trip_manager');
const UserManager = require('../services/user_manager');
const router = express.Router();

//Event Router
const eventManager = new EventManager();
router.get('/events', async (req, res, next) => {
    res.send(await eventManager.getEventList(req, res))
    next()
});
router.post('/events', async (req, res, next) => {
    const renderedEvents = await eventManager.createEvent(req.body.event)
    res.status(200).json(renderedEvents)
})
router.put('/events/:id', async (req, res) => {
    await eventManager.updateEvent(req.body.id, req.body.event)
    res.status(200).json(req.body.event)
});
router.delete('/events/:id', async (req, res) => {
    await eventManager.deleteEvent(req.body.id)
    res.status(200).json(req.body.id)
});

//Trip Router
const tripManager = new TripManager();
router.get('/trips', async (req, res, next) => {
    res.send(await tripManager.getTripList(req, res))
    next()
});
router.post('/trips', async (req, res, next) => {
    const renderedTrips = await tripManager.createTrip(req.body.trip)
    res.status(200).json(renderedTrips)
});
router.put('/trips/:id', async (req, res) => {
    await tripManager.updateTrip(req.body.id, req.body.trip)
    res.status(200).json(req.body.trip)
});
router.delete('/trips/:id', async (req, res) => {
    await tripManager.deleteTrip(req.body.id)
    res.status(200).json(req.body.id)
});

//User Router
const userManager = new UserManager();
router.get('/users', async (req, res, next) => {
    res.send(await userManager.getUserList(req, res))
    next()
});
router.post('/users', async (req, res, next) => {
    const renderedUsers = await userManager.createUser(req.body.user)
    res.status(200).json(renderedUsers)
});
router.put('/users/:id', async (req, res) => {
    await userManager.updateUser(req.body.id, req.body.user)
    res.status(200).json(req.body.user)
});
router.delete('/users/:id', async (req, res) => {
    await userManager.deleteUser(req.body.id)
    res.status(200).json(req.body.id)
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Healthy'
    });
});


module.exports = router;