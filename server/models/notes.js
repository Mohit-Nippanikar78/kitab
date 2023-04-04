const mongoose = require("mongoose");
const { Schema } = mongoose;

const notesschema = new mongoose.Schema({
  title: { type: "String", default: "note1" },
  text: { type: "String", default: "" },
});

const notes = mongoose.model("notes", notesschema);

module.exports = notes;
