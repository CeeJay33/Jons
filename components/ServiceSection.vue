<template>
  <div class="our__service__section scroll-mt-40" id="Services">
    <div class="service__section">
      <span>🚀 Innovative solutions, Measurable results</span>
      <h1>We specialize in the following services</h1>
    </div>

    <div class="flexing__services__container">
      <div
        class="services__container"
        v-for="(service, index) in services"
        :key="index"
      >
        <div class="__container">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
          <span 
            class="quote flex gap-2 items-center pt-8 cursor-pointer"
            @click="showDetails(index)" title="Click twice to show full details"
          >
            {{ service.check }}
            <img
              src="~/assets/images/icons8-right-arrow-64.png"
              class="w-6"
              alt="Arrow icon"
            />
          </span>
        </div>

        <div class="circular__icon">
          <svg v-html="service.svg" height="1em" width="1em"></svg>
        </div>
      </div>
    </div>

    <!-- Dynamic wide container that slides up on click -->
    <div v-if="selectedService !== null" class="dynamic__content__container">
  
      <div class="dynamic__content">
           <div class="hang z-50 h-10 sticky top-0 w-full"><button @click="hideDetails"><img class="w-6" src="~/assets/images/output-onlinepnggtools.png" alt=""></button></div>
        <h2>{{ services[selectedService].title }}</h2>
      
        <h4>{{ services[selectedService].subTitleI }}</h4>
        <p>{{ services[selectedService].longDescription_1 }}</p>
        <h4>{{ services[selectedService].subTitleII }}</h4>
        <p>{{ services[selectedService].longDescription_2 }}</p>
        <h4>{{ services[selectedService].subTitleIII }}</h4>
        <p>{{ services[selectedService].longDescription_3 }}</p>
        <h4>{{ services[selectedService].subTitleIV }}</h4>
        <p>{{ services[selectedService].longDescription_4 }}</p>
        <h4>{{ services[selectedService].subTitleV }}</h4>
        <p>{{ services[selectedService].longDescription_5 }}</p>
        <h4>{{ services[selectedService].subTitleVI }}</h4>
        <p>{{ services[selectedService].longDescription_6 }}</p>
        <h4>{{ services[selectedService].subTitleVII }}</h4>
        <p>{{ services[selectedService].longDescription_7 }}</p>
        <h4>{{ services[selectedService].subTitleVIII }}</h4>
        <p>{{ services[selectedService].longDescription_8 }}</p>
        <h4>{{ services[selectedService].subTitleIX }}</h4>
        <p>{{ services[selectedService].longDescription_9 }}</p>
        <h4>{{ services[selectedService].subTitleX }}</h4>
        <p>{{ services[selectedService].longDescription_10 }}</p>
        
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
       selectedService: null,
      services: [
        {
          title: "Graphics Design",
          subTitleI: "Art Direction",
          subTitleII: "Layout & Composition",
         longDescription_1: "Art direction involves managing and guiding the visual elements of a project .It ensures that the visual aspects align with the overall theme ,message ,and style ,setting the creative tone for all graphical content.",
          longDescription_2: "Layout and composition refer to the arrangement of visual elements like text , images , and graphics to create a harmonious design .This includes structuring pages for balance ,readability ,and effective communication.",
          description:
            "Custom-designed business cards that leave a lasting impression. Available in various finishes",
          check: "Know more",
          svg: `<path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"></path><path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"></path>`,
        },



        {
          title: "Digital Printing",
          subTitleI: "Business Cards",
          subTitleII: "Invitation Cards",
          subTitleIII: "Access Cards",
          subTitleIV: "Flyers(A6,A5,A3)",
          subTitleV: "Posters(A3,A2,A1,A0)",
          subTitleVI: "Thank You Cards",
          subTitleVII: "Letterheads",
          subTitleVIII: "Magazines",
          subTitleIX: "Brochures",
          subTitleX: "Books",
          longDescription_1: "Custom-designed business cards that leave a lasting impression .Available in various finishes like matte , gloss ,or textured for a professional look.",
          longDescription_2: "Personalized invitation cards for events such as weddings ,birthdays ,corporate events ,and more. Available in different paper textures and styles.",
          longDescription_3: "Durable and functional access cards used for security purposes ,customized with branding elements and secure features.",
          longDescription_4: "Creative flyers printed in high-quality digital formats ,perfect for promotions , advertisements ,and event announcements.",
          longDescription_5: "Vibrant and eye-catching posters for advertising ,event promotions ,or educational purposes . Available in various sizes to meet your marketing needs.",
          longDescription_6: "Professionally designed thank-you cards, personalized for any occasion ,offering an elegant way to express gratitude.",
          longDescription_7: "Custom letter heads that add professionalism to your business communication , reinforcing your brand identity.",
          longDescription_8: "Full-color magazine printing ,ideal for showcasing products ,services ,or creative content .Layout and designser vices included.",
          longDescription_9: "Well-designed brochures that convey key messages about your brand or services .Available in various folds (bi-fold,tri-fold,etc.)and paper finishes.",
          longDescription_10: "High-quality book printing for various types such as novels , textbooks , and corporate handbooks . Available in hard or soft covers.",
          description:
            "Art direction involves managing and guiding the visual elements of a project",
          check: "Know more",
          svg: `<path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z"></path>`,
        },




        {
          title: "Large format Printing",
          subTitleI: "Billboards",
          subTitleII: "Banners",
          subTitleIII: "Block Out / Backlit",
          subTitleIV: "Vinyl Stickers",
          subTitleV: "One-Way Graphics",
          subTitleVI: "Highway Banners",
          subTitleVII: "SAV Stickers",


          longDescription_1: "Attention-grabbing billboards that create a large ,visible presence for your brand or advertisement ,strategically designed for maximum impact.",
          longDescription_2: "Durable and weather-resistant banners , available in various sizes, perfect for out door advertising or event promotions.",
          longDescription_3: "Block out and backlit banners for vibrant advertising both day and night, providing high visibility even in low-light conditions.",
          longDescription_4: "Custom vinyl stickers used for promotional or branding purposes. They are durable ,waterproof ,and perfect for both indoor and outdoor use.",
          longDescription_5: "One-way graphics allow for creative advertising on windows and glass surfaces ,providing privacy while still delivering vibrant messages.",
          longDescription_6: "Large ,highly visible banners designed for road side advertising ,helping to promote your brand to passing traffic.",
          longDescription_7: "Self-Adhesive Vinyl (SAV) stickers ideal for various surfaces ,offering long-lasting and high quality prints.",
          description:
            "Attention-grabbing billboards that create a large ,visible presence for your brand ",
          check: "Know more",
          svg: `<path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"></path><path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"></path>`,
        },




        {
          title: "Offset Printing",
          subTitleI: "Posters",
          subTitleII: "Receipt",
          subTitleIII: "Books",
          subTitleIV: "Calendars",
          subTitleV: "Complimentary Slips",






          longDescription_1: "High-volume,high-quality offset printing for posters of all sizes, delivering crisp ,vivid colors for marketing or artistic purposes.",
          longDescription_2: "Customized receipts for businesses , printed in bulk using offset printing for accuracy and professionalism.",
          longDescription_3: "High-quality book printing using the off set method for sharp text and consistent color reproduction.",
          longDescription_4: "Custom calendars for corporate branding or personal use ,available in different styles and sizes for a year-round promotional presence.",
          longDescription_5: "Professionally printed complimentary slips , adding a personal touch to your business communications.",
          
          description:
            "High-volume offset printing for posters of all sizes, delivering crisp, vivid colors for marketing purpose",
          check: "Know more",
          svg: `<path fill-rule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"></path><path fill-rule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"></path>`,
        },




        {
          title: "Branding",
           subTitleI: "Vehicle Branding",
        subTitleII: "Office Branding",
        subTitleIII: "Shop Branding",
        subTitleIV: "Exhibition Branding",
        subTitleV: "Product Display Stand",
        subTitleVI: "Product Display Hangers",


        longDescription_1: "Transform your vehicles into mobile advertisements with custom vehicle branding that romotes your business where ever you go.",
        longDescription_2: "Enhance your office environment with branded decor , including wall graphics , signage ,and custom furnishings that reflect your corporate identity",
        longDescription_3: "Create a visually appealing shop front that attracts customers and reinforces your brand through signage , window displays , and custom graphics.",
        longDescription_4: "Stand out at exhibitions with creative and bold branding materials like banners ,stands ,and signage that highlight your products or services.",
        longDescription_5: "Custom-designed product display stands that showcase your products in retail environments , attracting customer attention.",
        longDescription_6: "Innovative product hangers for retail displays ,designed to increase visibility and improve presentation ins tores.",
          description: "Enhance your environment with branded decor, including wall grahpics, signage...",
          check: "Know more",
          svg: `<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path>`,
        },


        {
          title: "Signage",
          subTitleI: "3D Signs",
          subTitleII: "Acrylic Signs",
          subTitleIII: "Road Signs",
          subTitleIV: "Sign Boards",
          subTitleV: "Neon Signs",
          subTitleVI: "LED Count down Timer",
          subTitleVII: "Digital LED Sign",

          longDescription_1: "Modern ,bold 3D signs that create a dynamic presence for your business. Available in various materials like acrylic , metal , and plastic.",
          longDescription_2: "Elegant and durable acrylic signs perfect for offices , stores ,or events.These signs can be customized with logos or text.",
          longDescription_3: "Regulatory and directional road signs designed with high-visibility materials for safety and compliance.",
          longDescription_4: "Custom signboards for advertising , branding ,or directional purposes. Available in various sizes and materials for indoor and out door use",
          longDescription_5: "Eye-catching neon signs that light up your brand or message , perfect for shops , restaurants ,or night life venues.",
          longDescription_6: "Specialized LED countdown timers for events or promotional campaigns , adding a modern and digital touch.",
          longDescription_7: "Vibrant ,programmable digital LED signs for dynamic advertising, ideal for store fronts or indoor promotions.",
          description:
            "Elegant and durable acrylic signs perfect for offices, stores, or events...",
          check: "Know more",
          svg: `<path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"></path>`,
        },


        {
          title: "Packaging/Labelling",

          subTitleI: "Product Bottle Labels",
          subTitleII: "Product Packs",
          subTitleIII: "Product Boxes",
          subTitleIV: "Product Nylons",
          subTitleV: "Product Display Hangers",


          longDescription_1: "Custom-designed bottle labels that communicate your brand and product information effectively.",
          longDescription_2: "Innovative product packaging that enhances your product’s visibility and appeal on store shelves.",
          longDescription_3: "Custom-made product boxes for secure packaging and attractive presentation of your products.",
          longDescription_4: "Durable ,branded product nylon bags for packaging that promotes your brand even after purchase.",
          longDescription_5: "Creative and functional display hangers that increase the visibility and market ability of your products in retail stores.",
          description:
            "Building and maintaining websites and web applications.",
          check: "Know more",
           svg: `<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5"></path>`,
        },



         {
          title: "Digital Marketing",

          subTitleI: "Online Adverts",
          subTitleII: "Web Design & Development",
          subTitleIII: "Website Maintenance",
          subTitleIV: "Social Media Management",


          longDescription_1: "Targeted online advertising campaigns designed to increase your brand’s visibility and generate leads across social media platforms and search engines.",
          longDescription_2: "Custom websites that are user-friendly and visually appealing, designed to meet your business goals and provide an excellent user experience.",
          longDescription_3: "Comprehensive website maintenance services ,ensuring that your site runs smoothly , stays secure, and remains up to date with the latest content.",
          longDescription_4: "Effective social media strategies to manage your brand’s online presence , creating engaging content that fosters community interaction and brand growth.",
          description:
            "Building and maintaining websites and web applications.",
          check: "Know more",
           svg: `<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"></path>`,
        },




      
        {
          title: "Promotional materials",
          subTitleI: "Rollup Stands",
          subTitleII: "X Stands",
          subTitleIII: "Snap Frames",
          subTitleIV: "Office Branding",
          subTitleV: "Door Plates",
          subTitleVI: "Tear Drops",
          subTitleVII: "Diary Printing",
          subTitleVIII: "Uniforms",
          subTitleIX: "Flags",


          longDescription_1: "Portable roll-up stands that provide an excellent promotional display solution for events , conferences , or in-store advertising.",
          longDescription_2: "Affordable and easy-to-set-up X stands for banners ,perfect for promoting services or products at any event.",
          longDescription_3: "Stylish and functional snap frames to display posters or notices ,allowing for easy updates of content.",
          longDescription_4: "Tailored branding solutions for your office ,including customized signs, wall decals ,and branded office supplies.",
          longDescription_5: "Professionally designed door plates that add a touch ofclass to office or room identification.",
          longDescription_6: "Tear-drop banners for out door events, providing a unique and eye-catching advertising solution.",
          longDescription_7: "Custom-printed diaries for corporate give aways or personal use,branded with your business logo and colors.",
          longDescription_8: "High-quality uniforms tailored to your business needs, reinforcing your brand through professional employee apparel.",
          longDescription_9: "Custom flags for events ,branding ,or promotions , available in various sizes and styles for both indoor and out door use.",
          description:
            "Portable roll-up stands that provide an excellent promotional display solution for events...",
          check: "Know more",
          svg: `<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10m0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>`,
        },
      ],
    };
  },
