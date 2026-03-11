"use client";

import { useRef } from "react";
import MovieThumbnail from "./MovieThumbnail";

export default function MoviesCollection({ title, results }) {
  const rowRef = useRef(null);

  const handleWheel = (e) => {
    if (rowRef.current) {
      e.preventDefault();
      rowRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <div className="py-6 px-6">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>

      <div
        ref={rowRef}
        onWheel={handleWheel}
        className="flex overflow-x-scroll space-x-4 scrollbar-hide"
      >
        {results.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}