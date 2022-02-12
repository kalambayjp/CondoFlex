/*
  Warnings:

  - You are about to drop the column `lname` on the `users` table. All the data in the column will be lost.
  - Added the required column `last_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "lname",
ADD COLUMN     "last_name" TEXT NOT NULL;
