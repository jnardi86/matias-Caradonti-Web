import { sanity } from "@/sanity/lib/sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/sanity/lib/portableTextComponents";
import BlogPostHero from "@/components/BlogPostHero";

const query = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  summary,
  body,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export async function generateMetadata({ params }) {
  const post = await sanity.fetch(query, { slug: params.slug });
  return {
    title: post?.title || "Post no encontrado",
  };
}

export default async function BlogPostPage({ params }) {
  const post = await sanity.fetch(query, { slug: params.slug });

  if (!post) return notFound();

  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero con título y fecha */}
      <BlogPostHero title={post.title} publishedAt={post.publishedAt} />

      {/* Contenido */}
      <main className="w-full flex-grow container px-4 py-10">
        <article className="prose prose-sm sm:prose lg:prose-lg font-poppins leading-relaxed">
          <PortableText value={post.body} components={portableTextComponents} />
        </article>
      </main>

      {/* Imagen destacada */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-64 sm:h-80 md:h-[500px] my-6">
          <img
            src={post.mainImage.asset.url}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Botón Volver */}
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <a
          href="/"
          className="inline-block text-PrimaryBlue text-base md:text-lg font-semibold font-poppins hover:underline hover:opacity-80 transition"
        >
          ← Volver al inicio
        </a>
      </div>
    </div>
  );
}
