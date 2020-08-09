<template>
  <footer class="footer container-fluid">
    <div class="container d-flex align-items-center justify-content-between">
      <logo-main></logo-main>
      <span>© 2020 aka is Proudly Powered by Vasli</span>
    </div>
  </footer>
</template>

<script>
import logoMain from "@/components/logo/logoMain.vue";

export default {
  components: {
    logoMain
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 2rem 0;
  border-top: 1px solid $text-color-medium-gray;
}
</style>