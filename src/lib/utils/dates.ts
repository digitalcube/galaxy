import moment from 'moment';
import 'moment-duration-format';

export { publishedDate };

type PublishedDate = {
  date?: string;
};

const publishedDate = ({ date }: PublishedDate) => {
  const d = moment(date).calendar(null, {
    sameDay: `[Today]`,
    lastWeek: `MMMM DD`,
    lastDay: `[Yesterday]`,
    sameElse: `DD MMMM YYYY`,
  });
  return d;
};
