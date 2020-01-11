const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: { type: mongoose.Schema.Types.String, required: true },
  address: { type: mongoose.Schema.Types.String, required: true },
  SDate: { type: mongoose.Schema.Types.Date, required: true },
  EDate: { type: mongoose.Schema.Types.Date, required: true }
});

module.exports = EventModel = mongoose.model("Event", EventSchema);
