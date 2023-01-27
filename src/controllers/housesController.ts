import { Request, Response } from "express";
import { insertHouse } from "../protocols/Houses.js";
import {
  deleteHouseRepo,
  getHouseByIdRepo,
  getHousesRepo,
  postHouseRepo,
  putAcRepo,
  putPoolRepo,
} from "../repositories/housesRepositories.js";
import { housesSchema } from "../schemas/housesSchema.js";

export async function postHouse(
  req: Request,
  res: Response
): Promise<Response> {
  const house = req.body as insertHouse;

  const { error } = housesSchema.validate(house, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  try {
    await postHouseRepo(house);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function getHouses(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const houses = await getHousesRepo();
    if (!houses) return res.status(404).send("No houses found");
    return res.send(houses).status(200);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}

export async function getHousesById(
  req: Request,
  res: Response
): Promise<Response> {
  const { houseId } = req.params;
  try {
    const house = await getHouseByIdRepo(Number(houseId));
    if (!house) return res.status(404).send("No house found for this id");
    return res.send(house).status(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function deleteHouse(
  req: Request,
  res: Response
): Promise<Response> {
  const { houseId } = req.params;

  try {
    const house = await getHouseByIdRepo(Number(houseId));
    if (!house) return res.status(404).send("No house found for this id");
    await deleteHouseRepo(Number(houseId));
    return res.sendStatus(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function putAc(req: Request, res: Response): Promise<Response> {
  const { houseId } = req.params;

  try {
    const house = await getHouseByIdRepo(Number(houseId));
    if (!house) return res.status(404).send("No house found for this id");
    await putAcRepo(Number(houseId));
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
}

export async function putPool(req: Request, res: Response): Promise<Response> {
  const { houseId } = req.params;

  try {
    const house = await getHouseByIdRepo(Number(houseId));
    if (!house) return res.status(404).send("No house found for this id");
    await putPoolRepo(Number(houseId));
    return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(400);
  }
}
