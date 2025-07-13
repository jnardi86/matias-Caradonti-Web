"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sanity } from "@/sanity/lib/sanity";
import SkeletonCard from "@/components/SkeletonCard";
import { Slide, Fade } from "react-awesome-reveal";

export default function BlogSection({
  category,
  limit,
  hideLoadMore,
  customTitle,
}) {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    let categoryQuery = "";
    if (category) {
      categoryQuery = ` && references(*[_type=="category" && title=="${category}"]._id)`;
    }

    sanity
      .fetch(`*[_type == "post" && defined(slug.current) ${categoryQuery}] | order(publishedAt desc) {
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
        setLoading(false);
      })
      .catch(console.error);
  }, [category]);

  const visiblePostsCount = limit ?? visiblePosts;

  const loadMorePosts = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 6);
      setIsLoadingMore(false);
    }, 800);
  };

  /**
 * Si terminó de cargar (loading = false)
 * y no hay posts devueltos desde Sanity,
 * se muestra un mensaje indicando que no hay publicaciones
 */

   if (!loading && posts.length === 0) {
    return (
      <section className="py-16 mt-20 bg-white scroll-mt-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-PrimaryBlue">
            {customTitle || "Blog"}
          </h2>
          <p className="text-gray-600 text-lg">
            No hay publicaciones aún en esta categoría.
          </p>
        </div>
      </section>
    );
  }

  return (
    <Slide direction="left" triggerOnce>
      <section id="blog" className="py-8 mt-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-poppins font-bold text-PrimaryBlue text-center mb-12 cursor-default">
            <span className="relative inline-block group">
              {customTitle || "Últimos Artículos"}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-PrimaryBlue/80 transition-all duration-1000 group-hover:w-full"></span>
            </span>
          </h2>

          <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
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
              posts.slice(0, visiblePostsCount).map((post) => (
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

          {!hideLoadMore && !loading && visiblePosts < posts.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMorePosts}
                className="bg-PrimaryBlue text-white font-semibold px-8 py-3 rounded shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
                disabled={isLoadingMore}
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
    </Slide>
  );
}
