import axios from 'axios';
// eslint-disable-next-line nuxt/no-cjs-in-config
import { generateWeekendUrl } from './utils/url.ts';

export const strapiBaseUri = process.env.API_URL || 'http://localhost:1337';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  env: {
    API_URL: strapiBaseUri,
  },

  // loading: '~/components/loading.vue',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Festival Un temps pour Elles, 19 concerts dans le Val d'Oise",
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Un temps pour Elles, ces compositrices oubliées mais également ces grandes femmes de l histoire qui ont forgé et inspiré des lieux emblématiques.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/logo-elles.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/strapi-accessor.ts', { src: '@/plugins/vue-awesome-swiper.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://image.nuxtjs.org/getting-started/installation
    '@nuxt/image',
    '@nuxtjs/netlify-files',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/strapi',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Strapi
  strapi: {
    entities: ['weekends'],
    url: strapiBaseUri,
  },

  // Google fonts
  googleFonts: {
    families: {
      Alegreya: true,
    },
  },

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
  },

  // markdownit: {
  //   runtime: true, // Support `$md()`
  // },

  sitemap: {
    hostname: 'https://festival-untempspourelles.com',
    routes: async () => {
      const res = await axios.get(`${strapiBaseUri}/festival-weekends`);
      return res.data.map((weekend) => {
        return generateWeekendUrl(weekend.title, weekend.id);
      });
    },
  },
};