methods: {
  showDetails(index) {
    this.selectedService = index;
    const container = document.querySelector('.dynamic__content__container');
    // container.classList.remove('hide');
    container.classList.add('active');
  },
  hideDetails() {
    const container = document.querySelector('.dynamic__content__container');
    // container.classList.remove('active');
    container.classList.add('hide');
    setTimeout(() => {
      this.selectedService = null;
    }, 500); // Wait for the animation to complete
  }
}
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

.__container {
  /* height: 400px; */
  /* padding: 4rem 0; */
  position: relative;
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

.services__container .__container span {
  color: #168a29;
}

.circular__icon {
  position: absolute;
  top: -10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #fff;
}

.dynamic__content__container {
  /* Add styles to ensure the content container is visible and styled properly */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  bottom: 0;
   max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}
.dynamic__content__container.active {
  max-height: 1000px; /* Adjust this based on the content height */
}

@keyframes slideUp {
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 1000px;
    opacity: 1;
  }
}

@keyframes slideDown {
  0% {
    max-height: 1000px;
    opacity: 1;
  }
  100% {
    max-height: 0;
    opacity: 0;
  }
}

.dynamic__content__container.active {
  animation: slideUp 1.5s ease forwards;
}

.dynamic__content__container.hide {
  animation: slideDown 0.5s ease forwards;
}


