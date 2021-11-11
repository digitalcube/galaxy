import { FaExternalLinkAlt } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface ListGridProps {}

export function ListGrid(props: ListGridProps) {
  return (
    <div className="mx-auto grid grid-cols-12 h-screen bg-black place-content-center text-white py-40">
      <div className="col-start-3 col-span-8 mb-8">
        <p className="text-5xl">Open Source</p>
        <p className="text-[2.125rem] font-bold">What we're working on</p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 hover:underline mb-8">
        <a href="https://amimoto-ami.com/">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">Amimoto AMI</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Our one-click AMIs are the easiest and easiest way to launch
            WordPress in the cloud.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 mb-8 hover:underline">
        <a href="https://github.com/digitalcube/shifter-static-local">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">Shifter Local</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Docker image for testing WordPress themes and plugins while
            migrating to Shifter.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <a href="https://github.com/getshifter/wp-serverless-forms">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">WP Serverless Forms</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Replace PHP contact form actions with HTTP endpoints such IFTTT,
            Basin and more.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 hover:underline mb-8">
        <a href="https://github.com/getshifter/wp-serverless-search">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">WP Serverless Search</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Search thousands of posts in milliseconds, with fuzzy matching and
            support for custom themes.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <a href="https://amimoto-ami.com/products/aws-cloudformation-wordpress/">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">Jinkei</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Simultaneously launch EC2, RDS, Load Balancers and more for
            WordPress using Amimoto AMI.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-8 md:col-start-3 hover:underline mb-8">
        <a href="https://www.figma.com/community/file/956241516043940295/Shifter-Components-for-Galaxy">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">Galaxy Design Components</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>
            Figma library containing a wide range of components for the Galaxy
            design system.
          </p>
        </a>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 mb-8 hover:underline">
        <a href="https://www.npmjs.com/package/@shifter/cli">
          <div className="text-[1.125rem] font-bold flex">
            <div className="flex-initial">Shifter CLI</div>
            <FaExternalLinkAlt className="ml-2 pt-1.5 flex-initial" />
          </div>
          <p>Use WordPress as a headless CMS</p>
        </a>
      </div>
    </div>
  );
}

export default ListGrid;
