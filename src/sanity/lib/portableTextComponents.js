import Image from "next/image";

export const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="w-full my-8">
        <Image
          src={value.asset.url}
          alt={value.alt || "Imagen"}
          width={800}
          height={600}
          className="rounded-lg mx-auto object-cover"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-PrimaryBlue mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-PrimaryBlue mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 mb-6">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-PrimaryBlue underline hover:text-blue-700 transition">
        {children}
      </a>
    ),
  },
};
