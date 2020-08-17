// // src/components/PostList.stories.js

// import React from 'react';
// import { PostList } from './PostList';
// import { postData } from './Post.stories';

// export default {
//   component: PostList,
//   title: `Components/Post List`,
//   decorators: [
//     (story: any) => <div style={{ padding: `3rem` }}>{story()}</div>,
//   ],
//   excludeStories: /.*Data$/,
// };

// export const postListData = [
//   {
//     content: {
//       ...postData,
//       title: `Announcing the Shifter Gatsby Recipe`,
//     },
//   },
//   {
//     content: {
//       ...postData,
//       title: `Scheduled Publishing is now available on Shifter Static`,
//     },
//   },
//   {
//     content: {
//       ...postData,
//       title: `Shifter Media CDN Is Now Out of Beta`,
//     },
//   },
//   {
//     content: {
//       ...postData,
//       title: `Using Shifter Headless with Gridsome and AWS Amplify`,
//     },
//   },
//   {
//     content: {
//       ...postData,
//       title: `Using Shifter Static Automatic WordPress backups.`,
//     },
//   },
//   {
//     content: {
//       ...postData,
//       title: `Using AWS Amplify with Gatsby and Shifter Headless`,
//     },
//   },
// ];

// export const Default = () => <PostList content={postListData} col={4} />;
