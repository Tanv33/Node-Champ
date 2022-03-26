const Models = require("../models");

const find = async (model, searchQuery) =>
  await Models[model].find(searchQuery);

const findOne = async (model, searchQuery) =>
  await Models[model].findOne(searchQuery);

const insertNewDocument = async (model, obj) => {
  const data = new Models[model](obj);
  return await data.save();
};

const updateDocument = async (model, searchQuery, setQuery) =>
  await Models[model].updateOne(searchQuery, { $set: setQuery });

const deleteDocument = async (model, delteQuery) =>
  await Models[model].deleteOne(delteQuery);

module.exports = {
  find,
  findOne,
  insertNewDocument,
  updateDocument,
  deleteDocument,
};
