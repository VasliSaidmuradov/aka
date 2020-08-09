<template>
  <div>
    <!-- <img src="~/assets/img/logo.png" alt="logo"> -->
    <p class="logo__text">
      aka
      <sup class="logo__icon">
        <icon-logo/>
      </sup>
    </p>
  </div>
</template>

<script>
import iconLogo from '~/components/icons/iconLogo.vue'
export default {
  components: {
    iconLogo
  },
  props: {
    logoImage: String
  }
};
</script>

<style lang="scss" scoped>
  .logo {
    &__text {
      font-family: 'Comfortaa';
      font-size: 2.5rem;
      font-weight: bold;
      margin: 0;
    }
    &__icon{
      margin-left: -.5rem;
    }
  }

</style>