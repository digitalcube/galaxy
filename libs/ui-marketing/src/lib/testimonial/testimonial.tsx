import { url } from 'node:inspector';
import { CriticReview, Person } from 'schema-dts';

/* eslint-disable-next-line */
export type TestimonialProps = CriticReview & Person & { '@type': null };

export function Testimonial(props: TestimonialProps) {
  const { author, reviewBody, jobTitle, image } = props;
  return (
    <div className="bg-gradient-to-b from-purple-100 justify-center bg-geo-gradient relateive">
      <img className="w-full absolute" src="/bg-geo-gradient.svg" alt="" />
      <div className="max-w-4xl mx-auto py-36 px-4 sm:pt-24 sm:px-6 lg:px-8 flex space-x-8 relative">
        <img
          className="inline-block h-36 w-36 rounded-full"
          src={`${image}`}
          alt=""
        />
        <div className="space-y-2">
          <h2 className="text-purple-700 text-size-6 mb-6">{reviewBody}</h2>
          <p className="max-w-2xl text-size-6 text-purple-700">
            <span className="font-bold">{author}</span>
            {jobTitle ? `, ` + jobTitle : null}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

Testimonial.defaultProps = {
  reviewBody:
    '“I’ve been using this stack for 6 months now. Initially there was a little learning curve with the setup but now I’m flying on the command line and my website are fast! Yes you pay for software, but it’s worth it and you can get more performance out of a lower spec.”',
  jobTitle: 'Job Title',
  author: 'Name Name',
  image:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
