import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export interface LogosSimpleProps {
  logos: Record<string, unknown>;
  el: any;
}

export function LogosSimple(props: LogosSimpleProps) {
  const el = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    const duration = 0.7;
    const animations = [];

    gsap.utils.toArray(el.current.children).forEach((element) => {
      const animation = gsap.to(element, {
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'center 70%',
          end: 'center 30%',
          markers: true,
          onEnter: () => {
            gsap.to(element, {
              y: -50,
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
              y: -50,
              duration,
              opacity: 1,
            });
          },
          onLeaveBack: () => {
            gsap.to(element, {
              y: 0,
              duration,
              opacity: 0,
            });
          },
        },
      });

      animations.push(animation);
    });

    return () => {
      animations.forEach((animation) => animation.scrollTrigger.kill());
    };
  }, []);

  return (
    <div className="bg-white text-center py-24" ref={el}>
      <h1 className="text-size-5 pb-16">Our technology partners</h1>
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {props.logos.map((logo, i) => (
            <div
              key={i}
              className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"
            >
              <img className="w-24" src={logo.image} alt={logo.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogosSimple;

LogosSimple.defaultProps = {
  logos: [
    { title: 'Soracom', image: 'soracom-logo-gray-300.svg' },
    { title: 'Infobahn', image: 'infobahn-logo-gray-300.svg' },
    { title: 'Mikihouse', image: 'mikihouse-logo-gray-300.svg' },
    { title: 'Docomo', image: 'docomo-logo-gray-300.svg' },
    { title: 'MHI', image: 'mhi-logo-gray-300.svg' },
    { title: 'Lixil', image: 'lixil-logo-gray-300.svg' },
  ],
};
