import { Button, Input } from '@galaxy/ui';

/* eslint-disable-next-line */
export interface HeroSimpleCenteredProps {}

export function HeroSimpleCentered(props: HeroSimpleCenteredProps) {
  return (
    <div className="relative container mx-auto">
      <img
        src="/hero-background.svg"
        alt=""
        className="w-full absolute -top-1/2 z-[-10]"
      />
      <section className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24 relative">
        <div className="text-center relative">
          <h1 className="text-[4.5rem] font-bold text-purple-800 leading-tight">
            <span className="inline lg:block">Static WordPress in</span>{' '}
            <span>a single click</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-size-6 text-gray-800 md:mt-5 md:text-xl md:max-w-4xl">
            Using Shifter, create or migrate WordPress sites in minutes that are{' '}
            <b>scalable</b>, <b>secure</b> from attacks, and <b>100% static</b>{' '}
            with <b>no</b> security or caching plugins required.
          </p>
          <p className="pt-16 max-w-md mx-auto font-bold text-size-6 text-gray-800 md:max-w-4xl">
            See what the hype is all about
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto">
            <div className="relative focus-within:text-purple-800">
              <Input placeholder="Enter your email" />
              <Button className="absolute inset-y-0 right-0 rounded-l-none">
                Get Started
              </Button>
            </div>
            <p className="mt-4 text-size-5 text-gray-400">
              Start your free 7-day trial, no credit card necessary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSimpleCentered;
