<template>
  <section class="md:container">
    <div class="text-black grid lg:grid-cols-4 grid-cols-1 md:gap-32 gap-2 md:my-16 my-5">
      <div class="md:col-span-2 2xl:col-span-1 flex flex-row md:-mb-20 lg:mb-0">
        <nuxt-img
          class="w-1/2 h-full md:w-full"
          src="/gel-alcoolique.png"
          alt="Image se laver les mains avec du gel alcoolique"
        ></nuxt-img>
        <nuxt-img class="w-1/2 h-full md:w-full" src="/woman-masque.png" alt="Image porter un masque"></nuxt-img>
      </div>
      <div class="md:col-span-2 2xl:col-span-3 flex flex-wrap content-center">
        <div class="flex flex-col">
          <div class="flex items-center mb-6 w-full">
            <h2 class="pr-3 uppercase">Protocole sanitaire</h2>
            <div class="h-1 bg-black flex-1"></div>
          </div>
          <p class="text-justify md:text-2xl text-sm">
            Conformément aux recommandations des autorités, le protocole en vigueur sera mis en place sur le festival
            afin de prendre toutes les mesures de précaution nécessaires pour garantir la sécurité de tou·te·s : port du
            masque, distanciation, mise à disposition de gel hydroalcoolique...
          </p>
        </div>
      </div>
    </div>

    <div
      v-for="weekend in weekends"
      :key="weekend.id"
      class="text-black relative mb-16 border-2"
      :style="{ 'border-color': weekend.color }"
    >
      <div>
        <div class="md:absolute right-0 top-0">
          <nuxt-img
            :src="getStrapiMedia(weekend.cover[1].formats.small.url)"
            :alt="weekend.cover[1].alternativeText"
          ></nuxt-img>
        </div>
        <h2 class="p-5 text-white uppercase" :style="{ 'background-color': weekend.color }">
          {{ weekend.title }}
        </h2>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="p-5" v-html="$md.render(sanitizeHtml(weekend.access))"></div>
      </div>
    </div>

    <div class="text-black">
      <div class="flex items-center mb-6 w-full">
        <h2 class="pr-3 uppercase">Tarifs</h2>
        <div class="h-1 bg-black flex-1"></div>
      </div>
      <div>
        <p class="font-extrabold mb-8">
          Un billet est obligatoire pour accéder aux concerts, y compris pour les concerts en extérieur. Pour des
          raisons sanitaires, prenez de préférence vos billets via la billeterie en ligne.
        </p>
        <ul class="mb-8">
          <li>Plein tarif : 15 euros</li>
          <li>Moins de 25 ans, demandeurs d’emploi : 12 euros</li>
          <li>Moins de 12 ans : 8 euros</li>
          <li>Pass week-end (3 concerts) : 38 euros</li>
          <li>Pass week-end d’ouverture (4 concerts) : 50 euros</li>
        </ul>
        <ul class="mb-8">
          <li>31 juillet 1er Août, billetterie avec accès à L’Abbaye de Royaumont:</li>
          <li>Plein tarif : 18 euros</li>
          <li>Moins de 25 ans, demandeurs d’emplois : 13,50 euros</li>
          <li>Moins de 12 ans : 8 euros</li>
          <li>Pass week-end : 40 euros</li>
        </ul>
        <p class="text-sm md:mb-16 mb-5">
          La réservation de places pour les personnes en fauteuils roulants et leurs accompagnateurs-trices ainsi que
          toute personne en situation de handicap s’effectue obligatoirement par mail sur
          festival.untempspourelles@gmail.com. Une place à tarif gratuit peut être réservée lors de la commande pour un
          ou une accompagnateur·trice de personnes titulaires d’une carte mobilité inclusion comprenant la mention «
          besoin d’accompagnement ».
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DOMPurify from 'isomorphic-dompurify';
import { FestivalWeekend } from '../models/weekends';
import { getStrapiMedia } from '../utils/medias';
import { weekendsStore } from '~/store';

@Component
export default class InformationsComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;
  head() {
    return {
      title: "Informations du Festival Un temps pour Elles, Val d'Oise",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Trouver les tarifs, plan d'accès aux chateaux et abbayes, et toutes les informations pratiques pour le Festival un temps pour Elles dans le Val d'Oise",
        },
      ],
    };
  }

  sanitizeHtml(html: string): string {
    return DOMPurify.sanitize(html);
  }

  getStrapiMedia(url: string): string {
    return getStrapiMedia(url);
  }
}
</script>

<style lang="scss"></style>
