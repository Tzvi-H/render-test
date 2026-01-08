const mongoose = require("mongoose");
const { MONGODB_URI } = require("./utils/config");
const Note = require("./models/note");

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI, { family: 4 });

const note1 = new Note({
  content: "HTML is easy",
  important: true,
});

const note2 = new Note({
  content: "Css is easy",
  important: false,
});

note1.save().then(() => {
  note2.save().then(() => {
    mongoose.connection.close();
  });
});
