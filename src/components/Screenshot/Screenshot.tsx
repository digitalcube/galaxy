import React from 'react';

type Screenshot = {
  url: string;
  alt?: string;
};

export const createScreenshotURL = (url: string, size = 300): string => {
  const mShotsURL = `//s.wordpress.com/mshots/v1`;
  const screenshotSize = `?w=${size}`;
  return `${mShotsURL}/${url}/${screenshotSize}`;
};

export const Screenshot = ({ alt, url }: Screenshot) => (
  <>
    <img className="w-100" alt={alt} src={createScreenshotURL(url)} />
  </>
);

// // utils
// import {
//   getScreenshotUrl,
//   createScreenshotURL,
// } from "../../utils/projects/urls"

// // type
// import { projectDetailType } from "../../types/project"

// export const Screenshot = ({
//   project,
//   url,
//   className,
//   style,
// }: {
//   className?: string
//   project?: projectDetailType
//   url?: string
//   style?: { [key: string]: string }
// }) => {
//   if (!project && !url) return null
//   const targetURL = url ? createScreenshotURL(url) : getScreenshotUrl(project)
//   return (
//     <img
//       className={className}
//       src={targetURL}
//       alt="website screenshot"
//       style={style || {}}
//     />
//   )
// }
