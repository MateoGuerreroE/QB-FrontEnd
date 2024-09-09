import MainBannerSection from "./sections/MainBannerSection";
import MovieListSection from "./sections/MovieListSection";

export default function Home() {
  return (
    <div className="">
      <MainBannerSection />
      <div className="bg-[#262626] flex flex-col gap-5">
        <MovieListSection title="Popular" />
        <MovieListSection title="Now Playing" />
        <MovieListSection title="Upcoming" />
        <MovieListSection title="Top Rated" />
        <MovieListSection title="Favorites" />
      </div>
    </div>
  );
}
