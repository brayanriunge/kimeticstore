import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function DashboardButton() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log("Session:", session);
    console.log("Status:", status);
  }, [session, status]);
  if (status === "authenticated" && session?.user.role === "ADMIN1") {
    return (
      <button className="rounded-md text-montserrat px-8 p-2 bg-orange-400">
        <Link href={"/dashboard"}>Dashboard</Link>
      </button>
    );
  }
}
