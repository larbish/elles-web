<template>
  <section>
    <h1 class="flex justify-center">Les weekends du festoche</h1>

    <pre>
        {{ weekends }}
    </pre>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { FestivalWeekend } from './models';

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
