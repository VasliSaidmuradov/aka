<template>
  <div>
    <client-only>
      <!-- <div v-swiper="swiperOptions" class="slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slider in sliderData" :key="slider.id">
          <p class="slider__title">{{ slider.title }}</p>
          <p class="slider__subtitle">{{ slider.subtitle }}</p>
        </div>
        <div class="slider__pagination">
          <span v-for="slider in sliderData" :key="slider.id">{{ slider.id }}</span>
        </div>
      </div>
      </div>-->
      <!-- <swiper ref="carousel" class="swiper" :options="swiperOptions">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
    </client-only>
    <div class="swiper" v-swiper:myDirectiveSwiper="swiperOptions">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for="index in 6" :key="index">
          <span>Slide {{ index }}</span>
        </div> -->
        <div class="swiper-slide" v-for="slider in sliderData" :key="slider.id">
          <div class="slider__wrap">
            <span class="slider__title">{{ slider.title }}</span>
            <p class="slider__subtitle">{{ slider.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderData: [
        {
          id: 1,
          title: "Creativity and Design",
          subtitle: "We are a dental laboratory that belive in the ideas."
        },
        {
          id: 2,
          title: "Identities and Experiences",
          subtitle: "We are an independent web design agency."
        },
        {
          id: 3,
          title: "Elevate and Empower",
          subtitle: "We are a design & development agency."
        }
      ],
      swiperOptions: {
        slidesPerView: 1,
        // loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        // autoplay: {
        //   delay: 3000,
        // },
        speed: 1000,
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.slider {
  width: 100%;
  // min-height: 20rem;
  // border: 1px dashed blue;
  overflow: hidden;

  &__wrap {
    width: 100%;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
  }

  &__item {
    min-width: 100%;
  }
  &__title {
    color: $base-color;
    position: relative;
    font-size: 1.2rem;
    font-weight: 300;

    &:before {
      content: "";
      position: absolute;
      top: 58%;
      left: 0;
      width: 50%;
      min-width: 30rem;
      height: 0;
      border-bottom: 1px solid $base-color;
      // transform:
    }
  }
  &__subtitle {
    color: $text-color-main;
    font-size: 2rem;
    font-weight: 300;
    width: 50%;
    min-width: 30rem;
    line-height: 1.2;
  }
}
</style>