::-webkit-scrollbar {
  width: 10px;       
}


.dynamic__content {
  background-color: #292a2d;
  padding: 20px;
  border-radius: 8px;
  overflow-y: scroll;
  padding: 0 4rem;
  height: 400px;
  /* max-width: 600px; */
  width: 50%;
}

.hang{
  background-color: #292a2d;
  text-align: right;
}

.hang button{
 margin-top: 1rem;
}

.dynamic__content h2{
  color: #168a29;
  font-family: "Instrument Sans", sans-serif;
  font-weight: 600;
  font-size: 23px;
  padding: 1rem 0;
}

.dynamic__content h4{
   color: #ffffff;
  font-family: "Instrument Sans", sans-serif;
  font-weight: 600;
  font-family: 11px;
  padding: 0.1rem 0.5rem;
  /* list-style: armenian; */
}

.dynamic__content p{
  color: #bdbcbc;
  font-family: "Instrument Sans", sans-serif;
  /* font-weight: 600; */
  /* width: 40%; */
  font-size: 15px;
  padding: 1rem 0;
}

@media (max-width: 500px) {
  .service__section h1 {
    font-size: 30px;
    max-width: 100%; /* Make heading more flexible for different screen sizes */
    font-family: "Instrument Sans", sans-serif;
    font-weight: 700;
    margin: 1rem auto;
    color: #fff;
    line-height: 1.4em;
  }

  .circular__icon {
    position: absolute;
    top: -10%;
    display: flex;
    margin-top: 2rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
  }

  .dynamic__content {
    background-color: #292a2d;
    padding: 20px;
    border-radius: 8px;
    overflow-y: scroll;
    padding: 0 2rem;
    height: 400px;
    /* max-width: 600px; */
    width: 100%;
}

  .__container {
    /* height: 400px; */
    padding-top: 2rem;
    position: relative;
  }
}
</style>
