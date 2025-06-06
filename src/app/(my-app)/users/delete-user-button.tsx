"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteUser } from "@/app/actions/delete-user";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  id: string | number;
  currentUserRole?: 'admin' | 'user';
}

export function DeleteUserButton({ id, currentUserRole }: Props) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Solo mostrar el botón si el usuario actual es administrador
  if (currentUserRole !== 'admin') {
    return null;
  }
  
  const handleDelete = async () => {
    if (!confirm("¿Estás seguro de que quieres eliminar este usuario?")) {
      return;
    }
    
    setIsDeleting(true);
    try {
      await deleteUser({ id });
      console.log(`Usuario ${id} eliminado`);
      router.refresh();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <Button
      onClick={handleDelete}
      disabled={isDeleting}
      variant="ghost"
      size="icon"
      className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10 cursor-pointer disabled:opacity-50"
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">
        {isDeleting ? "Eliminando..." : "Eliminar"}
      </span>
    </Button>
  );
}
