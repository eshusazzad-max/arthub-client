"use client";

import ArtworkCard from "./ArtworkCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function RelatedArtworksSlider({
  relatedArtworks,
}: {
  relatedArtworks: any[];
}) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {relatedArtworks.map((art) => (
        <SwiperSlide key={art.id}>
          <ArtworkCard artwork={art} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}