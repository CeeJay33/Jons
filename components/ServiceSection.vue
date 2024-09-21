<template>
  <div class="our__service__section scroll-mt-40" id="Services">
    <div class="service__section">
      <span>🚀 Innovative solutions, Measurable results</span>
      <h1>We specialize in the following services</h1>
    </div>

    <div class="flexing__services__container">
      <div class="services__container" v-for="(service, index) in services" :key="index">
        <div class="__container">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <span class="quote flex gap-2 items-center pt-8">{{ service.check }} <img src="~/assets/images/icons8-right-arrow-64.png" class="w-6" alt=""></span>
        </div>

        <div class="circular__icon">
          <svg v-html="service.svg" height="1em" width="1em"></svg>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Digital Marketing",
          description: "Growing brands online through digital channels.",
          check: "Get a quote",
          svg: `<path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"></path><path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"></path>`,
        },
        {
          title: "Product Design",
          description: "Creating products that users love and businesses need.",
          check: "Get a quote",
          svg: `<path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"></path>`,
            },
        {
          title: "Web Design",
          description: "Designing websites that are visually appealing & user-friendly.",
          check: "Get a quote",
          svg: `<path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"></path><path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"></path>`,
        },
        {
          title: "UI/UX Design",
          description: "Creating user interfaces that are both efficient and enjoyable.",
          check: "Get a quote",
          svg: `<path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"></path><path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"></path>`,
        },
        {
          title: "Business Strategy",
          description: "Developing and executing plans to achieve business goals.",
          check: "Get a quote",
          svg: `<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path>`,
        },
        {
          title: "Research",
          description: "Gathering and analyzing data to inform decision-making.",
          check: "Get a quote",
          svg: `<path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"></path>`,
        },
        {
          title: "Web Development",
          description: "Building and maintaining websites and web applications.",
          check: "Get a quote",
          svg: `<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></path>`,
            },
        {
          title: "Brand Design",
          description: "Creating brands that are unique, memorable, and meaningful.",
          check: "Get a quote",
          svg: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>`,
        },
      ],
    };
  },
};
</script>


<style scoped>
.our__service__section {
  background-color: #1f2122;
  padding: 7rem 2rem; /* Added more padding for better spacing */
}

.service__section {
  text-align: center;
}

.service__section span {
  background-color: #1b1b1b;
  font-family: "Instrument Sans", sans-serif;
  color: #fff;
  padding: 3px 8px;
  border-radius: 4px;
}

.service__section h1 {
  font-size: 38px;
  max-width: 100%; /* Make heading more flexible for different screen sizes */
  font-family: "Instrument Sans", sans-serif;
  font-weight: 700;
  margin: 1rem auto;
  color: #fff;
  line-height: 1.4em;
}

.flexing__services__container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.services__container {
    margin-top: 2rem;
  background-color: #292a2d;
  width: 100%;
  max-width: 320px; /* Limiting width to make it balanced */
  padding: 2rem;
  border-radius: 8px; /* Added slight rounding for modern look */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for elegance */
  transition: transform 0.3s ease;
  position: relative;
}

.services__container:hover {
  transform: translateY(-10px); /* Adds hover effect for interactivity */
}

.services__container .__container h2 {
  color: #fff;
  font-size: 22px;
  font-family: "Instrument Sans", sans-serif;
  font-weight: 700;
}

.services__container .__container p {
  color: #c4c5c7;
  font-size: 1rem;
  font-family: "Instrument Sans", sans-serif;
  padding-top: 10px;
  line-height: 1.6;
}

.services__container .__container span{
    color: #168a29;
}

.circular__icon{
    position: absolute;
    top: -10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    z-index: 99;
    height: 50px;
    background-color: #fff
}
</style>
