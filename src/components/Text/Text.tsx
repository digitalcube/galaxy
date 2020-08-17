import React from 'react';

type Text = {
  children?: React.ReactNode;
};

export const Text: React.FC<Text> = ({ children = null }) => {
  if (!children) return null;
  return <div dangerouslySetInnerHTML={{ __html: children }} />;
};
