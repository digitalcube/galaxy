import React from 'react';
import { Post, PostProps } from './Post';
import { defaultStorybookConfig } from '../../.storybook/docs';
export default {
  ...defaultStorybookConfig,
  component: Post,
  title: `Shifter/Templates/Post`,
};
const props: PostProps = {
  title: `Velit a non Consectetur Sint Offica Sunt Commodo ad Proident`,
  category: `Proident`,
  author: `Magna Aliqua`,
  date: `Velit 4, 2049`,
  content: `<p>You’ve been asking for it and it’s officially here: you can now schedule deploys on Shifter Static. That means that it’s now possible to create a new artifact and choose a later time to publish that artifact as your live site.</p> <p>On Shifter static, WordPress runs in a temporary environment. Up until now that temporary environment could only be started manually or through the <a href="https://www.npmjs.com/package/@shifter/node">Shifter API</a>. But with scheduled posting, you can make changes to your website, decide when you would like them to be published, and the artifacts will be deployed to your live site automatically. It’s important to keep in mind that it’s not just a single post that will updated, when you schedule a deploy, you entire site will change. Multiple pages, posts, products, and more can all be deployed at once. This feature is especially helpful when running campaigns, planning your posts ahead of time, or any other situation where content is time sensitive.  </p> <h2>Let’s try it out</h2> <p>Getting set up with scheduled posts is easy, and you may have already noticed it added to your Shifter dashboard. </p> <p>Once you’ve created an artifact that you would like to schedule, scroll to that artifact and click the “Detail” button. </p> <figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/xpbxOeTOD5LcHX8kz8aCx-uz0vfSchBKibJuL3MIMQqZ-d524JVrqtUghffu5XgNu8PQgjUJcgHtoAB1S4ZBmRp3Y1sgpgP7BzWJcrL9vYOB8o8LRGqpO0JUhwjb97vWkFngONyd" alt=""/></figure> <p>Next, scroll to the section labeled “Scheduled Publish” Click the calendar icon, choose the date you would like to publish. You can also add a time of day. </p> <figure class="wp-block-image"><img src="https://lh6.googleusercontent.com/U8K2CZUTS1YaWoaw7ksGgZ726EzENLVshH6ZlM8ijpbG9wNkfR7GY0HBCp1lVdUsEaapQOT908JdD88GXaQBwpAnHzPhS09haPPa_WcpaIbz3HtzWX14ClnOMDrw4lcb3HT2zzrz" alt=""/></figure> <p>Once the date and time is correct, click the “Schedule” button. </p> <figure class="wp-block-image"><img src="https://lh5.googleusercontent.com/t86nlUzzcYgTWpsiVzx9ND6p_YgKTnBuOXA8H_BUjJxQM5bP-9Yj02P8NGKAhqoMttoNXB7nnC3z9vyxJTGHyeOGeBF3HR90VfXT_RUkXNBM9GENHn-lX6UwSdbr67ZVSYJO9qU5" alt=""/></figure> <p>And that’s it! Your artifact will now be published automatically at the time and date you’ve chosen. </p> <p>This is yet another feature that has been added to Shifter due to customer feedback. All of our development is driven by your feedback, so if you try scheduled posting let us know how it goes, we’d love to hear from you.</p>`,
};

export const Default = () => <Post {...props} />;
