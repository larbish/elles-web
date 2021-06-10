<template>
  <section class="Z-100">
    <NuxtLink :to="generateUrl(weekend)">
      <div class="relative">
        <nuxt-img
          class="border-0 w-100"
          :src="getStrapiMedia(weekend.cover[0].formats.small.url)"
          :alt="weekend.cover[0].name"
        >
        </nuxt-img>
        <div class="absolute top-4 left-4 text-white text-left font-bold">
          <h1>{{ weekend.title }}</h1>
          <h2>{{ weekend.startDate }} {{ weekend.endDate }}</h2>
        </div>
      </div>
    </NuxtLink>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { getStrapiMedia } from '../utils/medias';
import { slugify } from '../utils/url';
import { FestivalWeekend } from '../models/weekends';

@Component
export default class WeekendCardComponent extends Vue {
  @Prop({ default: 'Input Property' })
  weekend: FestivalWeekend;

  generateUrl(weekend: FestivalWeekend): string {
    return `/${slugify(weekend.title)}_${weekend.id}`;
  }

  getStrapiMedia(url: string): string {
    return getStrapiMedia(url);
  }
}
</script>
