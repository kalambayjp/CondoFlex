/*
  Warnings:

  - You are about to drop the column `building_code` on the `buildings` table. All the data in the column will be lost.
  - You are about to drop the column `building_code` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "buildings_building_code_key";

-- AlterTable
ALTER TABLE "buildings" DROP COLUMN "building_code";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "building_code",
ADD COLUMN     "building_id" INTEGER NOT NULL DEFAULT 2000;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "buildings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
