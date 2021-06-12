const slugify = (s: string) => {
  return s
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '');
};

export const generateWeekendUrl = (title: string, id: number) => {
  return `/${slugify(title)}_${id}`;
};
