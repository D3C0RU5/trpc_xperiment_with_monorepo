import { usePeopleList } from "@/lib/person/queries/usePeople";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

export function PersonList() {
  const { data, isLoading, isError, error } = usePeopleList();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <Table>
      <TableCaption>List of persons</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Full name</TableHead>
          <TableHead>Acronym</TableHead>
          <TableHead className="text-right">Created at</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((person) => (
          <TableRow key={person.id}>
            <TableCell className="font-medium">{person.fullName}</TableCell>
            <TableCell>{person.acronym}</TableCell>
            <TableCell className="text-right">
              {new Date(person.createdAt).toLocaleString()}
            </TableCell>
            <TableCell>
              <Button
                type="submit"
                variant="destructive"
                className="cursor-pointer"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
