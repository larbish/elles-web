<template>
  <nav class="bg-elles-grey-blue">
    <div class="">
      <div class="">
        <div class="sm:hidden">
          <!-- Mobile menu button-->
          <button type="button" class="">
            <!-- Menu is close -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 m-2 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              @click="toggleMenu()"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      ref="mobileMenu"
      class="
        z-10
        p-4
        bg-elles-blue
        fixed
        text-white
        top-0
        left-0
        w-screen
        h-screen
        transform
        scale-0
        transition-transform
        duration-150
      "
    >
      <div class="grid grid-flow-row auto-rows-max">
        <div class="flex justify-end mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            @click="toggleMenu()"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div class="flex items-center mb-10 text-2xl text-white text-uppercase">
          <div class="justify-center">
            <span>Programmation</span>
            <ul class="ml-4">
              <li v-for="weekend in weekends" :key="weekend.id" class="capitalize mt-3" @click="goToWeekendPage()">
                &#8627; {{ weekend.title }}
              </li>
            </ul>

            <NuxtLink to="discover-us" class="block my-4">Nous découvrir</NuxtLink>
            <NuxtLink to="informations" class="block my-4">Informations pratiques</NuxtLink>
            <a href="https://nuxtjs.org" class="block">Nous Soutenir</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { slugify } from '../utils/url';
import { FestivalWeekend } from '../models/weekends';
import { weekendsStore } from '~/store';

@Component
export default class HeaderComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;

  open: boolean = false;

  generateUrl(weekend: FestivalWeekend): string {
    return `/${slugify(weekend.title)}_${weekend.id}`;
  }

  toggleMenu(): void {
    this.open = !this.open;

    const classToSet = this.open ? 'scale-100' : 'scale-0';
    const classToRemove = this.open ? 'scale-0' : 'scale-100';

    (this as any).$refs.mobileMenu.classList.add(classToSet);
    (this as any).$refs.mobileMenu.classList.remove(classToRemove);
  }
}
</script>

<style></style>
