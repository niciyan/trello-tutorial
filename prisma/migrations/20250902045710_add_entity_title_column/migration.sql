/*
  Warnings:

  - Added the required column `entityTitle` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auditlog` ADD COLUMN `entityTitle` VARCHAR(191) NOT NULL;
