/*
  Warnings:

  - Changed the type of `open_time` on the `amenities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `close_time` on the `amenities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `start_time` on the `bookings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `end_time` on the `bookings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "amenities" DROP COLUMN "open_time",
ADD COLUMN     "open_time" INTEGER NOT NULL,
DROP COLUMN "close_time",
ADD COLUMN     "close_time" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "start_time",
ADD COLUMN     "start_time" INTEGER NOT NULL,
DROP COLUMN "end_time",
ADD COLUMN     "end_time" INTEGER NOT NULL;
