<template>
  <section>
    <NuxtLink :to="slugUrl(weekend)">
      <v-card class="h-full mx-auto relative">
        <v-img
          class="h-full"
          :src="getStrapiMedia(weekend.cover[0].formats.thumbnail.url)"
          :alt="weekend.cover[0].name"
        >
          <div class="absolute top-4 right-4 text-white text-right font-bold text-2xl">
            <h1>{{ weekend.title }}</h1>
            <h1>{{ weekend.startDate }} {{ weekend.endDate }}</h1>
          </div>
        </v-img>
      </v-card>
    </NuxtLink>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import { getStrapiMedia } from '../utils/medias';
import { FestivalWeekend } from '../models/weekends';

@Component
export default class WeekendCardComponent extends Vue {
  @Prop()
  weekend: FestivalWeekend;

  slugUrl(weekend: object): string {
    return '/' + weekend.title.toLowerCase().replaceAll(' ', '-') + '-weekend';
  }

  getStrapiMedia(url: string): string {
    return getStrapiMedia(url);
  }
}
</script>
