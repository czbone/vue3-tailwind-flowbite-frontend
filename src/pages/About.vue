<template>
  <HelloWorld msg="Vite + Vue 3 + Tailwind + Flowbite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  }
})
</script>

<style scoped>
.contents {
  width: 800px;
}
</style>
