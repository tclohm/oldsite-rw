# Migration `20200403205130-create-posts`

This migration has been generated at 4/3/2020, 8:51:30 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "quaint"."Post" (
    "body" TEXT NOT NULL DEFAULT '' ,
    "createdAt" DATE NOT NULL DEFAULT '1970-01-01 00:00:00' ,
    "id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL DEFAULT '' 
) 
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200403205130-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+model Post {
+	id			Int @id @default(autoincrement())
+	title		String
+	body		String
+	createdAt	DateTime @default(now())
+}
```

