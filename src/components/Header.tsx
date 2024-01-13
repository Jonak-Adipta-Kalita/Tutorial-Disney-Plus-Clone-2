import Image from "next/image";
import Link from "next/link";
import ThemeToggler from "./theme/ThemeToggler";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Logo"
          height={100}
          width={120}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* GenreDropdown */}
        {/* SearchInput */}
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
