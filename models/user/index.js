const mongoose = require("mongoose");
const userSchema = require("./user-schema");

const user = mongoose.model("user", userSchema);

module.exports = user;
