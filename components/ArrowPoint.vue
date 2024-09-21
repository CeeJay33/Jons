<template>
  <div
    v-if="showScrollArrow"
    class="scroll-container"
    @click="scrollToTop"
    :class="{ 'show-arrow': showScrollArrow }"
  >
    <div class="progress-circle">
      <svg viewBox="0 0 36 36" class="circular-chart">
        <path
          class="circle-bg"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          class="circle"
          stroke-dasharray="100, 100"
          :stroke-dashoffset="100 - scrollPercentage"
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
     <svg fill="#ffff" width="20px" class="arrow" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M906.228.001 277 629.229 432.901 785.13l363.072-363.071V1919.99h220.51V422.059l363.073 363.071 155.9-155.901z" fill-rule="evenodd"/> </g>

</svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPercentage: 0,
      showScrollArrow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;

      const scrollPercent = (scrollTop / totalScroll) * 100;
      this.scrollPercentage = scrollPercent;

      // Show arrow after 15% scrolling and hide when at top
      this.showScrollArrow = scrollTop > windowHeight * 0.15;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.scroll-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(34, 34, 34, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.show-arrow {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.progress-circle {
  position: relative;
  width: 50px;
  height: 50px;
}

.circular-chart {
  width: 50px;
  height: 50px;
  transform: rotate(-90deg);
}

.circle-bg {
  fill: none;
  stroke: #e6e6e6;
  stroke-width: 3;
}

.circle {
  fill: none;
  stroke: #7509e1;
  stroke-width: 3;
  stroke-linecap: round;
  transition: stroke-dashoffset 0.3s ease;
}

.arrow {
  position: absolute;
  font-weight: 900;
  color: #fff;
  top: 13px;
  left: 16px;
  font-weight: bold;
}

.scroll-container:hover {
  background-color: rgba(44, 44, 44, 0.9);
  transform: scale(1.1);
}
</style>
