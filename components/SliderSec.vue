<template>
  <div class="designers__section">
    <div class="content-wrapper">
      <div class="left-section">
        <h2>30+ Brands Designed</h2>
      </div>
      
      <!-- Right marquee section for sliding content -->
      <div class="right-section">
        <div class="marquee">
          <div class="track" ref="track">
            <div class="content">
  
          <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
          <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_11-44-20.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
          <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_12-33-54.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
          <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_12-34-42.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
          <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>

           <div class="pro">
              <img src="~/assets/images/photo_2024-09-19_11-33-41.jpg" alt="">
           
            <div class="des">
              <span><i class="fa fa-eye"></i></span>
              <h5>animation</h5>
              <h4>Fashion Designs</h4>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
// import axios from 'axios';

export default {
  name: "TopDesigners",
  data() {
    return {
    }
  },
  
  beforeUnmounted() {
    this.stopAnimation();
  },
  computed: {
    // duplicatedDesigners() {
    //   return [...this.designers, ];
    // }
  },
  methods: {
   
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
    },


   
  }
};
</script>

<style>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

body{
  overflow-x: hidden;
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
  position: relative;
}

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

.content{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
}

.content .first__content{
    width: 250px;
    height: 250px;
    background-color: #ccc;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}


.pro-container{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 3rem 0;
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

/* .top{
margin-top: 50px;
}

.top h2{
color: #000;
font-size: 35px;
font-family: arial;
text-align: left;
padding-left: 7rem;
font-weight: 500;
} */

 .pro .cart{
  width: 40px;
  height: 40px;
  line-height: 40px;
  border-radius: 50px;
  background: #5161ce;
  color: #ccc;
  border: 1px solid #cce7d0;
  position: absolute;
  bottom: 20px;
  right: 10px;
  cursor: pointer;
  opacity: 1;
}

.pro .cart:hover{
  background-color: #5161ce;
}


</style>
