import React, { FC } from 'react';

type Image = {
  img?: string;
  alt?: string;
  variant?: string;
  imgDefault?: string;
  className?: string;
  caption?: string;
};

const Caption: FC<Image> = ({ caption }: Image) => {
  if (!caption) return null;
  return <figcaption>{caption}</figcaption>;
};

export const Image: FC<Image> = ({
  img,
  imgDefault,
  alt,
  className,
  caption,
}: Image) => {
  img = img === '' ? imgDefault : img;
  return (
    <figure>
      <img className={className} src={img} alt={alt} />
      <Caption caption={caption} />
    </figure>
  );
};
