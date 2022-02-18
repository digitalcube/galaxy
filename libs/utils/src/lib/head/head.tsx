import NextHead from 'next/head';

/* eslint-disable-next-line */
export interface HeadProps {
  title: string;
  icon: any;
}

export function Head(props: HeadProps) {
  const { title, icon } = props;
  return (
    <NextHead key={title}>
      <title>{title}</title>
      <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
      <link rel="icon" href={`${icon.href}`} sizes={`${icon.size}`} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  );
}

export default Head;

Head.defaultProps = {
  title: 'Galaxy',
  icon: {
    href: '',
    sizes: '',
  },
};
