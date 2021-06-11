export const getStrapiMedia = (url: string) => {
  // Check if URL is a local path
  if (url.startsWith('/')) {
    console.log('url start with ======>', `${process.env.API_URL}${url}`);
    // Prepend Strapi address
    return `${process.env.API_URL}${url}`;
  }

  console.log('url ======>', url);
  // Otherwise return full URL
  return url;
};
