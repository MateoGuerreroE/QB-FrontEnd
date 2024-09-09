import MovieCard from "./components/MovieCard";
import MainBanner from "./components/mainBanner";

export default function Home() {
  return (
    <div className="">
      <MainBanner />
      <MovieCard
        title="Sample"
        image="https://hs.sbcounty.gov/cn/Photo%20Gallery/_w/Sample%20Picture%20-%20Koala_jpg.jpg"
        rating={50}
        releaseDate="21 Jun. 2021"
        dark={true}
      />
    </div>
  );
}
