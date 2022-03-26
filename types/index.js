const mongoose = require("mongoose");

const TypeString = mongoose.Schema.Types.String;
const TypeArray = mongoose.Schema.Types.Array;
const TypeBoolean = mongoose.Schema.Types.Boolean;
const TypeDate = mongoose.Schema.Types.Date;
const TypeNumber = mongoose.Schema.Types.Number;
const TypeDecimal = mongoose.Schema.Types.Decimal128;
const TypeObjectID = mongoose.Schema.Types.ObjectId;

const ObjectID = mongoose.Types.ObjectId;

module.exports = {
  TypeString,
  TypeArray,
  TypeBoolean,
  TypeDate,
  TypeNumber,
  TypeDecimal,
  TypeObjectID,
  ObjectID,
};
