"use client";

function normalizeYouTubeEmbed(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    let id = null;

    if (host === "youtu.be") {
      id = u.pathname.slice(1);
    } else if (host.includes("youtube.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      if (parts[0] === "shorts" && parts[1]) id = parts[1];
      else if (u.searchParams.get("v")) id = u.searchParams.get("v");
    }
    return id ? `https://www.youtube.com/embed/${id}` : null;
  } catch { return null; }
}

export default function PostMedia({ videoUrl, mainImageUrl, mainImageAlt }) {
  const embedUrl = normalizeYouTubeEmbed(videoUrl);

  if (embedUrl) {
    const isShort = videoUrl?.includes("/shorts/");
    return (
      <div className="w-full flex justify-center my-8 px-4">
        <div
          className={
            isShort
              // Shorts (9:16) → controlá la ALTURA y mantené el ratio
              ? "rounded-lg overflow-hidden aspect-[9/16] h-[55vh] sm:h-[60vh] lg:h-[80vh] max-h-[760px] w-auto"
              // Horizontal (16:9)
              : "rounded-lg overflow-hidden aspect-video h-[38vh] sm:h-[48vh] lg:h-[56vh] max-h-[720px] w-auto"
          }
        >
          <iframe
            src={embedUrl}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  if (mainImageUrl) {
    return (
      <div className="w-full flex justify-center my-8 px-4">
        <div className="rounded-lg overflow-hidden aspect-video h-[38vh] sm:h-[48vh] lg:h-[56vh] max-h-[720px] w-auto">
          <img
            src={mainImageUrl}
            alt={mainImageAlt || "Imagen del post"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  return null;
}
