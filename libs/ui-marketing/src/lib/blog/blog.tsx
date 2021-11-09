import { MapComponents } from '@galaxy/ui';
import { BlogRecentPosts } from '@galaxy/ui-marketing';

/* eslint-disable-next-line */
export interface BlogProps {
  pattern?: string;
}

const list = [
  { id: 1, type: 'BlogRecentPosts' },
];

export function Blog(props: BlogProps) {
  const { pattern } = props;
  const patternId = [list.find((i) => i.type === pattern)];
  return (
    <div>
      <MapToComponents
        getKey={(x) => x.id}
        getType={(x) => x.type}
        list={patternId}
        map={{
          BlogRecentPosts,
        }}
        mapDataToProps={{
          BlogRecentPosts: ({ data }) => ({ ...data }),
        }}
      />
    </div>
  );
}

export default Blog;
