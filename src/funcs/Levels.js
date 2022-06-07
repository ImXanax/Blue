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
  static async createUser(userId, guildId) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    const isUser = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (isUser) return false;

    const newUser = new levelSchema({
      userID: userId,
      guildID: guildId,
    });

    await newUser
      .save()
      .catch((e) => console.error(`ERR IN CREATING USER: ${e}`));
    return newUser;
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   */
  static async deleteUser(userId, guildId) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    //user
    const u = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (!u) return false;

    await levelSchema
      .findAndDeleteOne({ userID: userId, guildID: guildId })
      .catch((e) => console.error(`ERR IN DELETING USER: ${e}`));

    return u;
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   * @param {number} [xp] - amount of xp to increase.
   */
  static async addXp(userId, guildId, xp) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    if (!xp || xp == 0 || isNaN(parseInt(xp)))
      throw new TypeError(`invalid XP amount`);

    const user = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (!user) {
      const newUser = new levelSchema({
        userID: userId,
        guildID: guildId,
        xp: xp,
        level: Math.floor(0.1 * Math.sqrt(xp)),
      });
      await newUser
        .save()
        .catch((e) => console.error(`ERR IN SAVING NEWUSER ${e}`));
      return Math.floor(0.1 * Math.sqrt(xp)) > 0;
    }

    user.xp += parseInt(xp, 10);
    user.level += Math.floor(0.1 * Math.sqrt(user.xp));
    user.lastUpdated = new Date();
    await user.save().catch((e) => console.error(`ERR IN ADDING XP: ${e}`));
    return Math.floor(0.1 * Math.sqrt((user.xp -= xp)) < user.level);
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   * @param {number} [levels] - the amount of levels to add.
   */
  static async addLevel(userId, guildId, levels) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    if (!levels) throw new TypeError(`levels wasn't provided`);

    const user = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (!user) return false;

    user.level += parseInt(level, 10);
    user.xp += user.level * user.level * 100;
    user.lastUpdated = new Date();

    user.save().catch((e) => console.error(`ERR IN ADDING LEVEL: ${e}`));
    return user;
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   * @param {number} [xp] - the amount of xp to be set.
   */
  static async setXp(userId, guildId, xp) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    if (!xp || xp == 0 || isNaN(parseInt(xp)))
      throw new TypeError(`invalid XP amount`);
    const user = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (!user) return false;

    user.xp = xp;
    user.level = Math.floor(0.1 * Math.sqrt(xp));
    user.lastUpdated = new Date();

    user.save().catch((e) => console.error(`ERR IN SETTING XP: ${e}`));
    return user;
  }
  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   * @param {number} [levels] - the amount of levels to be set.
   */
  static async setLevel(userId, guildId, levels) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    if (!levels) throw new TypeError(`levels wasn't provided`);

    const user = levelSchema.findOne({ userID: userId, guildID: guildId });
    if (!user) return false;

    user.level = levels;
    user.xp = user.level * user.level * 100;
    user.lastUpdated = new Date();

    user.save().catch((e) => console.error(`ERR IN SETTING LEVEL: ${e}`));
    return user;
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   */
  static async fetch(userId, guildId, position = false) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);

    const user = levelSchema.findOne({ userID: userId, guildID: guildId });

    if (!user) return false;
    if (position === true) {
      //leaderboard
      const lb = await levelSchema
        .find({
          guildID: guildId,
        })
        .sort([["xp", "descending"]])
        .exec();
      user.position = lb.findIndex((i) => i.userID === userId) + 1;
    }
    user.cleanXp = user.xp - this.xpFor(user.level);
    user.cleanNextLevelXp = this.xpFor(user.level + 1) - this.xpFor(user.level);
    return user;
  }

  /**
   * @param {string} [userId] - the user's Id.
   * @param {string} [guildId] - the user's server Id.
   * @param {number} [xp] - amount of xp you want subtracted.
   */
  static async subXp(userId, guildId, xp) {
    if (!userId) throw new TypeError(`userId wasn't provided`);
    if (!guildId) throw new TypeError(`guildId wasn't provided`);
    if (!xp || xp == 0 || isNaN(parseInt(xp)))
      throw new TypeError(`invalid XP amount`);

    const user = await levelSchema.findOne({
      userID: userId,
      guildID: guildId,
    });
    if (!user) return false;
    user.xp -= xp;
    user.level = Math.floor(0.1 * Math.sqrt(user.xp));
    user.lastUpdated = new Date();
    user.save().catch((e) => console.error(`ERR in subtracting xp: ${e}`));
    return user;
  }

  
}

module.exports = Levels;
