import Joi from "joi";

const userSchema = Joi.object({
  user_id: Joi.number().required(),
  user_name: Joi.string().min(3).required(),
  user_contact: Joi.number().min(10).required(),
  user_email: Joi.string().email().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      status: 400,
      messsage: error.details[0].message,
    });
  next();
};

export default validateUser;
