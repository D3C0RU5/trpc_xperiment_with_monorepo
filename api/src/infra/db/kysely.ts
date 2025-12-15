import { ColumnType, Insertable, Selectable, Updateable } from "kysely";

export interface Database {
  person: PersonTable;
}

export interface PersonTable {
  id: string;
  full_name: string;
  acronym: string;
  created_at: ColumnType<Date, string, never>;
}

export type Person = Selectable<PersonTable>;
export type NewPerson = Insertable<PersonTable>;
export type PersonUpdate = Updateable<PersonTable>;
