import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Spacer, Heading, Content, Image } from '../index';
import { components } from '../../styles';
// import 'swiper/swiper.scss';

type Logos = {
  nodes?: Slide[];
  content?: {
    title?: string;
  };
};

export type Slide = {
  node: Object;
};

const nodesDefault = [
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/ffe74e144da991b2e626b7a0a78bd3e2/3fc3b/logo-lixil.png"
            alt="LIXIL"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/a2658d8f3ead05a877311f79474f169a/3fc3b/logo-docomo.png"
            alt="NTT docomo"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/3e210d8d40d591c5f417f42a0ac9d296/3fc3b/logo-mikihouse.png"
            alt="MIKI HOUSE"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/8976ea03ac4454c575d0d1a47e34d5dc/3fc3b/logo-vu.png"
            alt="University Amsterdam"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
            alt="HENNGE"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/3ebe60dc5f227bc436af5e71b8c6327f/3fc3b/logo-internetsociety.png"
            alt="Internet Society"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/ba6263244c43d10585bdf0215e35886b/3fc3b/logo-soracom.png"
            alt="Soracom"
          />
        </Image>
      </SwiperSlide>
    ),
  },
  {
    node: (
      <SwiperSlide>
        <Image>
          <img
            src="https://www.getshifter.io/static/ddc39223e6bd875a213e792560bf26e5/3fc3b/logo-hennge.png"
            alt="HENNGE"
          />
        </Image>
      </SwiperSlide>
    ),
  },
];

const slides = ({ nodes = [...nodesDefault, ...nodesDefault] }: Logos) => {
  if (!nodes) return;
  const i = nodes.map((node: Slide) => {
    return node.node;
  });

  return i;
};

export const Logos: React.FC<Logos> = ({
  content = {
    title: `Some of the world's leading businesses, thinkers, and creatives call Shifter home. `,
  },
}: Logos) => {
  const { title } = content;
  const spaceBetween = parseFloat(components.logos.gap) * 16;
  return (
    <section>
      <Spacer size="md">
        <Container size="md">
          <Content align="center">
            <Heading size="lg">{title}</Heading>
          </Content>
        </Container>
        <Spacer size="md" />
        <StyledSwiper
          spaceBetween={spaceBetween}
          slidesPerView={6}
          loop={true}
          centeredSlides={true}
          autoplay={{ delay: 2500 }}
        >
          {slides({ nodes: [...nodesDefault, ...nodesDefault] })}
        </StyledSwiper>
      </Spacer>
    </section>
  );
};

const StyledSwiper = styled(Swiper)`
  @font-face {
    font-family: 'swiper-icons';
    src: url('data:application/font-woff;charset=utf-8;base64, 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')
      format('woff');
    font-weight: 400;
    font-style: normal;
  }

  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  /* Fix of Webkit flickering */
  z-index: 1;

  .swiper-container-vertical > .swiper-wrapper {
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide,
  .swiper-wrapper {
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    flex-wrap: wrap;
  }
  .swiper-container-multirow-column > .swiper-wrapper {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
  }
  .swiper-slide-invisible-blank {
    visibility: hidden;
  }
  /* Auto Height */
  .swiper-container-autoheight {
    &,
    .swiper-slide {
      height: auto;
    }

    .swiper-wrapper {
      align-items: flex-start;
      transition-property: transform, height;
    }
  }

  /* 3D Effects */
  .swiper-container-3d {
    perspective: 1200px;
    .swiper-wrapper,
    .swiper-slide,
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom,
    .swiper-cube-shadow {
      transform-style: preserve-3d;
    }
    .swiper-slide-shadow-left,
    .swiper-slide-shadow-right,
    .swiper-slide-shadow-top,
    .swiper-slide-shadow-bottom {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 10;
    }
    .swiper-slide-shadow-left {
      background-image: linear-gradient(
        to left,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-right {
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-top {
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
    .swiper-slide-shadow-bottom {
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0)
      );
    }
  }

  /* CSS Mode */
  .swiper-container-css-mode {
    > .swiper-wrapper {
      overflow: auto;
      scrollbar-width: none; /* For Firefox */
      -ms-overflow-style: none; /* For Internet Explorer and Edge */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    > .swiper-wrapper > .swiper-slide {
      scroll-snap-align: start start;
    }
  }
  .swiper-container-horizontal.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: x mandatory;
    }
  }
  .swiper-container-vertical.swiper-container-css-mode {
    > .swiper-wrapper {
      scroll-snap-type: y mandatory;
    }
  }
`;
