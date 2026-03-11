export default function Hero({ movie }) {
  const imageBase = "https://image.tmdb.org/t/p/original";

  return (
    <div className="relative h-[75vh] w-full text-white">

      <img
        src={`${imageBase}${movie.backdrop_path}`}
        alt={movie.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="absolute bottom-12 left-10 max-w-xl">

        <h1 className="text-4xl md:text-7xl font-bold mb-4">
          {movie.title || movie.name}
        </h1>

        <p className="text-gray-300 mb-6 max-w-lg line-clamp-3">
          {movie.overview}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded font-semibold">
            ▶ Play
          </button>

          <button className="bg-gray-700 px-6 py-2 rounded font-semibold">
            More Info
          </button>
        </div>

      </div>

    </div>
  );
}