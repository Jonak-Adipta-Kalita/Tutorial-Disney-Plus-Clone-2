import { Genre } from "../../typings";

type Props = {};

const GenreDropdown = async (props: Props) => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const response = await fetch(url, options);
  const genres = (await response.json()).genres as Genre[];

  return <div></div>;
};

export default GenreDropdown;
