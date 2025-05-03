"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sanity } from "@/sanity/lib/sanity";
import SkeletonCard from "@/components/SkeletonCard";
import FadeInSection from "@/components/FadeInSection";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);


  useEffect(() => {
    sanity
      .fetch(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        summary,
        publishedAt,
        mainImage {
          asset -> {
            url
          }
        }
      }`)
      .then((data) => {
        setPosts(data);
        setLoading(false); // Terminó de cargar
      })
      .catch(console.error);
  }, []);

  const loadMorePosts = async () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 800); // Simulamos un pequeño delay para UX (aunque sea instantáneo igual)
  };


  return (
    <FadeInSection direction="up" delay={0.3}>
      <section id="blog" className="py-16 mt-40 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-medium text-PrimaryBlue text-center mb-12">
            Últimos Artículos
          </h2>

          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              // Mostrar skeletons mientras carga
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col">
                  <SkeletonCard height="h-56" />
                  <div className="flex flex-col gap-4 mt-4">
                    <SkeletonCard height="h-6" width="w-3/4" />
                    <SkeletonCard height="h-4" width="w-5/6" />
                    <SkeletonCard height="h-4" width="w-4/6" />
                    <SkeletonCard height="h-10" width="w-1/2" />
                  </div>
                </div>
              ))
            ) : (
              posts.slice(0, visiblePosts).map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  {post.mainImage && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-2xl font-bold font-montserrat text-PrimaryBlue mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-base mb-6 flex-grow font-poppins">
                      {post.summary}
                    </p>
                    <Link
                      href={`/blog/${post.slug.current}`}
                      className="inline-block w-full bg-PrimaryBlue/10 text-PrimaryBlue font-semibold py-3 px-6 rounded hover:bg-PrimaryBlue/20 transition-all duration-300 text-center"
                    >
                      Leer más
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
          {!loading && visiblePosts < posts.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMorePosts}
                className="bg-PrimaryBlue text-white font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                disabled={isLoadingMore} // Desactivamos mientras carga
              >
                {isLoadingMore ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Ver más artículos"
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </FadeInSection>

  );
}


