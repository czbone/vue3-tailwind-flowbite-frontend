<template>
  <div>
    <h2 class="text-4xl mb-4">{{ msg }}</h2>
    <div class="flex flex-wrap content-center">
      <img alt="Vite logo" width="120" src="@/assets/vite.svg" />
      <img alt="Vue logo" width="120" src="@/assets/vue.png" />
      <img alt="Tailwind logo" width="150" src="@/assets/tailwind.png" />
      <img alt="Flowbite logo" width="120" src="@/assets/flowbite.svg" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{ msg: string }>()
</script>
