import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreatePerson } from "@/lib/person/mutations/create";

export function PersonForm() {
  const [fullName, setFullName] = useState("");

  const { mutateAsync, isLoading } = useCreatePerson();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName) return;

    await mutateAsync({ fullName });
    setFullName("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          placeholder="Ex: Din Djarin"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <Button type="submit" disabled={!fullName || isLoading}>
        {isLoading ? "Creating..." : "Create Acronym"}
      </Button>
    </form>
  );
}
