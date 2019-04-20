var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  id: {
    type: String
  },
  volumeInfo: {
    title: {
      type: String
    },
    authors: [{
      type: String
    }],
    description: {
      type: String
    },
    imageLinks: {
      thumbnail: {
        type: String
      }
    },
    previewLink: {
      type: String
    }
  }
});
var Book = mongoose.model("Book", BookSchema);

module.exports = Book;