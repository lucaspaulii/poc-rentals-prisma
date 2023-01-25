import { QueryResult } from "pg";
import { db } from "../database/database.js";
import { Rental } from "../protocols/Rental.js";

export async function getRentalsRepo(): Promise<Rental[] | boolean> {
  const rentals: QueryResult<Rental> = await db.query(`SELECT * FROM rentals`);
  if (rentals.rows.length === 0) return false;
  const rentalsObj = rentals.rows;
  return rentalsObj;
}

export async function getRentalByIdRepo(id: number): Promise<Rental | boolean> {
  const rental: QueryResult<Rental> = await db.query(
    `SELECT * FROM rentals WHERE id=$1`,
    [id]
  );
  if (rental.rows.length === 0) return false;
  const rentalObj = rental.rows[0];
  return rentalObj;
}

export async function deleteRentalRepo(id: number): Promise<void> {
  await db.query(`DELETE FROM rentals WHERE id=$1`, [id]);
}

export async function postRentalRepo(rental: Rental): Promise<void> {
  await db.query(
    `INSERT INTO rentals(startdate, enddate, dailyprice, totalprice, ispaid, downpayment) VALUES ($1, $2, $3, $4, $5, $6)`,
    [
      rental.startDate,
      rental.endDate,
      rental.dailyPrice,
      rental.totalPrice,
      false,
      rental.downPayment,
    ]
  );
}

export async function paidRentalRepo(id: number): Promise<void> {
  await db.query(`UPDATE rentals SET ispaid = true WHERE id=$1`, [id]);
}
