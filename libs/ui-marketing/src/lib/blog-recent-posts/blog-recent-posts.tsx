/* eslint-disable-next-line */
export interface BlogRecentPostsProps {}

export function BlogRecentPosts(props: BlogRecentPostsProps) {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-10">
      <div className="col-span-8 bg-purple-100">1</div>
      <div className="col-span-8 bg-purple-200">2</div>
      <div className="col-span-8 bg-purple-300">3</div>
      <div className="row-span-3 col-span-4 bg-purple-400">4</div>
    </div>
  );
}

export default BlogRecentPosts;
