import React from "react";
import Navbar from "./Navbar";

type prop = {
  children: React.ReactNode;
};

export default function Layout({ children }: prop) {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-orange-300 to-orange-600">
      <Navbar />
      {children}
    </div>
  );
}
