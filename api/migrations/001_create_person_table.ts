import { Kysely, sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("person")
    .addColumn("id", "text", (col) => col.primaryKey().notNull())
    .addColumn("full_name", "text", (col) => col.notNull())
    .addColumn("acronym", "text", (col) => col.notNull())
    .addColumn("created_at", "text", (col) =>
      col.notNull().defaultTo(sql`CURRENT_TIMESTAMP`)
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("person").execute();
}
