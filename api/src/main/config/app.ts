import z from "zod";
import { publicProcedure, router } from "./trpc";
import { PersonRepository } from "@/infra/db/repositories/person";
import { PersonEntity, PersonEntityJSON } from "@/@core/person-entity";
import { Pollinations } from "@/infra/ia/pollinations";

export const appRouter = router({
  personList: publicProcedure
    .input(z.object({ page: z.number(), pageSize: z.number() }))
    .query(async ({ input }): Promise<PersonEntityJSON[]> => {
      const { page, pageSize } = input;
      const personList = await new PersonRepository().list({ page, pageSize });

      return personList.map((p) => p.toJson());
    }),
  createPerson: publicProcedure
    .input(z.object({ fullName: z.string() }))
    .mutation(async (opts): Promise<PersonEntityJSON> => {
      const { input } = opts;
      const { fullName } = input;

      const acronym = await Pollinations.generateAcronym(fullName);
      const personToBeCreated = PersonEntity.create(fullName, acronym);

      await new PersonRepository().create(personToBeCreated);

      return personToBeCreated.toJson();
    }),
});

export type AppRouter = typeof appRouter;
