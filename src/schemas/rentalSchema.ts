import Joi from "joi";

export const rentalSchema = Joi.object({
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  dailyPrice: Joi.number().required(),
  totalPrice: Joi.number(),
  isPaid: Joi.bool(),
  downPayment: Joi.number().required(),
});
