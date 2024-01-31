import { Genre } from "@/typings";

export const getGenres = async (): Promise<Genre[]> => {
  const options: RequestInit = {
    method: "GET",
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const res = await fetch(`http://localhost:3000/api/genres`, options);
  const genres: Genre[] = await res.json();

  return genres;
};
