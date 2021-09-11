import NextHead from 'next/head';

/* eslint-disable-next-line */
export interface HeadProps {
  title: string;
}

export function Head(props: HeadProps) {
  const { title } = props;
  return (
    <NextHead>
      <title>{title}</title>
      <link rel="stylesheet" href="https://use.typekit.net/rrt0shs.css" />
    </NextHead>
  );
}

export default Head;

Head.defaultProps = {
  title: 'Shifter',
};
