/*
  Warnings:
<<<<<<< HEAD
  - You are about to drop the column `close_time` on the `amenities` table. All the data in the column will be lost.
  - You are about to drop the column `open_time` on the `amenities` table. All the data in the column will be lost.
=======

  - You are about to drop the column `close_time` on the `amenities` table. All the data in the column will be lost.
  - You are about to drop the column `open_time` on the `amenities` table. All the data in the column will be lost.

>>>>>>> main
*/
-- AlterTable
ALTER TABLE "amenities" DROP COLUMN "close_time",
DROP COLUMN "open_time";
