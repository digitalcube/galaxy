import moment from 'moment';
import 'moment-duration-format';

type PublishedDate = {
  date?: string;
};

export const publishedDate = ({ date }: PublishedDate) => {
  const d = moment(date).calendar(null, {
    sameDay: `[Today]`,
    lastWeek: `MMMM DD`,
    lastDay: `[Yesterday]`,
    sameElse: `DD MMMM YYYY`,
  });
  return d;
};
