<template>
  <section v-if="weekend" class="mt-5">
    <h1 class="text-black flex justify-center text-center md:text-4xl text-2xl">
      #{{ weekend.id }} {{ weekend.title }}
    </h1>
    <h2 class="text-black flex justify-center mb-5">
      {{ formatDate(weekend.startDate) }} - {{ formatDate(weekend.endDate) }}
    </h2>

    <div v-for="day in weekend.festivalDays" :key="day.id" ref="block" class="mb-8">
      <nuxt-img class="w-full" :src="getStrapiMedia(day.cover.formats.large.url)" :alt="day.cover.name"></nuxt-img>
      <div class="p-10 text-white">
        <div class="grid grid-cols-4">
          <h2 class="flex flex-wrap text-4xl content-center col-span-3 uppercase">{{ day.title }}</h2>
          <a
            class="flex justify-center uppercase hover:opacity-70 bg-transparent border-4 p-5 cursor-pointer"
            :href="day.bookingLink"
          >
            Réserver
          </a>
        </div>
        <div class="text-white grid grid-cols-2">
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
        duration-300
      "
      @click="toggleModal()"
    >
      <!-- Modal content -->
      <div v-if="selectedDay" class="bg-white w-1/2 h-1/2 p-12">
        {{ selectedDay.description }}
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getStrapiMedia } from '../utils/medias';
import { slugify } from '../utils/url';
import { FestivalWeekend } from '../models/weekends';
import { formatDate } from '../utils/date';
import { FestivalDay } from '~/models/days';

@Component
export default class WeekendDetailComponent extends Vue {
  weekend: FestivalWeekend = null;

  selectedDay: FestivalDay = null;

  openModal = false;

  async fetch(): Promise<void> {
    const weekendId = this.$route.params.slug?.split('_')[1];

    if (!weekendId) return; // 404

    this.weekend = await this.$strapi.findOne<FestivalWeekend>('festival-weekends', weekendId);
  }

  mounted(): void {
    setTimeout(() => {
      (this.$refs.block as Element[]).forEach((ref) => {
        (ref as any).style.backgroundColor = this.weekend.color;
      });
    }, 100);
  }

  toggleModal(selectedDay: FestivalDay): void {
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

<style lang="scss">
.tab {
  overflow: hidden;
}
.tab-content {
  max-height: 0;
  transition: all 0.5s;
}
input:checked + .tab-label .test {
  background-color: #000;
}
input:checked + .tab-label .test svg {
  transform: rotate(180deg);
  stroke: #fff;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
}
</style>
