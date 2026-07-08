"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

const slides = [
  {
    src: "/bg1.jpg",
    alt: "Luxury Homes",
  },
  {
    src: "/bg2.jpg",
    alt: "Investment Opportunities",
  },
];

export default function HeroSlider() {
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh]">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Primary colour overlay – change opacity to taste */}
            <div className="absolute inset-0 bg-primary/70" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}