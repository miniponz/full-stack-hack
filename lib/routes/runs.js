const { Router } = require('express');
const Run = require('../models/Run');

//will need middleware to calculate pace from time/distance
module.exports = Router()
  .post('/', (req, res, next) => {
    const newRun = {
      user: req.body.user,
      runTitle: req.body.runTitle,
      date: req.body.date,
      distance: req.body.distance || req.body.time / req.body.distance,
      time: req.body.time || req.body.distance * req.body.pace,
      pace: req.body.pace || req.body.distance / req.body.time,
      notes: req.body.notes
    };
    Run
      .create(newRun)
      .then(run => res.send(run))
      .catch(next);
  });
