import MainBannerSection from "./sections/MainBannerSection";
import MovieListSection from "./sections/MovieListSection";

export default function Home() {
  return (
    <div className="">
      <MainBannerSection />
      <div className="bg-[#262626] flex flex-col gap-5">
        <MovieListSection title="Popular" path="popular" />
        <MovieListSection title="Now Playing" path="now_playing" />
        <MovieListSection title="Upcoming" />
        <MovieListSection title="Top Rated" path="top_rated" />
        <MovieListSection title="Favorites" />
      </div>
    </div>
  );
}
