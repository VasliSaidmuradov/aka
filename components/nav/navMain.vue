<template>
  <nav class="nav">
    <logo-main></logo-main>
    <!-- <ul class="nav__menu-list"> -->
    <!-- <li v-for="(item, index) in menuList" :key="index" class="nav__menu-item">{{ item }}</li> -->
    <button
      @click="openMenu()"
      class="hamburger hamburger--spin"
      :class="{'is-active': isActive}"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <!-- </ul> -->
  </nav>
</template>

<script>
import logoMain from "@/components/logo/logoMain.vue";

export default {
  components: {
    logoMain
  },
  data() {
    return {
      logoImageSrc: "~/assets/img/logo.png",
      // menuList: ["menu-1", "menu-2", "menu-3"]
      isActive: false
    };
  },
  methods: {
    openMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  &__menu-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  &__menu-item {
    padding: 0 0 0 1rem;
    color: #ff214f;
  }
}
.hamburger {
  outline: none;
}
</style>