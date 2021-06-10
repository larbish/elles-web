import { Strapi } from '@nuxtjs/strapi';

// eslint-disable-next-line import/no-mutable-exports
let $strapi: Strapi;

export const initializeStrapi = (strapiInstance: Strapi): void => {
  $strapi = strapiInstance;
};

export { $strapi };
