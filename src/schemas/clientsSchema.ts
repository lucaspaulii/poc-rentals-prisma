import Joi, { bool } from "joi";

export const clientsSchema = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().max(30).required(),
  phone: Joi.string().max(11).required(),
});
