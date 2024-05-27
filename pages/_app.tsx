import { SearchProvider } from "@/context/SearchContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </SessionProvider>
  );
}
