import { getSession, useSession } from "next-auth/react";
import Link from "next/link";
import MessageNotification from "../MessageNotification";
import { useState } from "react";

interface NavbarProps {
  isLoggedIn: boolean;
  onSignOut: () => void;
  hasNewMessage: boolean;
}

export default function NavbarLoggedIn({
  isLoggedIn,
  onSignOut,
  hasNewMessage,
}: NavbarProps) {
  const { data: session, status } = useSession();
  const [localHasNewMessage, setLocalHasNewMessage] = useState(hasNewMessage);

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
          {userRole === "ADMIN1" && (
            <>
              <div className="flex flex-col-2 gap-2">
                <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
                  <Link href={"/dashboard"}>Dashboard</Link>
                </button>
                <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
                  <Link href={"/admin"}>Chats</Link>
                </button>
              </div>
            </>
          )}
          {userRole === "ADMIN2" && (
            <>
              <div className="flex flex-col-2">
                <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
                  <Link href={"/admin"}>Chats</Link>
                </button>
              </div>
            </>
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
