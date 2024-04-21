import React from "react";
import Navbar from "./Navbar";

type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-yellow-200 to-black">
      <Navbar />
      {children}
    </div>
  );
}
