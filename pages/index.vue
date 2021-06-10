<template>
  <section>
    <div class="flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <weekend-card v-for="weekend in weekends" :key="weekend.id" :weekend="weekend"></weekend-card>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 md:my-24">
      <nuxt-img class="m-auto py-10" src="/pauline_viardot.png" alt="Pauline Viardot un temps pour elle"></nuxt-img>
      <div class="flex flex-wrap content-center justify-end mt-0 mx-3 md:col-span-2 md:mx-0 text-elles-blue">
        <div class="flex items-center mb-6 w-2/3">
          <h2 class="pr-3">L'ÉDITO</h2>
          <div class="h-0.5 bg-blue-800 flex-1"></div>
        </div>
        <p class="text-justify md:text-lg text-sm">
          Pour sa deuxième édition, le festival Un temps pour Elles devient itinérant et, grâce au soutien du
          département du Val d’Oise et de sa présidente Marie-Christine Cavecchi, propose un parcours à travers ce
          territoire riche de lieux patrimoniaux, pour ne pas dire « matrimoniaux » ! Un temps pour Elles, ces
          compositrices oubliées mais également ces grandes femmes de l’histoire qui ont forgé et inspiré des lieux
          emblématiques. Ainsi le chemin des musiciens et du public croisera celui de Blanche de Castille aux abbayes de
          Royaumont et de Maubuisson dont elle est la fondatrice mais également à l’Eglise Notre Dame de l’Assomption de
          Taverny dont elle aurait posé la première pierre. Le public ira sur les pas de Ninon de Lenclos Au château de
          Villarceaux et de la comtesse de Ségur au château de méry-sur-oise Un temps pour les enfants également, tout
          au long du festival ; chaque samedi après-midi un concert leur sera dédié. En proposant des contenus
          artistiques et musicaux à destination des jeunes générations, nous souhaitons mettre en valeur les
          compositrices et créatrices du passé mais également la création contemporaine pour créer, justement, ces
          modèles.
        </p>
      </div>
    </div>
    <!-- <swiper ref="mySwiper" :options="swiperComponentOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <div slot="pagination" class="swiper-pagination"></div>
    </swiper> -->
    <div v-swiper:mySwiper="swiperComponentOption">
      <div class="swiper-wrapper">
        <div v-for="swipper in swippers" :key="swipper.src" class="swiper-slide">
          <nuxt-img class="w-full" :src="swipper.src" :alt="swipper.alt"></nuxt-img>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import { FestivalWeekend } from '../models/weekends';
import { weekendsStore } from '~/store';
import 'swiper/swiper-bundle.css';

@Component
export default class WeekendsComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;

  swippers: { src: string; alt: string }[] = [
    // {
    //   src: '/swipper-home-page-2.png',
    //   alt: 'TODO',
    // },
    {
      src: '/3.png',
      alt: 'TODO',
    },
    {
      src: '/4.png',
      alt: 'TODO',
    },
  ];

  swiperComponentOption = {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  };

  components = {
    Swiper,
    SwiperSlide,
  };

  directives = {
    swiper: directive,
  };
}
</script>

<style></style>
