import Link from "next/link";

function Card(movie: Movie) {
  const IMAGE_BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  return (
    <div>
      <Link href={"/movie/" + movie.id}>
        <div style={{ width: "15rem" }}>
          <img src={IMAGE_BASE_URL + movie.poster_path} />
          <div>
            <h5>{movie.title}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
