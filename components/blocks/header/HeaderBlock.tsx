import Link from "next/link";

const HeaderBlock = () => {
  return (
    <>
      <header className="sticky top-0 bg-red-500 p-4 sm:p-6 md:p-8 flex justify-between">
        <div>Logo</div>
        <nav className="space-x-8">
          <Link
            href="/"
            className="text-white hover:text-purple-900 transition"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-purple-900 transition"
          >
            About
          </Link>
        </nav>
      </header>
    </>
  );
};

export default HeaderBlock;
