import { FaExternalLinkAlt } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface ListGridWithIconsProps {}

export function ListGridWithIcons(props: ListGridWithIconsProps) {
  return (
    <div className="grid grid-cols-12 gap-0 h-screen bg-white place-content-center text-black py-40">
      <div className="col-start-3 col-span-10 mb-8">
        <p className="text-5xl">Services</p>
        <p className="text-[2.125rem] font-bold">What we can do for you</p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-7 md:col-start-3 border-2 border-black text-center p-5">
        <div className="text-[1.125rem] font-bold flex-col">
          <div className="flex-initial">Performance</div>
        </div>
        <p>
          Using best practices with industry-standard testing tools for SEO,
          page speed, and accessibility.
        </p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 border-2 border-black text-center lg:mr-4 p-5">
        <div className="text-[1.125rem] font-bold flex-col">
          <div className="flex-initial">Design</div>
        </div>
        <p>
          In collaboration with our team, rethink how your business does
          business online through design sprints, accelerators, and workshops.
          We make systems that work.
        </p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-7 md:col-start-3 border-2 border-black text-center p-5">
        <div className="text-[1.125rem] font-bold flex-col">
          <div className="flex-initial">Development</div>
        </div>
        <p>
          Let our team of award-winning developers and engineers build your next
          project.
        </p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-3 md:col-start-3 border-2 border-black text-center lg:mr-4 p-5">
        <div className="text-[1.125rem] font-bold flex-col">
          <div className="flex-initial">Operations</div>
        </div>
        <p>
          Reduce complexity and update the workflow of your current website with
          our team as advisors.
        </p>
      </div>
      <div className="lg:col-span-4 md:col-span-8 lg:col-start-7 md:col-start-3 border-2 border-black text-center p-5">
        <div className="text-[1.125rem] font-bold flex-col">
          <div className="flex-initial">Security</div>
        </div>
        <p>
          Get into compliance by securing data and establishing access and
          identity management for your web properties.
        </p>
      </div>
    </div>
  );
}

export default ListGridWithIcons;
