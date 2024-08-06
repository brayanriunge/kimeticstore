import { useSession } from "next-auth/react";

interface deleteProps {
  isLoggedIn: boolean;
}

export default function Delete({ isLoggedIn }: deleteProps) {
  const { data: session, status } = useSession();

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("error during deleting");
    }
  };

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
              onClick={() => handleDelete}
              className=" rounded-md px-8 p-2 bg-orange-400 text-lg font-bold mx-auto"
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
