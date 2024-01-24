import { ChevronDownIcon } from "lucide-react";
import { Genre } from "../../typings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-white flex justify-center items-center outline-none font-semibold">
        Genre <ChevronDownIcon className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <ScrollArea className="h-72">
          {genres.map((genre) => (
            <DropdownMenuItem key={genre.id} className="cursor-pointer">
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
