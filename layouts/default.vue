<template>
  <div>
    <Header />
    <!-- <div class="sm:block hidden">sm 640</div>
    <div class="md:block hidden">md 768</div>
    <div class="lg:block hidden">lg 1024</div>
    <div class="xl:block hidden">xl 1280</div>
    <div class="2xl:block hidden">2xl 1536</div> -->
    <div class="container bg-red-800">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/header.vue';
import Footer from '~/components/footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
