# Migration `20200714100855-create-contacts`

This migration has been generated at 7/14/2020, 10:08:55 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL DEFAULT '' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT '' 
) 

CREATE TABLE "quaint"."Contact" (
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "email" TEXT NOT NULL DEFAULT '' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200403205130-create-posts..20200714100855-create-contacts
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -12,5 +12,11 @@
 	id			Int @id @default(autoincrement())
 	title		String
 	body		String
 	createdAt	DateTime @default(now())
+}
+
+model Contact {
+	id			Int @id @default(autoincrement())
+	email		String
+	createdAt	DateTime @default(now())
 }
```


