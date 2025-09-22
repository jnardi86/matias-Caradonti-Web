import { sanity } from "@/sanity/lib/sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "@/sanity/lib/portableTextComponents";
import BlogPostHero from "@/components/BlogPostHero";
import PostMedia from "@/components/PostMedia";
import { cookies } from "next/headers";

// const query = `*[_type == "post" && slug.current == $slug][0]{
//   title,
//   publishedAt,
//   summary,
//   body,
//   videoUrl,
//   "mainImageUrl": mainImage.asset->url,
//   "mainImageAlt": select(defined(mainImage.alt) => mainImage.alt, title),
//   categories[]->{
//     title
//   }
// }`;

// Query con selección por idioma
const query = `*[_type == "post" && slug.current == $slug][0]{
  "title": select(
    defined(title[$lang]) => title[$lang],
    defined(title.es) => title.es,
    defined(title.en) => title.en,
    title
  ),
  publishedAt,
  "summary": select(
    defined(summary[$lang]) => summary[$lang],
    defined(summary.es) => summary.es,
    defined(summary.en) => summary.en,
    summary
  ),
  "body": select(
    defined(body[$lang]) => body[$lang],
    defined(body.es) => body.es,
    defined(body.en) => body.en,
    body
  ),
  videoUrl,
  "mainImageUrl": mainImage.asset->url,
  "mainImageAlt": select(
    defined(mainImage.alt[$lang]) => mainImage.alt[$lang],
    defined(mainImage.alt.es) => mainImage.alt.es,
    defined(mainImage.alt.en) => mainImage.alt.en,
    mainImage.alt
  ),
  slug,
  categories[]->{title, slug}
}`;

// Utilidad para obtener el idioma del lado servidor
function getServerLang() {
  const c = cookies();
  return (
    c.get("i18nextLng")?.value || // nombre típico del plugin
    c.get("i18next")?.value ||    // fallback por si usas otro nombre
    "es"
  );
}


// export async function generateMetadata({ params }) {
//   const post = await sanity.fetch(query, { slug: params.slug });
//   return {
//     title: post?.title || "Post no encontrado",
//   };
// }

export async function generateMetadata({ params }) {
  const lang = getServerLang();
  const post = await sanity.fetch(query, { slug: params.slug, lang });
  return { title: post?.title || "Post no encontrado" };
}

// export default async function BlogPostPage({ params }) {
//   const post = await sanity.fetch(query, { slug: params.slug });

//   if (!post) return notFound();

//   // Detectar categoría
//   const category = post.categories?.[0]?.title || null;

//   let backUrl = "/";
//   if (category === "Profesionales") {
//     backUrl = "/blog/profesional";
//   } else if (category === "Pacientes") {
//     backUrl = "/blog/pacientes";
//   }

export default async function BlogPostPage({ params }) {
  const lang = getServerLang();
  const post = await sanity.fetch(query, { slug: params.slug, lang });

  if (!post) return notFound();

  // Detectar categoría
  const category = post.categories?.[0]?.title || null;
  let backUrl = "/";
  if (category === "Profesionales") backUrl = "/blog/profesional";
  else if (category === "Pacientes") backUrl = "/blog/pacientes";

  
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

      {/* Media: si hay video lo muestra; si no, imagen */}
      <PostMedia
        videoUrl={post.videoUrl}
        mainImageUrl={post.mainImageUrl}
        mainImageAlt={post.mainImageAlt}
      />

      {/* Imagen destacada */}
      {/* {post.mainImageUrl && (
        <div className="w-full max-w-6xl mx-auto my-8 rounded-lg overflow-hidden">
          <img
            src={post.mainImageUrl}
            alt={post.mainImageAlt}
            className="
              w-full
              aspect-[16/9]
              object-cover
              rounded
              transition-transform
              duration-300
              hover:scale-105
            "
          />
        </div>
      )} */}

      {/* Botón Volver */}
      <div className="container mx-auto px-4 md:px-8 mb-12 text-center">
        <a
          href={backUrl}
          className="inline-block text-PrimaryBlue text-base md:text-lg font-semibold font-poppins hover:underline hover:opacity-80 transition"
        >
         {lang === 'es' ? 'Volver al blog' : 'Return to blog'}
        </a>
      </div>
    </div>
  );
}
