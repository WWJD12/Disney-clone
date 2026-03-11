import { useState } from "react";
import Head from "next/head";
import YouTube from "react-youtube";

function Movie({ result }) {
  const [trailer, setTrailer] = useState(null);

  const baseUrl = "https://image.tmdb.org/t/p/original";

  const trailerVideo = result.videos?.results?.find(
    (video) => video.type === "Trailer"
  );

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ color: "white", backgroundColor: "black", minHeight: "100vh", padding: "40px" }}>
      <Head>
        <title>{result.title || result.original_name}</title>
      </Head>

      <h1>{result.title || result.original_name}</h1>

      {(result.backdrop_path || result.poster_path) && (
        <img
          src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
          width="600"
          alt={result.title}
        />
      )}

      <p style={{ marginTop: "20px", maxWidth: "700px" }}>
        {result.overview}
      </p>

      <p>⭐ Rating: {result.vote_average || "N/A"}</p>
      <p>Release Date: {result.release_date || "Unknown"}</p>

      {trailerVideo && (
        <button
          onClick={() => setTrailer(trailerVideo.key)}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ▶ Play Trailer
        </button>
      )}

      {trailer && (
        <div style={{ marginTop: "40px" }}>
          <YouTube videoId={trailer} opts={opts} />
        </div>
      )}
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  ).then((response) => response.json());

  return {
    props: {
      result: request,
    },
  };
}