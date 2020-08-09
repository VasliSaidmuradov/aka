<template>
  <header class="header">
    <nav-main></nav-main>
  </header>
</template>

<script>
import navMain from '@/components/nav/navMain.vue'
export default {
  components: {
    navMain
  },
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 1rem 3rem;
  }  
</style>