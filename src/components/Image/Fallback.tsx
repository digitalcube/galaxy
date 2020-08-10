import React from 'react';
import { Image } from './Image';

export const Fallback: React.FC<> = () => (
  <Image>
    <img
      alt=""
      src="https://www.getshifter.io/static/2902f1abacb62522fbf45bfd5c5babdd/24a5b/blog-feature-statcVheadless.png"
    />
  </Image>
);
