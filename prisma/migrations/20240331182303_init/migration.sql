/*
  Warnings:

  - Added the required column `categoryName` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "categoryName" TEXT NOT NULL;
