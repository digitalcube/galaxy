import { Button } from '@galaxy/ui';

/* eslint-disable-next-line */
export interface CTASimpleCenteredProps {}

export function CTASimpleCentered(props: CTASimpleCenteredProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative bg-purple-800">
      <img
        src="/geo-background.svg"
        alt=""
        className="absolute left-0 right-0 top-0"
      />
      <div className="max-w-5xl mx-auto text-center py-4 px-4 sm:py-16 sm:px-6 lg:px-8">
        <p className="text-size-4 text-purple-300 font-bold">
          Get started for free
        </p>
        <h2 className="mt-6 text-size-7 font-bold text-white">
          Ready to take your site to the next level?
        </h2>
        <p className="mt-2 mb-6 text-size-5 text-purple-50">
          Shifter is the solution for fast, maintenance-free WordPress websites.
        </p>
        <Button children="Sign up for free" />
      </div>
    </div>
  );
}

export default CTASimpleCentered;
