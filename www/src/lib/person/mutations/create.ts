import { trpc } from "@/lib/services/trpc-client";

export function useCreatePerson() {
  const utils = trpc.useUtils();

  const mutation = trpc.createPerson.useMutation({
    onSuccess: () => {
      utils.personList.invalidate();
    },
  });

  return {
    ...mutation,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    data: mutation.data,
    error: mutation.error,
  };
}
