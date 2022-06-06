const mongoose = require("mongoose");
const levelSchema = require("../schema/levelSchema");
var mongoURL;

class Levels {
  /**
   * @param {string} [mongoURL] - A mongoDB database URI.
   */
  static async mongoURL(url) {
    if (!url) throw new TypeError(`a url wasn't provided`);
    mongoURL = url;
    return mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
  }

  static async sayHi(msg){
      return console.log(msg)
  }
}

module.exports = Levels;
