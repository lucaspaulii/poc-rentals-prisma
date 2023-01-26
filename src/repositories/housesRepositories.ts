import { houses } from "@prisma/client";
import prisma from "../database/database.js";
import { insertHouse } from "../protocols/Houses.js";

export async function postHouseRepo(house: insertHouse): Promise<void> {
  await prisma.houses.create({
    data: house,
  });
}

export async function getHousesRepo(): Promise<houses[] | boolean> {
  const houses = await prisma.houses.findMany();
  if (houses.length === 0) return false;
  return houses;
}

export async function getHouseByIdRepo(id: number): Promise<houses | boolean> {
  const house = await prisma.houses.findUnique({
    where: {
      id,
    },
  });
  if (!house) return false;
  return house;
}

export async function deleteHouseRepo(id: number): Promise<void> {
  await prisma.houses.delete({
    where: {
      id,
    },
  });
}

export async function putAcRepo(id: number): Promise<void> {
  await prisma.houses.update({
    where: {
      id,
    },
    data: {
      hasAc: true,
    },
  });
}

export async function putPoolRepo(id: number): Promise<void> {
  await prisma.houses.update({
    where: {
      id,
    },
    data: {
      hasPool: true,
    },
  });
}
