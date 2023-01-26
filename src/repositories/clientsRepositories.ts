import { clients } from "@prisma/client";
import prisma from "../database/database.js";
import { insertClient } from "../protocols/Clients.js";

export async function postClientRepo(client: insertClient): Promise<void> {
  await prisma.clients.create({
    data: client,
  });
}

export async function getClientsRepo(): Promise<clients[] | boolean> {
  const clients = await prisma.clients.findMany();
  if (clients.length === 0) return false;
  return clients;
}

export async function getClientByIdRepo(
  id: number
): Promise<clients | boolean> {
  const client = await prisma.clients.findUnique({
    where: {
      id,
    },
  });
  if (!client) return false;
  return client;
}

export async function deleteClientRepo(id: number): Promise<void> {
  await prisma.clients.delete({
    where: {
      id,
    },
  });
}
