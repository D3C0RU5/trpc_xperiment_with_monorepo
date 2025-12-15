import { Kysely, SqliteDialect } from "kysely";
import SQLite from "better-sqlite3";
import { Database } from "./src/infra/db/kysely";

const db = new Kysely<Database>({
  dialect: new SqliteDialect({
    database: new SQLite("database.db"),
  }),
});

export default {
  db,
  migrationsPath: "./migrations",
};
