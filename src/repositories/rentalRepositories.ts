import { rentals } from "@prisma/client";
import prisma from "../database/database.js";
import { insertRental } from "../protocols/Rental.js";

export async function getRentalsRepo(): Promise<rentals[] | boolean> {
  const rentals = await prisma.rentals.findMany();
  if (rentals.length === 0) return false;
  return rentals;
}

export async function getRentalByIdRepo(
  id: number
): Promise<rentals | boolean> {
  const rental = await prisma.rentals.findUnique({
    where: {
      id,
    },
  });
  if (!rental) return false;
  return rental;
}

export async function deleteRentalRepo(id: number): Promise<void> {
  await prisma.rentals.delete({
    where: {
      id,
    },
  });
}

export async function postRentalRepo(rental: insertRental): Promise<void> {
  await prisma.rentals.create({
    data: rental,
  });
}

export async function paidRentalRepo(id: number): Promise<void> {
  await prisma.rentals.update({
    where: {
      id,
    },
    data: {
      ispaid: true,
    },
  });
}
