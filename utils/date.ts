export const formatDate = (date: Date): string => {
  return String(date).split('-').reverse().join('/');
};
