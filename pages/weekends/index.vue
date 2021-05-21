<template>
  <section>
    <h1 class="flex justify-center">Weekends</h1>

    <pre>
            {{ weekends }}
    </pre>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Weekend } from './models';

@Component
export default class WeekendsComponent extends Vue {
  weekends: Weekend[] = [];

  async fetch(): Promise<void> {
    await (this as any).$strapi.$weekends.find().then((res: Weekend[]) => {
      this.weekends = res;
    });
  }
}
</script>

<style></style>
