export interface MovieData {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

type GenreInfo = {
  id: number;
  name: string;
};

type CompanieInfo = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export interface FullMovieData extends MovieData {
  belongs_to_collection: unknown;
  budget: number;
  genres: GenreInfo[];
  homepage: string;
  origin_country: string[];
  production_companies: CompanieInfo[];
  revenue: number;
  runtime: number;
}

export interface MovieVideoData {
  name: string;
  site: string;
  type: string;
  official: boolean;
  ket: string;
}
