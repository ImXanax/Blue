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

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   */
  static async createUser(userId,guildId){
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    const isUser = await levelSchema.findOne({userID:userId , guildID: guildId})
    if(isUser) return false

    const newUser = new levelSchema({
        userID: userId,
        guildID: guildId,
    })

    await newUser.save().catch(e => console.error(`ERR IN CREATING USER: ${e}`))
    return newUser
  }
}

module.exports = Levels;
