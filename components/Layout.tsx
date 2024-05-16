import React from "react";
import Navbar from "./Navbar";
import { User } from "next-auth";

type prop = {
  children: React.ReactNode;
};

type PropUser = {
  user: User;
};

export default function Layout({ children }: prop, { user }: PropUser) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-100 via-gray-300 to-zinc-100">
      <Navbar user={user} />
      {children}
    </div>
  );
}
