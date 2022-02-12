-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "unit_number" INTEGER NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "building_code" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "building" (
    "id" SERIAL NOT NULL,
    "building_code" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "building_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "amenity" (
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "image" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "open_time" TIMESTAMP(3) NOT NULL,
    "close_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "amenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "booking" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "amenity_id" INTEGER NOT NULL,
    "number_of_ppl" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "building_building_code_key" ON "building"("building_code");

-- AddForeignKey
ALTER TABLE "amenity" ADD CONSTRAINT "amenity_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking" ADD CONSTRAINT "booking_amenity_id_fkey" FOREIGN KEY ("amenity_id") REFERENCES "amenity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
