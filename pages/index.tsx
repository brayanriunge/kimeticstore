import About from "@/components/About";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import TopDeal from "@/components/TopDeals";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:title" content="My page title" key="title" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
      <Navbar />
      <TopDeal />
      <Explore />
      <Service />
      <About />
      <Footer />
    </>
  );
}
