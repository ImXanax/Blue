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

  static async createUser(userId,guildId){
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    const isUser = await levelSchema.findOne({})
  }
}

module.exports = Levels;
