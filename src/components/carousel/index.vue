<template>
  <div>
    <div
        class="carousel-container bg-color-yellow"
    >
      <div
          style="height: 45vh"
          class="display-flex align-center justify-center"
      >
        <img
            :src="`/documents/${imageData[this.currentImageIndex][imageKey]}`" alt=""
            class="carousel-content"
        >
      </div>
    </div>
    <div class="display-flex justify-center p-t-19">
      <div
          class="carousel-dots m-l-6"
          v-for="(item, index) in imageData"
          :key="item"
          :class="`${index === currentImageIndex ? 'bg-color-dark-green' : 'bg-color-yellow'}`"
      />
    </div>
    <div class="display-flex justify-center p-t-20">
      <div
          class="display-flex justify-between arrows-container"
      >
        <img
            class="cursor"
            @click="prev"
            :src="require('/public/arrow.svg')"
            alt=""
        >
        <img
            class="rotate-180 cursor"
            @click="next"
            :src="require('/public/arrow.svg')"
            alt=""
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      currentImageIndex: 0
    }
  },
  props: {
    imageData: {
      type: Array,
      default: () => ([])
    },
    imageKey: {
      type: String,
      default: ""
    }
  },
  methods: {
    prev() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex = this.currentImageIndex - 1
        this.$emit('change', this.currentImageIndex)
      }
    },
    next() {
      this.currentImageIndex = this.currentImageIndex + 1
      this.$emit('change', this.currentImageIndex)
    },
  },
}
</script>

<style scoped>
  .carousel-container {
    padding: 40px 85px;
    display: inline-block;
    border-radius: 103.183px;
    margin-top: 107px;
    min-width: 666px;
    min-height: 448px;
  }
  .carousel-content {
    max-width: 495px;
    max-height: 370px;
  }
  .carousel-dots {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .arrows-container {
    width: 117px;
  }
  @media (max-width: 750px) {
    .carousel-container {
      padding: 29px 63px;
      min-width: 493px;
      min-height: 322px;
    }
    .carousel-content {
      max-width: 366px;
      max-height: 274px;
    }
    .cursor {
      max-width: 26px;
    }
    .arrows-container {
      width: 86px;
    }
  }
  @media (max-width: 440px) {
    .carousel-container {

    }
  }
</style>