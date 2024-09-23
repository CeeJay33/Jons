<template>
  <div class="designers__section">
    <div class="content-wrapper">
      <div class="left-section">
        <h2>30+ Companies Brands</h2>
        <h2>Designed</h2>
      </div>

      <div class="right-section">
        <div class="marquee">
          <div class="track" ref="track">
            <div class="content">
              <!-- Existing content repeated to ensure seamless scroll -->
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <!-- Add more items as needed -->

              <!-- Duplicate items for seamless scroll -->
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <!-- Add more items as needed -->

              <!-- Duplicate items for seamless scroll -->
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <!-- Add more items as needed -->

              <!-- Duplicate items for seamless scroll -->
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="Fashion Design 1">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <div class="pro">
                <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="Fashion Design 2">
                <div class="des">
                  <span><i class="fa fa-eye"></i></span>
                  <h5>Animation</h5>
                  <h4>Fashion Designs</h4>
                </div>
              </div>
              <!-- Repeat for enough content to cover and loop -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "TopDesigners",
  data() {
    return {};
  },
  beforeUnmount() {
    this.stopAnimation();
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      const track = this.$refs.track;
      const content = track.querySelector(".content");
      const trackWidth = track.clientWidth;
      const contentWidth = content.scrollWidth;
      const duration = (contentWidth / trackWidth) * 10; // Adjust duration for smoother animation
      content.style.animation = `marquee ${duration}s linear infinite`;
    },
    stopAnimation() {
      const content = this.$refs.track.querySelector(".content");
      content.style.animation = "none";
    },
  },
};
</script>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-20%); }
}

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

.left-section {
  flex: 0 0 35%;
  padding-left: 5rem;
}

.left-section h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #191919;
  font-family: "Instrument Sans", sans-serif;
}

.right-section {
  flex: 0 0 65%;
  overflow: hidden;
}

.marquee {
  width: 100%;
  overflow: hidden;
}

.track {
  display: flex;
  align-items: center;
}

.content {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
}

.pro {
  width: 200px; /* Adjusted for mobile responsiveness */
  border: 1px solid #7509e1;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
  transition: 0.2s ease;
  background-color: #fff;
  position: relative;
}

.pro:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #7509e1;
}

.pro img {
  width: 270px;
  height: 200px;
  border-radius: 10px;
}

.pro .des {
  text-align: start;
  position: absolute;
  bottom: 0;
  color: #fff;
  display: none;
  padding: 10px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 10px;
  width: 100%;
}

.pro:hover .des {
  display: block;
}

.pro .des span {
  color: #ffffff;
  font-size: 13px;
}

.pro .des h5 {
  padding-top: 7px;
  color: #ffffff;
  font-size: 14px;
}

.pro .des i {
  font-size: 12px;
  color: #5161ce;
}

.pro .des h4 {
  padding-top: 7px;
  font-size: 13px;
  font-weight: 700;
  color: #000;
  opacity: 0.8;
}

@media (max-width: 500px) {
  *{
  overflow-x: hidden;
}
 .left-section {
    padding-left: 1rem;
    width: 100%;
    margin-bottom: 2rem;
}

  .left-section h2 {
    font-size: 1rem;
  }

    .pro {
    width: 200px;
}

  .pro .des {
    padding: 5px;
    font-size: 12px;
  }

  .pro .des h5 {
    font-size: 12px;
  }

  .pro .des h4 {
    font-size: 11px;
  }

  .pro img {
  width: 300px;
  height: 200px;
  border-radius: 10px;
}
}
</style>
