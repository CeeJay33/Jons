<template>
  <div class="main__hero__Section flex flex-col sm:flex-row justify-around items-center mt-7 w-full px-4 sm:px-20">
    <div class="child__section flex flex-col  sm:items-start mb-6 sm:mb-0">
      <div class="award-section gap-2 bg-slate-100  py-2 border rounded w-25">
        <p class="font-sans font-semibold sm:text-left">🤩 Award-winning digital services</p>
      </div>

      <div class="hero__header__text mt-4">
        <h2 class="sm:text-left">Creative studio focused on  <span ref="heroText" class="hero-text"></span></h2>
        <span ref="heroText" class="hero-text"></span>
      </div>

      <div class="description__secion">
        <p>From concept to execution, we deliver web designs that make an impact. Let your brand shine with our innovative and visually stunning websites.</p>
      </div>

     <div class="relative w-full max-w-xl">
  <input
    type="text"
    placeholder="Enter your email address"
    class="w-full px-4 py-4 pr-16 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
  />
  <button
    class="absolute right-1 top-1 bottom-1 px-4 h-12 text-white bg-slate-900 rounded-md hover:bg-[#7509e1] focus:outline-none"
  >
    Start trial
  </button>
</div>

    <!-- image section -->
<div class="info__section__support flex items-center justify-between gap-2 w-full mt-10">
    <div class="iconinc__img flex justify-center items-center gap-4 mt-5">
        <img src="~/assets/images/eb71b266fecce5119d2b1c3dcec7c663-removebg-preview.png" class="bg-slate-900 w-10 rounded-lg" alt="">

        <div class="">
            <h2>24/7 Support</h2>
            <p>We're always here to help</p>
        </div>
    </div>

    <div class="iconinc__img flex justify-center items-center gap-4 mt-6">
        <img src="~/assets/images/eb71b266fecce5119d2b1c3dcec7c663-removebg-preview.png" class="bg-slate-900 w-10 rounded-lg" alt="">
        <div class="">
            <h2>Award Winning agency</h2>
            <p>You are in safe hand</p>
        </div>
    </div>
</div>

    </div>
    <div class="child__section flex justify-center sm:justify-end">
      <div class="image__layout mr-5">
        <img src="~/assets/images/01-CjhQ6Kut.jpg" alt="" class="border rounded" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const heroText = ref(null)

onMounted(() => {
  const firstText = 'Web Dev'
  const secondText = 'Digital Designs'

  gsap.timeline({ repeat: -1 }) 
    .to(heroText.value, {
      duration: 0.5,
      opacity: 1,
      ease: 'power2.out',
    })
    .to(heroText.value, {
      duration: firstText.length * 0.1,
      text: {
        value: firstText,
        delimiter: '',
      },
      ease: 'none',
    })
    .to(heroText.value, {
      delay: 3, 
      duration: firstText.length * 0.1,
      text: {
        value: '',
        delimiter: '',
      },
      ease: 'none',
    })
    .to(heroText.value, {
      duration: secondText.length * 0.1,
      text: {
        value: secondText,
        delimiter: '',
      },
      ease: 'none',
    })
    .to(heroText.value, {
      delay: 3, 
      duration: secondText.length * 0.1,
      text: {
        value: '',
        delimiter: '',
      },
      ease: 'none',
    })
})

</script>

