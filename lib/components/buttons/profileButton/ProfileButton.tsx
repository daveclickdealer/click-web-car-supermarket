import Image from "next/image";
import Link from "next/link";

const ProfileButton = () => {
  return (
    <>
      <Link href="/">
        <button className="rounded-full h-7 w-7 border-2 border-accent overflow-hidden">
          <Image
            src="/profile-image.png"
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        </button>
      </Link>
    </>
  );
};

export default ProfileButton;
