import { format, parseISO, secondsToHours, secondsToMinutes } from 'date-fns';

export const parseDate = (dateString: string): string => {
  const isoDate = parseISO(dateString);

  return format(isoDate, 'LLLL d, yyyy');
};

export const formatSeconds = (seconds: number) => {
  const hours = secondsToHours(seconds);
  const minutes = secondsToMinutes(seconds) - hours * 60;

  return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 ? `${minutes}m` : ''}`;
};
