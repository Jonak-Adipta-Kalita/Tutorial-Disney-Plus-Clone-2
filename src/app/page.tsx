import MoviesCarousel from "@/components/MoviesCarousel";
import { getCarouselMovies } from "@/lib/getMovies";

export default async () => {
  const upcomingMovies = await getCarouselMovies("upcoming");
  const topRatedMovies = await getCarouselMovies("top_rated");
  const popularMovies = await getCarouselMovies("popular");

  return (
    <main>
      {/* CarouselBannerWrapper */}
      <div className="flex flex-col space-y-2 xl:-mt-40">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
};
