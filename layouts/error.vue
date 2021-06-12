<template>
  <div>
    <h1 v-if="error.statusCode === 404">Oups, vous semblez perdu !</h1>
    <h1 v-else>Une erreur s'est produite</h1>
    <NuxtLink to="/">Retour sur le site du Festival UN TEMPS POUR ELLES</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'error',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'], // you can set a custom layout for the error page
};
</script>
