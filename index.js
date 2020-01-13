const express = require("express");
const mongoose = require("mongoose");
const {
  getAllEvents,
  saveEvent,
  getEventById,
  deleteEvent,
  deleteAllEvents
} = require("./controllers/events.controller");
const {
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USERNAME
} = require("./config/db-env");

// PORT const
const PORT = process.env.PORT || 3000;

// init app
const app = express();

// bodyParser middelware
app.use(express.json());

// get all events route
app.get("/events", getAllEvents);

// save an event route
app.post("/events", saveEvent);

// get event by id route
app.get("/events/:id", getEventById);

// delete event route
app.delete("/events/:id", deleteEvent);

// delete all events route
app.delete("/events", deleteAllEvents);

// connect to db
mongoose
  .connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to DB ...");
    // listen server
    app.listen(PORT, () => {
      console.log(`server is listening on PORT ${PORT} ...`);
    });
  })
  .catch(err => {
    console.log(err);
  });
