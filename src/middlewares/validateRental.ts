import { Response, Request, NextFunction } from "express";
import { receivedRental } from "../protocols/Rental.js";
import { getClientByIdRepo } from "../repositories/clientsRepositories.js";
import { getHouseByIdRepo } from "../repositories/housesRepositories.js";

export async function validateRental(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | Response> {
  const rental = req.body as receivedRental;

  try {
    const isValidClient = await getClientByIdRepo(rental.clientId);
    if (!isValidClient)
      return res.status(404).send("client Id not found in the database");
    const isValidHouse = await getHouseByIdRepo(rental.houseId);
    if (!isValidHouse)
      return res.status(404).send("house Id not found in the database");
    next();
  } catch (error) {
    return res.status(400).send(error);
  }
}
