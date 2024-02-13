// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Inter: [400, 700],
        },
      },
    ],
  ],
});
