import Image from "next/image";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TopDeal() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Scrollbar]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={4}
      >
        <SwiperSlide>
          <Image
            alt="land"
            src="/public/land.jpeg"
            width={230}
            height={230}
            className="cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
