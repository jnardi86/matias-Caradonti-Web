import BlogSection from "@/sections/BlogSection";

export default function ProfesionalBlogPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Profesional</h1>
      <BlogSection category="Profesionales" />
    </main>
  );
}