
const express = require('express');
const TripdataManager = require('../services/tripdata_manager');
const router = express.Router();

//Event Router
const tripdataManager = new TripdataManager();

router.get('/events', async (req, res, next) => {
    res.send(await tripdataManager.getEventList());
    next()
});

router.post('/events', async (req, res, next) => {
    const renderedEvents = await tripdataManager.createEvent(req.body.event)
    res.status(200).json(renderedEvents)
});
router.put('/events/:id', async (req, res) => {
    await tripdataManager.updateEvent(req.body.id, req.body.event)
    res.status(200).json(req.body.event)
});
router.delete('/events/:id', async (req, res) => {
    await tripdataManager.deleteEvent(req.body.id)
    res.status(200).json(req.body.id)
});


//Trip Router
router.get('/trips', async (req, res, next) => {
    res.send(await tripdataManager.getTripList())
    next()
});

router.post('/trips', async (req, res, next) => {
    const renderedTrips = await tripdataManager.createTrip(req.body.trip)
    res.status(200).json(renderedTrips)
});
router.put('/trips/:id', async (req, res) => {
    await tripdataManager.updateTrip(req.body.id, req.body.trip)
    res.status(200).json(req.body.trip)
});
router.delete('/trips/:id', async (req, res) => {
    await tripdataManager.deleteTrip(req.body.id)
    res.status(200).json(req.body.id)
});

//User Router
router.get('/users', async (req, res, next) => {
    res.send(await tripdataManager.getUserList())
    next()
});

router.get('/users/:id/trips', async (req, res, next) => {
    res.send(await tripdataManager.getTripsWithEvents(req.params.id))
    next()
});
router.post('/users', async (req, res, next) => {
    const renderedUsers = await tripdataManager.createUser(req.body.user)
    res.status(200).json(renderedUsers)
});
router.put('/users/:id', async (req, res) => {
    await tripdataManager.updateUser(req.body.id, req.body.user)
    res.status(200).json(req.body.user)
});
router.delete('/users/:id', async (req, res) => {
    await tripdataManager.deleteUser(req.body.id)
    res.status(200).json(req.body.id)
});

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Healthy'
    });
});


module.exports = router;