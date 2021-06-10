import { Plugin } from '@nuxt/types';
import { initializeStrapi } from '../utils/api';

const accessor: Plugin = ({ $strapi }) => {
  initializeStrapi($strapi);
};

export default accessor;
