import { format, parseISO } from 'date-fns';

export const parseDate: (dateString: string) => string = (
  dateString: string,
) => {
  const date = parseISO(dateString);
  return format(date, 'LLLL d, yyyy');
};
