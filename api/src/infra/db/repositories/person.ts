import { PersonEntity } from "@/@core/person-entity";
import { db } from "@/main/config/database";

export class PersonRepository {
  async list(
    params: { page: number; pageSize: number } = { page: 1, pageSize: 10 }
  ): Promise<PersonEntity[]> {
    const { page, pageSize } = params;

    const allPerson = await db
      .selectFrom("person")
      .selectAll()
      .limit(pageSize)
      .offset((page - 1) * pageSize)
      .execute();

    return allPerson.map((_person) =>
      PersonEntity.load({
        id: _person.id,
        acronym: _person.acronym,
        fullName: _person.full_name,
        createdAt: new Date(_person.created_at),
      })
    );
  }

  async create(person: PersonEntity) {
    const createdAtString =
      person.createdAt instanceof Date
        ? person.createdAt.toISOString()
        : new Date(person.createdAt).toISOString();

    await db
      .insertInto("person")
      .values({
        id: person.id,
        full_name: person.fullName,
        acronym: person.acronym,
        created_at: createdAtString,
      })
      .execute();
  }
}
