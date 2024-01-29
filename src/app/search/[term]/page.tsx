import AISuggestion from "@/components/ai/Suggestion";
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
        <h1 className="text-5xl font-bold px-10 mb-5">
          Results for: "
          <span className="text-gray-700 dark:text-gray-200">{term}</span>"
        </h1>
        <AISuggestion term={term} />
        <MoviesCarousel movies={movies} title="Movies" isVertical />
        <MoviesCarousel movies={popularMovies} title="You may also like" />
      </div>
    </main>
  );
};

export default SearchPage;
