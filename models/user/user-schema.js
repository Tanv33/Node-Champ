const mongoose = require("mongoose");
const SchemaType = require("../../types");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: SchemaType.TypeArray,
      // required: true,
    },
    email: {
      type: SchemaType.TypeString,
      unique: true,
      required: true,
    },
    password: {
      type: SchemaType.TypeString,
    },
    telephone: {
      type: SchemaType.TypeNumber,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
