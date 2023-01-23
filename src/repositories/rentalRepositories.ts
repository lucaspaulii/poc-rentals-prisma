import { Rental } from "../controllers/rentalsController.js";
import { db } from "../database/database.js";

export async function getRentalsRepo() {
  const rentals = await db.query(`SELECT * FROM rentals`);
  if (rentals.rows.length === 0) return false;
  const rentalsObj: Rental[] = rentals.rows;
  return rentalsObj;
}

export async function getRentalByIdRepo(id: number) {
  const rental = await db.query(`SELECT * FROM rentals WHERE id=$1`, [id]);
  if (rental.rows.length === 0) return false;
  const rentalObj: Rental = rental.rows[0];
  return rentalObj;
}

export async function deleteRentalRepo(id: number) {
  await db.query(`DELETE FROM rentals WHERE id=$1`, [id]);
}

export async function postRentalRepo(rental: Rental) {
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

export async function paidRentalRepo(id: number) {
  await db.query(`UPDATE rentals SET ispaid = true WHERE id=$1`, [id]);
}
