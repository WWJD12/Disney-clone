export default function MovieThumbnail({ movie }) {
  const imageBase = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="min-w-[180px] cursor-pointer transform transition duration-300 hover:scale-105">

      <img
        src={`${imageBase}${movie.poster_path}`}
        alt={movie.title}
        className="rounded-lg w-[180px] h-[270px] object-cover"
      />

    </div>
  );
}