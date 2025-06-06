"use client";

import { createUser } from "@/app/actions/create-user";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userSchema, UserValues } from "@/lib/schemas/user-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useRouter } from "next/navigation";

export function CreateUserForm({ currentUserRole }: { currentUserRole?: 'admin' | 'user' }) {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  
  const methods = useForm({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "user" as const,
    },
  });

  const onSubmit = async (data: UserValues) => {
    try {
      await createUser({ data });
      methods.reset();
      setShowForm(false);
      router.refresh();

    } catch (error) {
      console.error("Error creating user:", error);
    }  };

  if (currentUserRole !== 'admin') {
    return null;
  }

  if (!showForm) {
    return (
      <Button onClick={() => setShowForm(true)} className="gap-2">
        <Plus className="h-4 w-4" />
        Nuevo usuario
      </Button>
    );
  }

  return (
    <FormProvider {...methods}>
      <div className="mb-6 p-4 border rounded-lg bg-card">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Agregar usuario</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setShowForm(false);
              methods.reset();
            }}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={methods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />          <FormField
            control={methods.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un rol" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="user">Usuario</SelectItem>
                    <SelectItem value="admin">Administrador</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2">
            <Button type="submit">Crear usuario</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setShowForm(false);
                methods.reset();
              }}
            >
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}
