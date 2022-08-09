<template>
  <div>
    <div
        class="carousel-container bg-color-yellow"
    >
      <img :src="`/documents/${imageData[this.currentImageIndex][imageKey]}.png`" alt="">
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
          class="display-flex justify-between"
          style="width: 117px"
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
  }
  .carousel-dots {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
</style>