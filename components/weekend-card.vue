<template>
  <section>
    <NuxtLink :to="generateUrl(weekend)">
      <div class="relative">
        <div class="relative">
          <nuxt-img
            class="border-0 w-100"
            :src="getStrapiMedia(weekend.cover[1].formats.small.url)"
            :alt="weekend.cover[1].alternativeText"
          >
          </nuxt-img>
          <nuxt-img
            id="top"
            class="absolute top-0 left-0 border-0 w-100"
            :src="getStrapiMedia(weekend.cover[0].formats.small.url)"
            :alt="weekend.cover[0].alternativeText"
          >
          </nuxt-img>
        </div>
        <div class="absolute top-4 left-4 text-white text-left font-bold">
          <h1>{{ weekend.title.toUpperCase() }}</h1>
          <h2>{{ formatDate(weekend.startDate) }} - {{ formatDate(weekend.endDate) }}</h2>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { getStrapiMedia } from '../utils/medias';
import { slugify } from '../utils/url';
import { formatDate } from '../utils/date';
import { FestivalWeekend } from '../models/weekends';

@Component
export default class WeekendCardComponent extends Vue {
  @Prop({ default: 'Input Property' })
  weekend: FestivalWeekend;

  generateUrl(weekend: FestivalWeekend): string {
    return `/${slugify(weekend.title)}_${weekend.id}`;
  }

  formatDate(date: Date) {
    return formatDate(date);
  }

  getStrapiMedia(url: string): string {
    return getStrapiMedia(url);
  }
}
</script>

<style lang="scss">
#top {
  -webkit-transition: opacity 1s ease-in-out;
  -moz-transition: opacity 1s ease-in-out;
  -o-transition: opacity 1s ease-in-out;
  transition: opacity 1s ease-in-out;
}

#top:hover {
  opacity: 0 !important;
}
</style>
