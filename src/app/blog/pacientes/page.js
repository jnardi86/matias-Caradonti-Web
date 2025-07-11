import BlogSection from "@/sections/BlogSection";

export default function PacientesBlogPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog para Pacientes</h1>
      <BlogSection category="Pacientes" />
    </main>
  );
}