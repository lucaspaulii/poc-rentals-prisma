import Joi, { bool } from "joi";

export const housesSchema = Joi.object({
  address: Joi.string().max(30).required(),
  district: Joi.string().max(30).required(),
  city: Joi.string().max(30).required(),
  hasAc: Joi.bool().required(),
  hasPool: Joi.bool().required(),
});
