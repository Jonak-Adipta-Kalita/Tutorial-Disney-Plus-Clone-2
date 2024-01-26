import MoviesCarousel from "@/components/movies/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const GenrePage = async ({
  params: { id },
  searchParams: { genre },
}: Props) => {
  if (!id || !genre) return notFound();
  const movies = await getDiscoverMovies(id);

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10 mb-5">
          Results for: "
          <span className="text-gray-700 dark:text-gray-200">{genre}</span>"
        </h1>
      </div>
      <MoviesCarousel title={genre} movies={movies} isVertical />
    </main>
  );
};

export default GenrePage;
