const mongoose = require("mongoose");
const { DB_USER, DB_NAME ,DB_PASS} = require("..");

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.vnpfs.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
); 

module.exports = mongoose;
