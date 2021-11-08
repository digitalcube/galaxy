import Link from 'next/link';

/* eslint-disable-next-line */
export interface TestComponentProps {}

export function TestComponent(props: TestComponentProps) {
  return (
    <div className="grid grid-cols-12 h-screen bg-black place-content-center text-white py-40">
      <div className="col-start-3 col-span-8 mb-8">
        <p className="text-5xl">Open Soure</p>
        <p className="text-[2.125rem] font-bold">What we're working on</p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 hover:underline mb-8">
        <Link href="https://amimoto-ami.com/">
          <p className="text-[1.125rem] font-bold">Amimoto AMI</p>
          <p>
            Our one-click AMIs are the easiest and easiest way to launch
            WordPress in the cloud.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 mb-8 hover:underline">
        <Link href="https://github.com/digitalcube/shifter-static-local">
          <p className="text-[1.125rem] font-bold">Shifter Local</p>
          <p>
            Docker image for testing WordPress themes and plugins while
            migrating to Shifter.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <Link href="https://github.com/getshifter/wp-serverless-forms">
          <p className="text-[1.125rem] font-bold">WP Serverless Forms</p>
          <p>
            Replace PHP contact form actions with HTTP endpoints such IFTTT,
            Basin and more.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 hover:underline mb-8">
        <Link href="https://github.com/getshifter/wp-serverless-search">
          <p className="text-[1.125rem] font-bold">WP Serverless Search</p>
          <p>
            Search thousands of posts in milliseconds, with fuzzy matching and
            support for custom themes.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <Link href="https://amimoto-ami.com/products/aws-cloudformation-wordpress/">
          <p className="text-[1.125rem] font-bold">Jinkei</p>
          <p>
            Simultaneously launch EC2, RDS, Load Balancers and more for
            WordPress using Amimoto AMI.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 hover:underline mb-8">
        <Link href="https://www.figma.com/community/file/956241516043940295/Shifter-Components-for-Galaxy">
          <p className="text-[1.125rem] font-bold">Galaxy Design Components</p>
          <p>
            Figma library containing a wide range of components for the Galaxy
            design system.
          </p>
        </Link>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <Link href="https://www.npmjs.com/package/@shifter/cli">
          <p className="text-[1.125rem] font-bold">Shifter CLI</p>
          <p>Use WordPress as a headless CMS</p>
        </Link>
      </div>
    </div>
  );
}

export default TestComponent;
