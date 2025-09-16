-- CreateTable
CREATE TABLE "contact_submissions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "topic" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "calculatorContext" TEXT,
    "consent" BOOLEAN NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
