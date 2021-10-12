import { Button, Input } from '@galaxy/ui';

/* eslint-disable-next-line */
export interface CTAGetStartedProps {}

export function CTAGetStarted(props: CTAGetStartedProps) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden relative bg-purple-800">
        <img className="w-full absolute" src="/bg-geo-gradient.svg" alt="" />
        <div className="max-w-5xl mx-auto text-center py-4 px-4 sm:py-16 sm:px-6 lg:px-8 relative">
          <p className="text-size-4 text-purple-300 font-bold">
            Get started for free
          </p>
          <h2 className="mt-6 text-size-7 font-bold text-white">
            Ready to take your site to the next level?
          </h2>
          <p className="mt-2 mb-6 text-size-5 text-purple-50">
            Shifter is the solution for fast, maintenance-free WordPress
            websites.
          </p>
          <div className="mt-8 sm:max-w-lg sm:mx-auto">
            <div className="relative focus-within:text-purple-800">
              <Input placeholder="Enter your email" />
              <Button className="absolute inset-y-0 right-0 rounded-l-none">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTAGetStarted;
