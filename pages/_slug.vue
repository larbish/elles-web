<template>
  <section v-if="weekend" class="md:container md:mt-16 mt-5">
    <h1 class="text-black flex justify-center text-center md:text-4xl text-2xl">
      {{ weekend.title }} #{{ weekend.id }}
    </h1>
    <h2 class="text-black flex justify-center md:mb-16 mt-5">
      {{ formatDate(weekend.startDate) }} - {{ formatDate(weekend.endDate) }}
    </h2>

    <div
      v-for="day in weekend.festivalDays"
      :key="day.id"
      :style="{ 'background-color': weekend.color }"
      class="md:mb-16 mb-5"
    >
      <nuxt-img
        class="w-full"
        :src="getStrapiMedia(day.cover.formats.large.url)"
        :alt="day.cover.alternativeText"
      ></nuxt-img>
      <div class="md:p-10 p-5 text-white">
        <div class="grid md:grid-cols-4 grid-cols-1">
          <h2 class="flex flex-wrap md:text-4xl text-2xl text-center content-center col-span-3 uppercase md:mb-0 mb-5">
            {{ day.title }}
          </h2>
          <a
            class="flex justify-center uppercase hover:opacity-70 bg-transparent border-4 p-5 cursor-pointer"
            :href="day.bookingLink"
          >
            Réserver
          </a>
        </div>
        <div class="text-white grid md:grid-cols-2 grid-cols-1 md:mt-0 mt-5">
          <div>
            <h3 class="uppercase mb-5">{{ formatDateAndHour(day.dateAndHour) }}</h3>
            <p>{{ day.artists }}</p>
          </div>
          <div class="flex flex-wrap content-end justify-end">
            <a class="cursor-pointer underline" @click="toggleModal(day)">Voir plus</a>
          </div>
        </div>
      </div>
    </div>

    <div class="text-black md:my-16 my-5 border-2 p-5" :style="{ 'border-color': weekend.color }">
      <h2 class="flex justify-center text-center md:text-4xl text-2xl mb-5">Informations pratiques</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$md.render(sanitizeHtml(weekend.access))"></div>
    </div>

    <div class="text-black md:mb-16 mb-5 border-2 p-5" :style="{ 'border-color': weekend.color }">
      <h2 class="flex justify-center text-center md:text-4xl text-2xl mb-5">Tarifs</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="$md.render(sanitizeHtml(weekend.pricing))"></div>
    </div>

    <!-- MODAL -->
    <div
      ref="modal"
      class="
        fixed
        top-0
        left-0
        w-screen
        h-screen
        flex
        items-center
        justify-center
        bg-black bg-opacity-80
        transform
        scale-0
        transition-transform
        duration-100
      "
      @click="toggleModal()"
    >
      <!-- Modal content -->
      <div v-if="selectedDay" class="bg-white md:w-3/4 md:h-auto w-screen h-screen p-6 md:rounded-lg z-50">
        <div class="flex justify-end pb-3 text-black hover:opacity-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="toggleModal()"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="$md.render(sanitizeHtml(selectedDay.description))"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import DOMPurify from 'isomorphic-dompurify';
import { getStrapiMedia } from '../utils/medias';
import { slugify } from '../utils/url';
import { FestivalWeekend } from '../models/weekends';
import { formatDate } from '../utils/date';
import { FestivalDay } from '~/models/days';

@Component
export default class WeekendDetailComponent extends Vue {
  weekend: FestivalWeekend = null;

  pricing: string = null;

  access: string = null;

  description: string = null;

  selectedDay: FestivalDay = null;

  openModal = false;

  async fetch(): Promise<void> {
    const weekendId = this.$route.params.slug?.split('_')[1];

    if (!weekendId) return; // 404

    this.weekend = await this.$strapi.findOne<FestivalWeekend>('festival-weekends', weekendId);
  }

  sanitizeHtml(html: string): string {
    return DOMPurify.sanitize(html);
  }

  toggleModal(selectedDay: FestivalDay): void {
    event.stopPropagation();

    this.selectedDay = selectedDay;

    this.openModal = !this.openModal;

    const classToSet = this.openModal ? 'scale-100' : 'scale-0';
    const classToRemove = this.openModal ? 'scale-0' : 'scale-100';

    (this.$refs.modal as Element).classList.add(classToSet);
    (this.$refs.modal as Element).classList.remove(classToRemove);
  }

  formatDate(date: Date) {
    return formatDate(date);
  }

  formatDateAndHour(date: Date) {
    const myDate = new Date(date);
    return `${myDate.toLocaleDateString()} - ${myDate.getHours()}h`;
  }

  generateUrl(weekend: FestivalWeekend): string {
    return `/${slugify(weekend.title)}_${weekend.id}`;
  }

  getStrapiMedia(url: string): string {
    return getStrapiMedia(url);
  }
}
</script>

<style lang="scss"></style>
