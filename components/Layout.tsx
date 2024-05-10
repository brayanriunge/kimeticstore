import React from "react";
import Navbar from "./Navbar";

type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-100 via-gray-300 to-zinc-100">
      <Navbar />
      {children}
    </div>
  );
}
