import { format, parseISO } from 'date-fns';

export const parseDate = (dateString: string): string => {
  const isoDate = parseISO(dateString);

  return format(isoDate, 'LLLL d, yyyy');
};
