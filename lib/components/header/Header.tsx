import BasketButton from "@components/buttons/basketButton/BasketButton";
import FavouritesButton from "@components/buttons/favouritesButton/FavouritesButton";
import MenuButton from "@components/buttons/menuButton/MenuButton";
import ProfileBadge from "@components/buttons/profileButton/ProfileButton";
import Logo from "@components/logo/Logo";
import SearchInput from "@components/searchInput/SearchInput";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 right-0 w-full bg-primary p-5 px-8 flex gap-6 justify-between items-center">
        <div className="">
          <MenuButton />
        </div>
        <div className="-my-4">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="grow mx-8">
          <SearchInput />
        </div>
        <div className="flex gap-8">
          <BasketButton />
          <FavouritesButton />
        </div>
        <div className="">
          <ProfileBadge />
        </div>
        {/* <nav className="space-x-8">
          <Link href="/" className="text-white hover:text-accent transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-accent transition"
          >
            About
          </Link>
        </nav> */}
      </header>
    </>
  );
};

export default Header;
