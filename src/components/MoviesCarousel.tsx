import { Movie } from "../../typings";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

const MoviesCarousel = ({ movies, isVertical, title }: Props) => {
  return (
    <div className="z-20">
      <h2>{title}</h2>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesCarousel;
