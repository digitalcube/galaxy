import React from 'react';
import { FC } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

type Slider = {
  slidesPerView?: number;
  centeredSlides?: boolean;
  spaceBetween?: number | undefined;
  nodes?: any;
};

type Slides = {
  nodes?: any;
  node?: any;
};

const slides = ({ nodes }: Slides) => {
  if (!nodes) return;
  const i = nodes.map((node: Slides, i: number) => {
    return <SwiperSlide key={i}>{node.node}</SwiperSlide>;
  });

  return i;
};

export const Slider: FC<Slider> = ({
  nodes,
  slidesPerView,
  centeredSlides,
}: Slider) => {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={slidesPerView}
      loop={true}
      centeredSlides={centeredSlides}
      autoplay={{ delay: 2000 }}
      speed={3000}
    >
      {slides({ nodes: nodes })}
    </Swiper>
  );
};

Slider.defaultProps = {
  slidesPerView: 6,
  centeredSlides: true,
  nodes: [
    {
      node: 'Slide',
    },
    {
      node: 'Slide',
    },
  ],
};
