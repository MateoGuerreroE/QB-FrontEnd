import FavMovieSection from "./sections/FavMovieSection";
import FilteringSection from "./sections/FilteringSection";
import MainBannerSection from "./sections/MainBannerSection";
import MovieListSection from "./sections/MovieListSection";

export default function Home() {
  return (
    <div className="relative">
      <MainBannerSection />
      <div className="flex flex-col lg:flex-row">
        <div className="sm:w-[20%]">
          <FilteringSection />
        </div>
        <div className="flex flex-col gap-5 lg:gap-0 w-full lg:w-[80%]">
          <MovieListSection title="Popular" path="popular" />
          <MovieListSection title="Now Playing" path="now_playing" />
          <MovieListSection title="Upcoming" path="upcoming" />
          <MovieListSection title="Top Rated" path="top_rated" />
          <FavMovieSection title="Favorites" />
        </div>
      </div>
    </div>
  );
}
