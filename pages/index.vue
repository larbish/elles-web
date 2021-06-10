<template>
  <section>
    <h1 class="flex justify-center">Les weekends du festoche</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <weekend-card v-for="weekend in weekends" :key="weekend.id" :weekend="weekend"></weekend-card>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { FestivalWeekend } from '../models/weekends';
import { weekendsStore } from '~/store';

@Component
export default class WeekendsComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;
}
</script>

<style></style>
