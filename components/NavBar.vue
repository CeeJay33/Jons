<template>
  <div>
     <!-- <div class="fixed top-0 right-0 w-11/12 -z-50 traslate-y-[-80%]">
        <img src="~assets/images/eb0ea9ebcafce728d22ebef1334a68f6.jpg" alt="" class="w-full">
    </div> -->
  <nav
    class="w-full fixed bg-white top-0 right-0 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50" 
  >
    <img
      src="~/assets/images/photo_2024-09-17_17-44-54.jpg"
      alt="logo"
      class="w-20 cursor-pointer mr-14"
    />
    <ul
      class="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50"
    >
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About me</a></li>
      <li><a href="#Services">Services</a></li>
      <li><a href="#work">My work</a></li>
      <li><a href="#contact">Contact me</a></li>
    </ul>

    <div class="flex items-center gap-4">
      <button><img src="~/assets/images/icons8-moon-50.png" class="w-6" alt="" /></button>
      <a
        href="#contact"
        class="hidden lg:flex item-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
        >Contact
       
    </a>

      <button class="block md:hidden ml-3" onclick="openMenu()">
        <img src="~/assets/images/icons8-paragraph-64.png" alt="" class="w-6" />
      </button>
    </div>


    <!-- mobile nav -->

    <ul
      id="sideMenu"
      class="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
    >
      <div class="absolute right-6 top-6" onclick="closeMenu()">
        <img src="~/assets/images/icons8-x-30.png" class="w-6 cursor-pointer" alt="" />
      </div>
      <li><a href="#top" onclick="closeMenu()">Home</a></li>
      <li><a href="#about" onclick="closeMenu()">About me</a></li>
      <li><a href="#Services" onclick="closeMenu()">Services</a></li>
      <li><a href="#work" onclick="closeMenu()">My work</a></li>
      <li><a href="#contact" onclick="closeMenu()">Contact me</a></li>
    </ul>
  </nav>
  </div>
</template>
