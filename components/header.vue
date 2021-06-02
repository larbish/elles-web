<template>
  <div>
    <v-app-bar prominent dark>
      <v-app-bar-nav-icon class="md:tw-invisible"></v-app-bar-nav-icon>

      <nuxt-link class="tw-h-full flex tw-content-center" to="/">
        <img src="~/assets/elles-logo.png" alt="elles logo" />
      </nuxt-link>

      <!-- <v-spacer></v-spacer> -->

      <v-btn icon>
        <nuxt-link to="/festival-weekends">
          <v-icon>mdi-heart</v-icon>
        </nuxt-link>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template #activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style></style>
