import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 md:p-8">
      <nav className="flex gap-8">
        <Link href="/" className="text-white hover:text-accent transition">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-accent transition">
          About
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
