<template>
  <div class="swiper-container mt-4">
    <swiper :slides-per-view="1" :space-between="30" class="mySwiper">
      <!-- Slide 1 -->
      <swiper-slide class="bg-transparent h-full card">
        <div class="p-4 card-body">
          <ul class="flex space-x-1 mb-2">
            <li v-for="star in 5" :key="star" class="text-warning">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </li>
          </ul>
          <p class="text-gray-700 font-normal">
            The best theme we've ever used - easy to customize and comes with all the features we need.
          </p>
        </div>
        <div class="p-0 card-footer bg-transparent flex items-center">
          <div class="avatar w-10 h-10 rounded-full overflow-hidden mr-2">
            <img src="" alt="avatar" />
          </div>
          <p class="text-gray-600">By Dennis Barrett</p>
        </div>
      </swiper-slide>

      <!-- Slide 2 -->
      <swiper-slide class="bg-transparent h-full card">
        <div class="p-4 card-body">
          <ul class="flex space-x-1 mb-2">
            <li v-for="star in 5" :key="star" class="text-warning">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
              </svg>
            </li>
          </ul>
          <p class="text-gray-700 font-normal">
            Webestica helped us create a stunning website that reflects our brand perfectly.
          </p>
        </div>
        <div class="p-0 card-footer bg-transparent flex items-center">
          <div class="avatar w-10 h-10 rounded-full overflow-hidden mr-2">
            <img src="" alt="avatar" />
          </div>
          <p class="text-gray-600">By Nix Maxwell</p>
        </div>
      </swiper-slide>

    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}
.card {
  @apply bg-white shadow-md rounded-lg;
}
</style>
