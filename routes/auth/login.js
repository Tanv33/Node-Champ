const login = (req, res) => {
  try {
    return res
      .status(200)
      .send({ status: 200, message: "You are accessing Login" });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
module.exports = login;
