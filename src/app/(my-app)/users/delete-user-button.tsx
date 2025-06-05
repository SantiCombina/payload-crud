"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/app/actions/delete-user";

interface Props {
  id: string | number;
}

export function DeleteUserButton({ id }: Props) {
  const handleDelete = async () => {
    try {
      await deleteUser({ id });
      console.log(`Usuario ${id} eliminado`);
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10"
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Eliminar</span>
    </Button>
  );
}
