"use client";

export default function SkeletonCard({ height = "h-64", width = "w-full", rounded = "rounded-lg" }) {
  return (
    <div className={`bg-gray-200 animate-pulse ${height} ${width} ${rounded}`}></div>
  );
}
