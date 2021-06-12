<template>
  <nav class="bg-elles-grey-blue">
    <!-- MOBILE -->
    <div class="sm:hidden grid grid-cols-2">
      <div class="flex flex-row">
        <!-- Menu button-->
        <button type="button" class="">
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
      <div class="flex flex-row-reverse">
        <!-- Social media icons-->
        <a
          class="block flex content-center"
          target="_blank"
          href="https://www.facebook.com/Festival-Un-temps-pour-Elles-104669604665183"
        >
          <img class="mx-3 w-8" src="~assets/facebook.svg" />
        </a>
        <a class="block flex content-center" target="_blank" href="https://www.instagram.com/ellescreativewomen/">
          <img class="mx-3 w-8" src="~assets/instagram.svg" />
        </a>
        <a
          class="block flex content-center"
          target="_blank"
          href="https://www.youtube.com/channel/UCEgIu9tRclQYh9GDYfMjiWA"
        >
          <img class="mx-3 w-8" src="~assets/youtube.svg" />
        </a>
      </div>
    </div>
    <!-- DESKTOP -->
    <div class="hidden sm:block text-black">
      <div class="grid grid-cols-3 h-full pb-3">
        <div class="grid grid-cols-2 justify-items-center content-end">
          <NuxtLink to="nous-decouvrir" class="nav-item">Nous découvrir</NuxtLink>
          <div class="nav-item relative">
            <div class="cursor-pointer" @click="toggleDropdown()">Programmation</div>
            <div
              ref="dropdown"
              class="
                absolute
                opacity-0
                invisible
                transition
                duration-150
                ease-in-out
                top-9
                -left-20
                w-96
                bg-white
                rounded
                shadow-2xl
                z-50
              "
            >
              <NuxtLink
                v-for="weekend in weekends"
                :key="weekend.id"
                :to="generateUrl(weekend)"
                class="block capitalize py-1 px-3 text-xl hover:bg-gray-200"
              >
                #{{ weekend.id }} {{ weekend.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="flex justify-center content-center">
          <NuxtLink to="/">
            <img src="../assets/logo-un-temps-pour-elles.png" alt="Logo festival un temps pour elle" />
          </NuxtLink>
        </div>
        <div class="grid grid-rows-3">
          <div class="row-span-2">
            <div class="grid grid-cols-2 h-full">
              <div class="col-start-2 flex justify-center">
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.facebook.com/Festival-Un-temps-pour-Elles-104669604665183"
                >
                  <img class="mx-3 w-10" src="~assets/facebook.svg" />
                </a>
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.instagram.com/ellescreativewomen/"
                >
                  <img class="mx-3 w-10" src="~assets/instagram.svg" />
                </a>
                <a
                  class="block flex content-center"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCEgIu9tRclQYh9GDYfMjiWA"
                >
                  <img class="mx-3 w-10" src="~assets/youtube.svg" />
                </a>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 justify-items-center content-end">
            <NuxtLink to="informations" class="nav-item">Informations pratiques</NuxtLink>
            <a
              class="nav-item"
              target="_blank"
              href="https://www.helloasso.com/associations/association-elles/formulaires/1/widget"
            >
              Nous Soutenir
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      ref="mobileMenu"
      class="
        z-50
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
            <div @click="toggleMenu()">
              <NuxtLink to="/">Accueil</NuxtLink>
            </div>
            <div class="block my-4" @click="toggleMenu()">
              <span>Programmation</span>
              <ul class="ml-4">
                <li v-for="weekend in weekends" :key="weekend.id" class="capitalize mt-3">
                  <NuxtLink :to="generateUrl(weekend)"> &#8627; {{ weekend.title }} </NuxtLink>
                </li>
              </ul>
            </div>

            <div class="block my-4" @click="toggleMenu()">
              <NuxtLink to="nous-decouvrir" @click="toggleMenu()">Nous découvrir</NuxtLink>
            </div>
            <div class="block my-4" @click="toggleMenu()">
              <NuxtLink to="informations" @click="toggleMenu()">Informations pratiques</NuxtLink>
            </div>
            <div class="block my-4" @click="toggleMenu()">
              <a
                target="_blank"
                href="https://www.helloasso.com/associations/association-elles/formulaires/1/widget"
                class="block"
              >
                Nous Soutenir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator';
import { generateWeekendUrl } from '../utils/url';
import { FestivalWeekend } from '../models/weekends';
import { weekendsStore } from '~/store';

@Component
export default class HeaderComponent extends Vue {
  weekends: FestivalWeekend[] = weekendsStore.weekends;

  open = false;

  dropdownOpen = false;

  @Watch('$route', { immediate: true, deep: true })
  onUrlChange() {
    if (this.dropdownOpen) this.toggleDropdown();
  }

  generateUrl(weekend: FestivalWeekend): string {
    return generateWeekendUrl(weekend.title, weekend.id);
  }

  toggleMenu(): void {
    this.open = !this.open;

    const classToSet = this.open ? 'scale-100' : 'scale-0';
    const classToRemove = this.open ? 'scale-0' : 'scale-100';

    (this.$refs.mobileMenu as Element).classList.add(classToSet);
    (this.$refs.mobileMenu as Element).classList.remove(classToRemove);
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;

    const classToSet = this.dropdownOpen ? ['opacity-100', 'visible'] : ['opacity-0', 'invisible'];
    const classToRemove = this.dropdownOpen ? ['opacity-0', 'invisible'] : ['opacity-100', 'visible'];

    (this.$refs.dropdown as Element).classList.add(...classToSet);
    (this.$refs.dropdown as Element).classList.remove(...classToRemove);
  }
}
</script>

<style lang="scss">
// Underline header title
.nav-item {
  text-decoration: none;
  letter-spacing: 0.1em;

  display: inline-block;
  padding: 1px 10px;
  position: relative;
}
.nav-item:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: '';
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: grey;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav-item:hover:after {
  width: 60%;
  left: 20%;
}
</style>
