import About from "@/components/About";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import TopDeal from "@/components/TopDeals";

export default function Home() {
  return (
    <>
      <Navbar />
      <TopDeal />
      <Explore />
      <Service />
      <About />
      <Footer />
    </>
  );
}
