-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Meal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imgSrc" TEXT NOT NULL,
    "imgAlt" TEXT NOT NULL,
    "imgWidth" INTEGER NOT NULL,
    "imgHeight" INTEGER NOT NULL,
    "urlName" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
