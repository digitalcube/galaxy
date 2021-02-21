import moment from 'moment';
import 'moment-duration-format';

// TODO: Fix circular dep or move to new lib for galaxy/utils
import { PublishedDate } from '@galaxy/views';

type PublishedDate = {
  date?: PublishedDate;
};

export const publishedDate = ({ date }: PublishedDate) => {
  const d = moment(date).calendar(null, {
    sameDay: `[today]`,
    lastWeek: `MMMM DD`,
    lastDay: `[testerday]`,
    sameElse: `DD MMMM YYYY`,
  });
  return d;
};
