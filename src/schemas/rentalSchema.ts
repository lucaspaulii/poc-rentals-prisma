import Joi from "joi";

export const rentalSchema = Joi.object({
  startdate: Joi.date().required(),
  enddate: Joi.date().required(),
  dailyprice: Joi.number().required(),
  totalprice: Joi.number(),
  ispaid: Joi.bool(),
  downpayment: Joi.number().required(),
  houseId: Joi.number().required(),
  clientId: Joi.number().required(),
});
