<template>
  <section>
    <div class="bg-black pb-10">
      <div class="flex justify-between">
        <NuxtLink to="/">
          <img class="bg-white" src="../assets/logo-un-temps-pour-elles.png" alt="Logo festival un temps pour elle" />
        </NuxtLink>
        <div class="grid grid-rows-3">
          <div class="row-span-2">
            <div class="grid grid-cols-2 h-full">
              <div class="col-start-2 flex justify-center">
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.facebook.com/Festival-Un-temps-pour-Elles-104669604665183"
                >
                  <img class="mx-3 w-10" src="~assets/facebook.svg" />
                </a>
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.instagram.com/ellescreativewomen/"
                >
                  <img class="mx-3 w-10" src="~assets/instagram.svg" />
                </a>
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCEgIu9tRclQYh9GDYfMjiWA"
                >
                  <img class="mx-3 w-10" src="~assets/youtube.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 text-white mt-5">
        <div>Presse</div>
        <div>
          <p>Nous découvrir</p>
          <p>Programmation</p>
          <p>Informations Pratiques</p>
          <p>Mentions légales</p>
          <a href="mailto:untempspourelles2021@gmail.com" class="text-black bg-white w-max py-1 px-2 mt-1"
            >Contact festival</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style></style>
