import { Button, Input } from '@galaxy/ui';

/* eslint-disable-next-line */
export interface HeroSimpleCenteredProps {}

export function HeroSimpleCentered(props: HeroSimpleCenteredProps) {
  return (
    <div className="relative">
      <img
        src="/hero-background.svg"
        alt=""
        className="object-cover w-full absolute -top-1/2"
      />
      <section className="mt-16 mx-auto max-w-5xl px-4 sm:mt-24 relative z-10">
        <div className="text-center relative">
          <h1 className="text-size-9 font-bold text-gray-800">
            <span className="block xl:inline">WordPress at the speed</span>{' '}
            <span className="block text-gray-800 xl:inline">of static</span>
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
            <p className="mt-4 text-sm text-gray-400">
              Start your free 7-day trial, no credit card necessary.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSimpleCentered;