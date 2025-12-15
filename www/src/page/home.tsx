import { PersonForm } from "@/components/person-form";
import { PersonList } from "@/components/person-list";

export function Home() {
  return (
    <div className="flex justify-center p-5">
      <div className="flex flex-col gap-5 max-w-xl ">
        <PersonForm />
        <hr />
        <PersonList />
      </div>
    </div>
  );
}
