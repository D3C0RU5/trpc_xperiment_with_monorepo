import { randomUUID } from "node:crypto";

export type PersonEntityProps = {
  id: string;
  fullName: string;
  acronym: string;
  createdAt: Date;
};

export type PersonEntityJSON = {
  id: string;
  fullName: string;
  acronym: string;
  createdAt: string;
};

export class PersonEntity {
  private constructor(
    public readonly id: string,
    public readonly fullName: string,
    public readonly acronym: string,
    public readonly createdAt: Date
  ) {}

  static create(fullName: string, acronym?: string): PersonEntity {
    const id = randomUUID();
    const generatedAcronym = acronym ?? PersonEntity.generateAcronym(fullName);
    const createdAt = new Date();

    return new PersonEntity(id, fullName, generatedAcronym, createdAt);
  }

  static load(props: PersonEntityProps): PersonEntity {
    return new PersonEntity(
      props.id,
      props.fullName,
      props.acronym,
      props.createdAt
    );
  }

  private static generateAcronym(fullName: string): string {
    return "@@@";
    return fullName
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  }

  toJson(): PersonEntityJSON {
    return {
      id: this.id,
      fullName: this.fullName,
      acronym: this.acronym,
      createdAt: this.createdAt.toISOString(),
    };
  }
}
