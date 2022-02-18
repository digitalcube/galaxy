/* eslint-disable-next-line */
export type BlogRecentPostsProps = {
  posts: Record<string, string>;
  post: any;
  category: Record<string, string>;
  headline: string;
  description: string;
};

const everyNth = (arr: any, nth: number) =>
  arr.filter((e: any, i: number) => i % nth === nth - 1);

function Posts(props: any) {
  const { posts } = props;
  return posts.map((post: any, i: number) => (
    <div
      key={i}
      className={`${
        post === everyNth(posts, 4)[0]
          ? `row-span-3 col-span-1`
          : `row-span-1 col-span-2`
      }`}
    >
      <div
        key={`${post.name}`}
        className={`overflow-hidden ${
          post === everyNth(posts, 4)[0] ? `flex flex-col` : `grid grid-cols-3`
        }`}
      >
        <div className="col-span-1">
          <img
            className="h-full w-full object-cover"
            src={`${post.image}`}
            alt=""
          />
        </div>
        <div
          className={`col-span-2 bg-white ${
            post === everyNth(posts, 4)[0] ? `py-6` : `px-6 mb-4`
          }`}
        >
          <p className="text-size-4 text-gray-600">
            <a href={post.category.href} className="hover:underline">
              {post.category.name}
            </a>
          </p>
          <a href={post.href} className="block mt-2">
            <p className="text-size-6 text-gray-800 font-bold">{post.name}</p>
          </a>
          <div className="mt-6 flex items-center">
            <p className="text-size-4 text-gray-700">
              <a href={post.author.href} className="hover:underline">
                {post.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-size-4 text-gray-600">
              <span className="px-1">|</span>
              <time dateTime={post.datetime}>{post.date}</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
}

export function BlogRecentPosts(props: BlogRecentPostsProps) {
  const { headline, description } = props;
  return (
    <div className="container mx-auto pb-48">
      <div className="max-w-7xl mx-auto pt-16 px-4 sm:pt-24 sm:px-6 lg:px-8 pb-20">
        <div className="text-center space-y-2">
          <h2 className="max-w-2xl text-size-8 text-gray-800 font-bold lg:mx-auto">
            {headline}
          </h2>
          <p className="text-gray-600 text-size-6">{description}</p>
        </div>
      </div>
      <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-8">
        {Posts}
      </div>
    </div>
  );
}

export default BlogRecentPosts;

BlogRecentPosts.defaultProps = {
  headline: 'Read the latest',
  description: 'Get the news on product updates, events, and the industry.',
  posts: [
    {
      name: 'Introducing Pickup Philly, an open-source business directory built on the Jamstack',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      image:
        'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '6 min',
      author: {
        name: 'Dan Olson',
        href: '#',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      name: 'Upgrade your business with a purpose-built form and Shifter Static integration',
      href: '#',
      category: { name: 'Video', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      image:
        'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '4 min',
      author: {
        name: 'Brenna Goyette',
        href: '#',
        image:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      name: 'Upgrade your business with a purpose-built form and Shifter Static integration',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      name: 'Upgrade your business with a purpose-built form and Shifter Static integration',
      href: '#',
      category: { name: 'Case Study', href: '#' },
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      image:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
      readingTime: '11 min',
      author: {
        name: 'Daniela Metz',
        href: '#',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ],
};
