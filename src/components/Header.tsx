import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Logo"
          height={100}
          width={120}
          className="cursor-pointer invert"
        />
      </Link>
      <div className="flex items-center space-x-2">
        {/* GenreDropdown */}
        {/* SearchInput */}
        {/* ThemeToggler */}
      </div>
    </header>
  );
};

export default Header;
