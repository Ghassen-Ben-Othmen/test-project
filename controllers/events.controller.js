const Event = require("../models/event.model");

let getAllEvents = (req, res, next) => {
  Event.find()
    .exec()
    .then(docs => {
      return res.status(200).json({
        Events: docs
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        err
      });
    });
};

let saveEvent = (req, res, next) => {
  let event = new Event(req.body.event);

  event
    .save()
    .then(doc => {
      return res.status(201).json({
        event: doc
      });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        err
      });
    });
};

let getEventById = (req, res, next) => {
  let id = req.params.id;

  Event.findById(id)
    .exec()
    .then(doc => {
      let statusCode = doc ? 200 : 400;
      let response = doc
        ? { event: doc, success: true }
        : { event: null, success: false };

      return res.status(statusCode).json(response);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({
        err
      });
    });
};

module.exports = {
  getAllEvents,
  saveEvent
};
