import moment from 'moment';
import 'moment-duration-format';

export const publishedDate = ({ date }: {
  date: string;
}) => {
  const d = moment(date).calendar(null, {
    sameDay: `[Today]`,
    lastWeek: `MMMM DD`,
    lastDay: `[Yesterday]`,
    sameElse: `DD MMMM YYYY`,
  });
  return d;
};
