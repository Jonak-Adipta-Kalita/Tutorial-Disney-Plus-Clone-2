import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./theme/ThemeToggler";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 items-center justify-between flex p-5 bg-gradient-to-t from-transparent via-gray-900/25 to-gray-900">
      <Link href={"/"} className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Logo"
          height={100}
          width={120}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* <GenreDropdown /> */}
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
