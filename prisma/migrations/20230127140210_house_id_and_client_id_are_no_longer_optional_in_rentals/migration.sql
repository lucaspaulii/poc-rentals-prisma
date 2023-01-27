/*
  Warnings:

  - Made the column `houseId` on table `rentals` required. This step will fail if there are existing NULL values in that column.
  - Made the column `clientId` on table `rentals` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "rentals" ALTER COLUMN "houseId" SET NOT NULL,
ALTER COLUMN "clientId" SET NOT NULL;
