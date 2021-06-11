<template>
  <section>
    <div v-swiper:mySwiper1="swiperComponentOption" class="mt-5">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide">
          <youtube :video-id="videoId" :player-vars="{ autoplay: 1 }" />
        </div> -->
        <div class="swiper-slide">
          <nuxt-img class="m-auto" src="/banner_title_hp.png" alt="Festival un temps pour elles"></nuxt-img>
        </div>
        <div class="swiper-slide">
          <nuxt-img
            class="m-auto"
            src="/banner_artists_hp.png"
            alt="Les artistes du festival un temps pour elles"
          ></nuxt-img>
        </div>
      </div>
    </div>

    <div class="flex justify-center mt-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <weekend-card v-for="weekend in weekends" :key="weekend.id" :weekend="weekend"></weekend-card>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4 md:my-12">
      <nuxt-img class="m-auto py-10" src="/pauline_viardot.png" alt="Pauline Viardot un temps pour elles"></nuxt-img>
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
    <div v-swiper:mySwiper2="swiperComponentOption">
      <div class="swiper-wrapper">
        <div v-for="swipper in swippers" :key="swipper.src" class="swiper-slide">
          <nuxt-img class="w-full" :src="swipper.src" :alt="swipper.alt"></nuxt-img>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { directive } from 'vue-awesome-swiper';
import { Swiper as SwiperClass } from 'swiper';
import { FestivalWeekend } from '../models/weekends';
import { weekendsStore } from '~/store';
import 'swiper/swiper-bundle.css';

@Component
export default class WeekendsComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;

  // videoId = 'I_-5LUzJYy8';

  mySwiper1: SwiperClass;
  mySwiper2: SwiperClass;

  swippers: { src: string; alt: string }[] = [
    {
      src: '/swipper-home-page-1.png',
      alt: 'Femmes de légende',
    },
    {
      src: '/swipper-home-page-2.png',
      alt: 'Les fables de Marie France',
    },
    {
      src: '/swipper-home-page-3.png',
      alt: 'Romantisme Allemand',
    },
    {
      src: '/swipper-home-page-4.png',
      alt: "L'Europe au crépuscule du 19ème siècle",
    },
    {
      src: '/swipper-home-page-5.png',
      alt: 'Les pionnières du cinéma',
    },
    {
      src: '/swipper-home-page-6.png',
      alt: 'Violonistes et compositrices',
    },
    {
      src: '/swipper-home-page-7.png',
      alt: "L'âme slave",
    },
    {
      src: '/swipper-home-page-8.png',
      alt: 'Chansons pour mon doudou',
    },
    {
      src: '/swipper-home-page-9.png',
      alt: 'Fantasia, Fanny Mendelssohn',
    },
    {
      src: '/swipper-home-page-10.png',
      alt: 'Médiations, Mel Bonis',
    },
    {
      src: '/swipper-home-page-11.png',
      alt: 'Dans la famille Viardot',
    },
    {
      src: '/swipper-home-page-12.png',
      alt: 'Pauline Viardot, Georges Sand et Le Berry',
    },
    {
      src: '/swipper-home-page-13.png',
      alt: 'Soul of Yiddish',
    },
    {
      src: '/swipper-home-page-14.png',
      alt: 'Solitude, Rita Strohl',
    },
    {
      src: '/swipper-home-page-15.png',
      alt: 'La révolution française des compositrices',
    },
    {
      src: '/swipper-home-page-16.png',
      alt: 'Bestiaire chanté',
    },
    {
      src: '/swipper-home-page-17.png',
      alt: 'Flûte',
    },
    {
      src: '/swipper-home-page-18.png',
      alt: 'Talestri, reine des Amazones',
    },
  ];

  swiperComponentOption = {
    loop: true,
    slidesPerView: 1,
  };

  directives = {
    swiper: directive,
  };

  mounted(): void {
    // Trick autoplay for slider
    setInterval(() => {
      this.mySwiper2.slideNext(1000);
      this.mySwiper1.slideNext(1000);
    }, 3500);
  }
}
</script>

<style lang="scss"></style>
