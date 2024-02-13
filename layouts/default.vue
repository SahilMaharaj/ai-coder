<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://localhost:3000" + route.path,
    },
  ],
});
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #3c4142;
  color: #fff;
  font-family: "Inter", sans-serif;
}
</style>
