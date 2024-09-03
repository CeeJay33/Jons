import {resolve} from "path";
export default defineNuxtConfig({
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      "Instrument+Sans": [400, 500, 700], 
    },
    display: "swap", 
    prefetch: true, 
    preload: true, 
  },

  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: false,
});
