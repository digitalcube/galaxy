/* eslint-disable-next-line */
export interface TestComponentProps {}

export function TestComponent(props: TestComponentProps) {
  return (
    <div className="grid grid-cols-12 h-screen bg-black place-content-center text-white py-40">
      <div className="col-start-3 col-span-6 mb-8">
        <p className="text-5xl">Open Soure</p>
        <p className="text-[2.125rem] font-bold">What we're working on</p>
      </div>
      <div className="col-span-4 col-start-3">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">Amimoto AMI</p>
          <p>
            Our one-click AMIs are the easiest and easiest way to launch
            WordPress in the cloud.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-8">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">Shifter Local</p>
          <p>
            Docker image for testing WordPress themes and plugins while
            migrating to Shifter.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-3">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">WP Serverless Forms</p>
          <p>
            Replace PHP contact form actions with HTTP endpoints such IFTTT,
            Basin and more.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-8">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">WP Serverless Search</p>
          <p>
            Search thousands of posts in milliseconds, with fuzzy matching and
            support for custom themes.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-3">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">Jinkei</p>
          <p>
            Simultaneously launch EC2, RDS, Load Balancers and more for
            WordPress using Amimoto AMI.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-8">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">Galaxy Design Components</p>
          <p>
            Figma library containing a wide range of components for the Galaxy
            design system.
          </p>
        </div>
      </div>
      <div className="col-span-4 col-start-3">
        <div className="mb-8">
          <p className="text-[1.125rem] font-bold">Shifter CLI</p>
          <p>Use WordPress as a headless CMS</p>
        </div>
      </div>
    </div>
  );
}

export default TestComponent;
