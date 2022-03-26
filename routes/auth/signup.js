const Joi = require("joi");

const apiSchema = Joi.object({
  fullName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const signUpUser = async (req, res) => {
  try {
    await apiSchema.validateAsync(req.body);
    const { fullName, email, password } = req.body;
    return res.status(200).send({
      status: 200,
      fullName,
      email,
      password,
      message: "You are accessing Sign Up API",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ status: 400, message: e.message });
  }
};
module.exports = signUpUser;
