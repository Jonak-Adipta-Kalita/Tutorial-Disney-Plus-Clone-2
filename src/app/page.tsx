import CarouselBanner from "@/components/CarouselBanner";
import MoviesCarousel from "@/components/movies/MoviesCarousel";
import { getCarouselMovies, getDiscoverMovies } from "@/lib/getMovies";

export default async () => {
  const movies = await getDiscoverMovies();

  const upcomingMovies = await getCarouselMovies("upcoming");
  const topRatedMovies = await getCarouselMovies("top_rated");
  const popularMovies = await getCarouselMovies("popular");

  return (
    <main>
      <CarouselBanner movies={movies} />
      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
};
