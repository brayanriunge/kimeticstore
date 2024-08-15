import { getSession, useSession } from "next-auth/react";
import Link from "next/link";

interface NavbarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
}

export default function NavbarLoggedIn({ isLoggedIn, onSignOut }: NavbarProps) {
  const { data: session, status } = useSession();

  const userRole = session?.user?.role || null;

  if (status === "loading") {
    return <p>Loading...</p>;
  }

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
          {userRole === "USER" && (
            <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
              <Link href={"/dashboard"}>Dashboard</Link>
            </button>
          )}
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
