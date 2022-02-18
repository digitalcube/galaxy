import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import SwiperCore, { EffectFade } from 'swiper';

SwiperCore.use([EffectFade]);

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export interface CTAAboutUsProps {}

const features = [
  {
    name: 'We Study Emerging Technologies',
    description:
      'We do research and analyze emerging and under researched technologies and the implications for our clients.',
  },

  {
    name: 'We Offer Technology Services',
    description:
      'We are a team of WordPress experts and AWS Certified Engineers with experience collaborating with designers, entrepreneurs, enterprises, and startups.',
  },
  {
    name: 'We Offer Design Consulting',
    description:
      'Our Design Strategy service helps clients understand how the people they serve will use their products and services.',
  },
  {
    name: 'We Teach Emerging Technologies',
    description:
      'In the past we have offered that sponsored workshops about ReactJS and HTML5 to aspiring web developers. These workshops that serve as a bridge from reading tutorials online to mastering the fundamentals of these powerful development techniques.',
  },
];

export function CTAAboutUs(props: CTAAboutUsProps) {
  const el = useRef<HTMLDivElement>(null);

  // wait until DOM has been rendered
  useEffect(() => {
    const duration = 0.7;
    const animations: any = [];
    const children = el.current ? el.current.children : [];

    gsap.utils.toArray(children).forEach((element: any) => {
      const animation = gsap.to(element, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'center 70%',
          end: 'center 30%',
          onEnter: () => {
            gsap.to(element, {
              y: 0,
              duration,
              opacity: 1,
            });
          },
          onLeave: () => {
            gsap.to(element, {
              y: -100,
              duration,
              opacity: 0,
            });
          },
          onEnterBack: () => {
            gsap.to(element, {
              y: -0,
              duration,
              opacity: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(element, {
              y: 100,
              duration,
              opacity: 0,
            });
          },
        },
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation: any) => animation.scrollTrigger.kill());
    };
  }, []);

  return (
    <section
      className="lg:px-8 min-h-screen bg-black bg-shapes-1 bg-cover text-white pt-24"
      ref={el}
    >
      <div className="container mx-auto grid grid-cols-12 place-content-center">
        <div className="md:col-start-3 lg:col-start-3 lg:col-span-5 md:col-span-8 mt-10">
          <p className="text-size-5">How We Work</p>
          <h2 className="text-size-8 font-bold">Our Process</h2>
        </div>
        <div className="lg:col-start-8 lg:col-span-4 md:col-start-3 md:col-span-8 md:pt-6">
          <img
            alt=""
            src="spotIllustration-eye.svg"
            className="mb-8"
            width="71"
            height="93"
          />
          <div className="flex space-x-3">
            <BsCircleFill size="12" />
            <BsCircle size="12" />
            <BsCircle size="12" />
          </div>
          <Swiper
            tag="dl"
            className={`mt-6 lg:gap-8 `}
            slidesPerView={1}
            effect="fade"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {features.map((feature, i) => (
              <SwiperSlide key={i}>
                {({ isActive }) => (
                  <div
                    key={feature.name}
                    className={isActive ? 'visible' : 'invisible'}
                  >
                    <dt>
                      <p className="mt-4 text-size-7 font-bold">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-6 text-size-7">{feature.description}</dd>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default CTAAboutUs;
