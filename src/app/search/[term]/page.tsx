import MoviesCarousel from "@/components/movies/MoviesCarousel";
import { getCarouselMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

const SearchPage = async ({ params: { term: paramTerms } }: Props) => {
  if (!paramTerms) return notFound();
  const term = decodeURI(paramTerms);

  const movies = await getSearchedMovies(term);
  const popularMovies = await getCarouselMovies("popular");

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h2 className="text-6xl font-bold px-10">Results for: "{term}"</h2>
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </main>
  );
};

export default SearchPage;
