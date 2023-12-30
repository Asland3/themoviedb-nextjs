import {
  getMovieDetails,
  getSimilarMovies,
} from "@/app/services/movie-service";
import Link from "next/link";

async function MovieDetailsPage({ params }: { params: { id: string } }) {
  const MAIN_IMAGE_BASE_URL =
    "https://www.themoviedb.org/t/p/w440_and_h660_face/";
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const movieDetails: Movie = await getMovieDetails(params.id);
  const similarMovies: Movie[] = await getSimilarMovies(params.id);
  return (
    <div className="my-4 mx-3">
      <div className="flex items-center">
        <div className="col-3">
          <img src={MAIN_IMAGE_BASE_URL + movieDetails.poster_path} />
        </div>

        <div className="mx-5">
          <h3 className="pt-4 pb-4 text-5xl">{movieDetails.title}</h3>
          <div className="flex ">
            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded ">
              {movieDetails.release_date}
            </p>
            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded">
              {movieDetails.original_language}
            </p>
            <p className="py-1 px-2 bg-yellow-500 text-white me-2 rounded ">
              {movieDetails.popularity}
            </p>
          </div>
          <div className="pt-4">
            <p>
              {movieDetails.genres.map((genre) => {
                return (
                  <span
                    key={genre.id}
                    className="py-1 px-2 bg-stone-500 text-white me-2 rounded"
                  >
                    {genre.name}
                  </span>
                );
              })}
            </p>
          </div>
          <p className="pt-4 pb-4">{movieDetails.overview}</p>
        </div>
      </div>

      <div>
        <h3 className="text-3xl pt-4 pb-4">Similar Movies</h3>
        <div className="flex flex-wrap gap-3">
          {similarMovies.map((movie) => {
            return (
              <Link key={movie.id} href={"/movie/" + movie.id}>
                <div key={movie.id} className="col-3">
                  <img src={IMAGE_BASE_URL + movie.poster_path} />
                  <div>
                    <h5>{movie.title}</h5>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
