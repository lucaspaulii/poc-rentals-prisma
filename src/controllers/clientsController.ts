import { Request, Response } from "express";
import { insertClient } from "../protocols/Clients.js";
import {
    deleteClientRepo,
  getClientByIdRepo,
  getClientsRepo,
  postClientRepo,
} from "../repositories/clientsRepositories.js";
import { clientsSchema } from "../schemas/clientsSchema.js";

export async function postClient(
  req: Request,
  res: Response
): Promise<Response> {
  const client = req.body as insertClient;

  const { error } = clientsSchema.validate(client, {
    abortEarly: false,
  });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  try {
    await postClientRepo(client);
    return res.sendStatus(201);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function getClients(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const clients = await getClientsRepo();
    if (!clients) return res.status(404).send("No clients found");
    return res.send(clients).status(200);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
}

export async function getClientById(
  req: Request,
  res: Response
): Promise<Response> {
  const { clientId } = req.params;
  try {
    const client = await getClientByIdRepo(Number(clientId));
    if (!client) return res.status(404).send("No client found for this id");
    return res.send(client).status(200);
  } catch (error) {
    return res.status(400).send(error);
  }
}

export async function deleteClient(req: Request, res: Response) : Promise<Response> {
    const { clientId } = req.params;
  
    try {
      await deleteClientRepo(Number(clientId));
      return res.sendStatus(200);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
