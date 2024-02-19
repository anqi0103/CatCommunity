-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "image_url" TEXT,
    "breed" TEXT,
    "name" TEXT,
    "age" TEXT,
    "location" TEXT,
    "status" TEXT,
    "information" TEXT,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);
