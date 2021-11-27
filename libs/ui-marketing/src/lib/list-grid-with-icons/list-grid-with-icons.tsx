/* eslint-disable-next-line */
export interface ListGridWithIconsProps {}

export function ListGridWithIcons(props: ListGridWithIconsProps) {
  return (
    <div className="mx-auto container lg:px-8 min-h-screen py-24">
      <div className="grid grid-cols-12 gap-0 h-screen place-content-center text-black py-40">
        <div className="col-start-3 col-span-10 mb-12">
          <p className="text-5xl">Services</p>
          <p className="text-[2.125rem] font-bold">What we can do for you</p>
        </div>
        <div className="lg:col-span-5 md:col-span-8 lg:col-start-3 md:col-start-3 lg:mr-3">
          <div className="border-2 border-black text-center p-5">
            <div className="text-[1.125rem] font-bold h-12">
              <img alt="" src="performance-logo.svg" className="inline-block mr-2" />
              <div className="inline-block">Performance</div>
            </div>
            <p>
              Using best practices with industry-standard testing tools for SEO,
              page speed, and accessibility.
            </p>
          </div>
          <div className="bg-black h-6 w-0 mx-auto border-black border-l-2 border-r-0" />
        </div>
        <div className="lg:col-span-5 md:col-span-8 lg:col-start-8 md:col-start-3 lg:ml-3">
          <div className="border-2 border-black text-center p-5">
            <div className="text-[1.125rem] font-bold">
              <img alt="" src="icon-design.png" className="inline-block mr-2" />
              <div className="inline-block">Design</div>
            </div>
            <p>
              In collaboration with our team, rethink how your business does
              business online through design sprints, accelerators, and
              workshops. We make systems that work.
            </p>
          </div>
          <div className="bg-black h-6 w-0 mx-auto border-black border-l-2 border-r-0" />
        </div>
        <div className="lg:col-span-5 md:col-span-8 lg:col-start-3 md:col-start-3 lg:mr-3">
          <div className="border-2 border-black text-center p-5">
            <div className="text-[1.125rem] font-bold">
              <img alt="" src="icon-design.png" className="inline-block mr-2" />
              <div className="inline-block">Development</div>
            </div>
            <p>
              Let our team of award-winning developers and engineers build your
              next project.
            </p>
          </div>
          <div className="bg-black h-6 w-0 mx-auto border-black border-l-2 border-r-0" />
        </div>
        <div className="lg:col-span-5 md:col-span-8 lg:col-start-8 md:col-start-3 lg:ml-3">
          <div className="border-2 border-black text-center p-5">
            <div className="text-[1.125rem] font-bold">
              <img alt="" src="icon-design.png" className="inline-block mr-2" />
              <div className="inline-block">Operations</div>
            </div>
            <p>
              Reduce complexity and update the workflow of your current website
              with our team as advisors.
            </p>
          </div>
          <div className="bg-black h-6 w-0 mx-auto border-black border-l-2 border-r-0 lg:hidden" />
        </div>
        <div className="lg:col-span-5 md:col-span-8 lg:col-start-3 md:col-start-3 lg:mr-3">
          <div className="border-2 border-black text-center p-5">
            <div className="text-[1.125rem] font-bold">
              <img alt="" src="icon-design.png" className="inline-block mr-2" />
              <div className="inline-block">Security</div>
            </div>
            <p>
              Get into compliance by securing data and establishing access and
              identity management for your web properties.
            </p>
          </div>
          <div className="bg-black h-6 w-0 mx-auto border-black border-l-2 border-r-0 lg:hidden" />
        </div>
      </div>
    </div>
  );
}

export default ListGridWithIcons;
