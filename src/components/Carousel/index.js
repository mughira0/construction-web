// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Carousel({
  slides,
  autoplay,
  navigation = true,
  onSlideChange,
}) {
  return (
    <>
      <Swiper
        autoplay={autoplay}
        navigation={navigation}
        onSlideChange={onSlideChange}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides?.map((ele, index) => (
          <SwiperSlide key={index}> {ele}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
