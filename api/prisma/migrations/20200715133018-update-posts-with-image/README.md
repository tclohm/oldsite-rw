# Migration `20200715133018-update-posts-with-image`

This migration has been generated at 7/15/2020, 1:30:18 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL DEFAULT '' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL DEFAULT '' ,
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
migration 20200714100855-create-contacts..20200715133018-update-posts-with-image
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
@@ -11,8 +11,9 @@
 model Post {
 	id			Int @id @default(autoincrement())
 	title		String
 	body		String
+	image		String
 	createdAt	DateTime @default(now())
 }
 model Contact {
```


