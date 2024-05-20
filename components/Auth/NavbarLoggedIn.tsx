import { useSession } from "next-auth/react";
import Link from "next/link";

interface NavbarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}

export default function NavbarLoggedIn({ isLoggedIn, onSignOut }: NavbarProps) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <button
            onClick={onSignOut}
            className="rounded-md text-montserrat px-8 p-2 bg-orange-400"
          >
            Sign out
          </button>
        </>
      ) : (
        <Link href={"/signup"}>
          <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
            {" "}
            Sign up
          </button>
        </Link>
      )}
    </>
  );
}
