<template>
  <div>
    <nav
      class="w-full fixed bg-white top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
    >
      <img
        src="/images/photo_2024-09-17_17-44-54.jpg"
        alt="logo"
        class="w-20 cursor-pointer mr-14"
      />
      <ul
        class="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50"
      >
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#work">Our work</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>

      <div class="flex items-center gap-4">
        <button>
          <a href="#location">
          <img src="/images/contact-map-pin-svgrepo-com.png" class="w-6" alt="" />
          </a>
        </button>
        <a
          href="#contact"
          class="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >Contact</a
        >

        <button class="block md:hidden ml-3" @click="toggleMenu">
          <img
            src="/images/icons8-paragraph-64.png"
            alt=""
            class="w-6"
          />
        </button>
      </div>

      <!-- mobile nav -->
      <transition name="fade">
        <ul
          v-if="isMenuOpen"
          class="flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 left-0 w-full z-50 h-[50vh] bg-white transition duration-500"
        >
          <div class="absolute right-6 top-6" @click="toggleMenu">
            <img
              src="/images/icons8-x-30.png"
              class="w-6 cursor-pointer"
              alt=""
            />
          </div>
          <li class="relative">
            <a href="#top" @click="closeMenu" class="text-sm">Home</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
          </li>
          <li class="relative">
            <a href="#about" @click="closeMenu" class="text-sm">About Us</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
          </li>
          <li class="relative">
            <a href="#Services" @click="closeMenu" class="text-sm">Services</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
          </li>
          <li class="relative">
            <a href="#work" @click="closeMenu" class="text-sm">Our work</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
          </li>
          <li class="relative">
            <a href="#contact" @click="closeMenu" class="text-sm">Contact Us</a>
            <div class="h-0.5 w-full bg-gray-100 mt-1"></div>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
