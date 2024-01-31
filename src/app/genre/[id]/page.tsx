import AISuggestion from "@/components/AISuggestion";
import MoviesCarousel from "@/components/movies/MoviesCarousel";
import { getGenres } from "@/lib/getGenres";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export const revalidate = 60 * 60 * 24;

export const generateStaticParams = async () => {
  const genres = await getGenres();

  return genres.map((genre) => ({
    id: genre.id.toString(),
  }));
};

const GenrePage = async ({ params: { id } }: Props) => {
  if (!id) return notFound();
  const movies = await getDiscoverMovies(id);

  const genres = await getGenres();
  const genre = genres.find((genre) => genre.id === Number(id))?.name!;

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-5xl font-bold px-10 mb-5">
          Results for: "
          <span className="text-gray-700 dark:text-gray-200">{genre}</span>"
        </h1>
        <AISuggestion term={genre} />
      </div>
      <MoviesCarousel title={genre} movies={movies} isVertical />
    </main>
  );
};

export default GenrePage;
