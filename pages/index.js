import requests from "../utils/requests";
import MoviesCollection from "../components/MoviesCollection";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home({ trending, topRated }) {
  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="pt-24">
        <Hero movie={trending[0]} />
      </div>


      <MoviesCollection title="Trending" results={trending} />
      <MoviesCollection title="Top Rated" results={topRated} />
    </div>
  );
}

export async function getServerSideProps() {
  const trendingRes = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTrending}`
  );

  const topRatedRes = await fetch(
    `https://api.themoviedb.org/3${requests.fetchTopRated}`
  );

  const trendingData = await trendingRes.json();
  const topRatedData = await topRatedRes.json();

  return {
    props: {
      trending: trendingData.results,
      topRated: topRatedData.results,
    },
  };
}