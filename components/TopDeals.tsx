import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Land from "@/public/land.jpeg";
import Crop from "@/public/agriculture.jpg";
import Art from "@/public/art.jpeg";
import Car from "@/public/car.jpeg";
import Gem from "@/public/gem.jpeg";
import House from "@/public/house.jpeg";

export default function TopDeal() {
  return (
    <section className="mt-36 p-5 m-5">
      <div className="mb-2 text-xl font-light">Top Deals :</div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Scrollbar]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={40}
        slidesPerView={4}
        className="md:h-40"
      >
        <SwiperSlide>
          <Image
            content="fill"
            alt="land"
            src={Land}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="crop"
            src={Crop}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="art"
            src={Art}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="car"
            src={Car}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="house"
            src={House}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="gem"
            src={Gem}
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
