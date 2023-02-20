import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/logo-horizontal.png"
        alt="Dace Motor Group"
        width={370}
        height={120}
        className="h-14 w-auto"
      />
    </>
  );
};

export default Logo;
