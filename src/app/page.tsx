import Card from "./components/Card";
import { getTrendingMovies } from "./utils/requests";


export default async function Home() {
  const movies = await getTrendingMovies();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-8xl my-8 text-center">Top Trending Movies</h1>
      <div className="flex flex-wrap gap-3 justify-center">
        {movies.map((movie: Movie) => {
          return <Card key={movie.title} {...movie} />;
        })}
      </div>
    </div>
  );
}
