<template>
  <div class="designers__section">
    <div class="content-wrapper">
      <div class="left-section">
        <h2>30+ Brands Designed</h2>
      </div>

      <!-- Right section for images -->
      <div class="right-section">
        <!-- Carousel for screens smaller than 500px -->
        <!-- <div v-if="isSmallScreen" class="carousel">
          <div class="carousel-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-slide">
              <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
              
            </div>
            <div class="carousel-slide">
              <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
              
            </div>
            <div class="carousel-slide">
              <img src="~/assets/images/photo_2024-09-19_12-33-54.jpg" alt="Fashion Design 3">
              
            </div>
          </div>
          <button @click="prevSlide" class="carousel-btn prev">‹</button>
          <button @click="nextSlide" class="carousel-btn next">›</button>
        </div> -->

        <!-- Marquee for larger screens -->
        <div  class="marquee">
          <div class="track" ref="track">
            <div class="content">
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
               
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
               
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_12-33-54.jpg" alt="Fashion Design 3">
               
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_12-34-42.jpg" alt="Fashion Design 4">
               
              </div>
               <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_12-33-54.jpg" alt="Fashion Design 3">
               
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_12-34-42.jpg" alt="Fashion Design 4">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    isSmallScreen() {
      return window.innerWidth <= 500;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
  methods: {
    updateScreenSize() {
      this.$forceUpdate();
    },
    nextSlide() {
      const totalSlides = 3;
      this.currentIndex = (this.currentIndex + 1) % totalSlides;
    },
    prevSlide() {
      const totalSlides = 3;
      this.currentIndex = (this.currentIndex - 1 + totalSlides) % totalSlides;
    },
  },
  startAnimation() {
    const track = this.$refs.track;
    const content = track.querySelector(".content");
    const trackWidth = track.clientWidth;
    const contentWidth = content.scrollWidth;
    const duration = (contentWidth / trackWidth) * 100;
    content.style.animation = `marquee ${duration}s linear infinite`;
  },
  stopAnimation() {
    const content = this.$refs.track.querySelector(".content");
    content.style.animation = "none";
  }
};
</script>

<style>
.designers__section {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.content-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
/* 
.left-section {
  flex: 0 0 35%;
  padding-left: 5rem;
} */

.left-section h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
}

.right-section {
  flex: 0 0 65%;
  overflow: hidden;
}

.marquee {
  max-width: 100%;
  overflow-x: hidden;
}

.track {
  animation: marquee 30s linear infinite;
}

.content {
  display: flex;
  gap: 1rem;
  align-items: center;
}


 .pro{
  width: 30%;
  max-width: 30%;
  border: 1px solid #7509e1;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.02);
  margin: 15px 0.5rem;
  transition: 0.2s ease;
  background-color: #fff;
  position: relative;
}

 .pro:hover{
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.06);
  border: 1px solid #7509e1;
}

 .pro img{
  width: 250px;
  max-width: 250px;
  height: 250px;
  border-radius: 10px;
}

.pro video{
  width: 250px;
  max-width: 250px;
  height: 250px;
  border-radius: 10px;
  border: 1px solid #edf4ee;
  object-fit: cover;
}

 .pro .des{
  text-align: start;
  position: absolute;
  bottom: 0;
  color: #fff;
  display: none;
  padding: 20px 0;
}

 .pro .des span{
  color: #ffffff;
  font-size: 13px;
  font-family: "Open Sans", sans-serif;
}

 .pro .des h5{
  padding-top: 7px;
  color: #ffffff;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
}

 .pro .des i{
  font-size: 12px;
  color: #5161ce;
}

 .pro .des h4{
  padding-top: 7px;
  font-size: 13px;
  font-weight: 700;
  color: #000;
  font-family: "Open Sans", sans-serif;
  opacity: 0.5;
}



.pro .cart:hover{
  background-color: #5161ce;
}

.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
  box-sizing: border-box;
}

.carousel-slide img {
  width: 150px;
  height: 250px;
  border-radius: 10px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 0.5rem;
  cursor: pointer;
  z-index: 2;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

/* Keyframes for marquee animation */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

@media (max-width: 500px) {
  /* Adjust styles for small screens */
  .carousel-slide img {
    width: 100%;
  }
}

</style>