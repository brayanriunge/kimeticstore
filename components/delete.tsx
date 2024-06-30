import { useSession } from "next-auth/react";

interface deleteProps {
  isLoggedIn: boolean;
  deleteItem: () => void;
}

export default function Delete({ isLoggedIn, deleteItem }: deleteProps) {
  const { data: session, status } = useSession();

  const userRole = session?.user.role || null;

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      {isLoggedIn && (
        <>
          {userRole === "ADMIN1" && (
            <button
              onClick={() => deleteItem}
              className=" rounded-md px-8 p-2 bg-orange-400 "
            >
              {" "}
              Delete
            </button>
          )}
        </>
      )}
    </>
  );
}
