<template>
  <section>
    <NuxtLink :to="generateUrl(weekend)">
      <v-card class="tw-relative">
        <v-img class="border-0" :src="getStrapiMedia(weekend.cover[0].formats.small.url)" :alt="weekend.cover[0].name">
          <div class="tw-absolute tw-top-4 tw-left-4 tw-text-white tw-text-left tw-font-bold">
            <h1>{{ weekend.title }}</h1>
            <h2>{{ weekend.startDate }} {{ weekend.endDate }}</h2>
          </div>
        </v-img>
      </v-card>
      <!-- <pre>
      {{ weekend }}
      </pre> -->
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
