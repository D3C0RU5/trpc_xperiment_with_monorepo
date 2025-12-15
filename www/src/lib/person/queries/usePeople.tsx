import { trpc } from "@/lib/services/trpc-client";

export function usePeopleList(page: number = 1, pageSize: number = 50) {
  const utils = trpc.useUtils();
  const query = trpc.personList.useQuery({ page, pageSize });

  const invalidate = () => utils.personList.invalidate();

  return {
    ...query,
    data: query.data,
    invalidate,
  };
}
