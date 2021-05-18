import { format, parseISO } from 'date-fns';

const parseDate = (dateString: string): string => {
  const date = parseISO(dateString);
  return format(date, 'LLLL d, yyyy');
};

export default parseDate;
