<template>
  <main>
    <div class="container">
      <slider-main></slider-main>
    </div>
    <section class="container-fluid">
      <portfolio-main class="row" />
    </section>
    <section class="container my-5 py-5">
      <p class="text__title">Almaty Based Dental Laboratory</p>
      <p class="text__subtitle">
        Nurmakov street 152, Almaty.
      </p>
    </section>
  </main>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
import sliderMain from "~/components/slider/sliderMain.vue";
import portfolioMain from "~/components/portfolio/portfolioMain.vue";

export default {
  components: {
    AppLogo,
    sliderMain,
    portfolioMain
  }
};
</script>

<style lang="scss" scoped>
.slider-wrapper {
  width: 60%;
  min-width: 25rem;
  margin: 0 auto;
  padding: 3rem 0;
}

.text {
  &__title {
    color: $text-color-dark-gray;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;

    &:before {
      content: "";
      position: absolute;
      top: 58%;
      left: 0;
      width: 50%;
      min-width: 25rem;
      height: 0;
      border-bottom: 1px solid $text-color-dark-gray;
    }
  }
  &__subtitle {
    color: $text-color-main;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
}
</style>

