export const getStrapiMedia = (url: string) => {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    // Prepend Strapi address
    return `${process.env.API_URL}${url}`;
  }

  // Otherwise return full URL
  return url;
};
