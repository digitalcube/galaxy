import { Button } from '@galaxy/ui';

/* eslint-disable-next-line */
export interface CTASimpleLeftProps {}

export function CTASimpleLeft(props: CTASimpleLeftProps) {
  return (
    <div className="container mx-auto overflow-hidden relative bg-purple-800 rounded">
      <div className="absolute inset-0">
        <img
          className="w-auto h-full object-cover object-right"
          src="/geo-background-1.svg"
          alt=""
        />
      </div>
      {/* <img
        src="/geo-background-1.svg"
        alt=""
        className="absolute w-full object-fill h-full left-0"
      /> */}
      <div className="mx-auto py-8 px-12 relative">
        <p className="text-size-4 text-purple-300 font-bold">The Latest</p>
        <h2 className="mt-1 mb-5 text-size-7 font-bold text-white">
          Introducting PHP Error Logs
        </h2>
        <Button children="Sign up for free" />
      </div>
    </div>
  );
}

export default CTASimpleLeft;
