<template>
  <section class="portfolio">
    <div class="portfolio__container">
      <div class="portfolio__item" v-for="image in portfolioList" :key="image.id">
        <img class="portfolio__item-img" :src="image.imageSrc" alt="portfolio" />
        <div class="portfolio__title-wrap">
          <p class="portfolio__image-title">{{ image.title }}</p>
          <p class="portfolio__image-subtitle">{{ image.subtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      portfolioList: [
        {
          id: 1,
          imageSrc: require("~/assets/img/portfolio/001.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 2,
          imageSrc: require("~/assets/img/portfolio/002.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 3,
          imageSrc: require("~/assets/img/portfolio/003.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 4,
          imageSrc: require("~/assets/img/portfolio/004.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 5,
          imageSrc: require("~/assets/img/portfolio/005.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 6,
          imageSrc: require("~/assets/img/portfolio/006.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 7,
          imageSrc: require("~/assets/img/portfolio/007.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 8,
          imageSrc: require("~/assets/img/portfolio/008.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 9,
          imageSrc: require("~/assets/img/portfolio/009.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 10,
          imageSrc: require("~/assets/img/portfolio/010.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 11,
          imageSrc: require("~/assets/img/portfolio/011.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 12,
          imageSrc: require("~/assets/img/portfolio/012.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 13,
          imageSrc: require("~/assets/img/portfolio/013.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 14,
          imageSrc: require("~/assets/img/portfolio/014.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 15,
          imageSrc: require("~/assets/img/portfolio/015.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 16,
          imageSrc: require("~/assets/img/portfolio/016.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 17,
          imageSrc: require("~/assets/img/portfolio/017.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 18,
          imageSrc: require("~/assets/img/portfolio/018.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 19,
          imageSrc: require("~/assets/img/portfolio/019.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 20,
          imageSrc: require("~/assets/img/portfolio/020.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 21,
          imageSrc: require("~/assets/img/portfolio/021.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 22,
          imageSrc: require("~/assets/img/portfolio/022.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 23,
          imageSrc: require("~/assets/img/portfolio/023.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 24,
          imageSrc: require("~/assets/img/portfolio/024.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 25,
          imageSrc: require("~/assets/img/portfolio/025.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 26,
          imageSrc: require("~/assets/img/portfolio/026.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 27,
          imageSrc: require("~/assets/img/portfolio/027.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        },
        {
          id: 28,
          imageSrc: require("~/assets/img/portfolio/028.jpeg"),
          title: "black & white",
          subtitle: "lorem ipsum dolar sit amet"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  &__container {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    width: 25%;
    height: 25rem;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba($base-color, 0.95);
      opacity: 0;
      z-index: 0;
      transition: all 0.3s;
    }

    &:hover:before {
      z-index: 1;
      opacity: 1;
    }
    &:hover &-img {
      transform: scale(1.1);
      background: $base-color;
    }
    &:hover .portfolio__title-wrap {
      bottom: 8%;
      z-index: 2;
    }

    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.2s;
      position: relative;
    }
  }
  &__title-wrap {
    position: absolute;
    bottom: 3%;
    left: 10%;
    color: #fff;
    text-align: left;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: all .3s;
    z-index: -1;

  }
  &__image-title {
    margin-bottom: 0.25rem;
    font-weight: 600;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: -1.5rem;
      left: 0;
      width: 8rem;
      height: 1px;
      background-color: $text-color-main;
    }
  }
  &__image-subtitle {
    font-size: 0.6rem;
    font-weight: 300;
  }
}
</style>