import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Payload CRUD Demo",
  description: "Una demostración completa de CRUD usando Next.js y Payload CMS. Gestión de usuarios con interfaz moderna y funcionalidades completas.",
  keywords: ["Next.js", "Payload CMS", "CRUD", "TypeScript", "React", "Gestión de usuarios"],
  openGraph: {
    title: "Payload CRUD Demo",
    description: "Demostración de aplicación CRUD con Next.js y Payload CMS",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Demostración de Payload CMS
        </h1>

        <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
          Una demostración simple que muestra cómo construir una aplicación CRUD usando 
          Next.js y Payload CMS. Explorá las capacidades de gestión de usuarios.
        </p>

        <div className="mt-8">
          <Button 
            asChild 
            size="lg" 
            className="group transition-all duration-300"
          >
            <Link href="/users">
              Ver ejemplo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
