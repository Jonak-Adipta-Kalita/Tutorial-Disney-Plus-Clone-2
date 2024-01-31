import { ChevronDownIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { ScrollArea } from "../ui/scroll-area";
import { getGenres } from "@/lib/getGenres";

type Props = {};

const GenreDropdown = async (props: Props) => {
  const genres = await getGenres();

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
            <DropdownMenuItem key={genre.id}>
              <Link
                href={`/genre/${genre.id}`}
                className="cursor-pointer w-full"
              >
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
