<template>
  <section>
    <div class="container">
      <h1 class="flex justify-center">Les weekends du festoche</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <weekend-card v-for="weekend in weekends" :key="weekend.id" :weekend="weekend"></weekend-card>
      </div>
      <pre>
        {{ weekends }}
      </pre>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { FestivalWeekend } from '../../models/weekends';

@Component
export default class WeekendsComponent extends Vue {
  weekends: FestivalWeekend[] = [];

  async fetch(): Promise<void> {
    await (this as any).$strapi.find('festival-weekends').then((res: FestivalWeekend[]) => {
      this.weekends = res;
    });
  }
}
</script>

<style></style>
