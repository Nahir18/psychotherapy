<template>
  <div v-if="screenSize > phoneScreenSize" class="page-container display-flex align-center justify-center">
    <img class="image" :src="'/mainPageImage.svg'" alt="">
    <div class="title p-absolute">
      <h1>Помогу разобраться</h1>
      <span class="p-t-26">Сделай шаг к здоровой<br>и счасливой жизни!</span>
      <div class="p-t-46">
        <button class="button bg-color-pink">Сделать шаг</button>
      </div>
    </div>
  </div>
  <div
      v-else
  >
    <div class="background">
      <img
          v-for="index in 3"
          :key="index"
          :src="require('/public/pazleBackground.svg')" alt=""
          class="puzzle-background"
      >
    </div>
    <div class="page-content">
      <div>
        <div class="title fs-28px">
          Помогу разобраться
        </div>
        <div class="fs-12px p-t-19">
          Сделай шаг к здоровойи счасливой жизни!
        </div>
        <div
            class="display-flex justify-end p-t-46"
        >
          <button class="bg-color-pink">
            Сделать шаг
          </button>
        </div>
      </div>
      <img
          class="image"
          :src="require('/public/pictures/consultations1.svg')" alt=""
      >
    </div>
  </div>
</template>

<script>
import { PHONE_SCREEN_SIZE } from "@/constants";

export default {
  name: "FirstPage",
  props: {
    screenSize: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      phoneScreenSize: PHONE_SCREEN_SIZE
    }
  },
}
</script>

<style scoped>
.page-container {
  height: 768px;
}
.puzzle-background {
  width: 100%;
  margin-top: -7px;
}
.page-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 522px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  left: 142px;
  top: 211px
}
.background {
  /*z-index: 0;*/
  /*position: absolute;*/
  /*top: 0;*/
  /*width: 100%;*/
  min-height: 100%;
  min-width: 640px;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
@media (max-width: 440px) {
  .image {
    padding-bottom: 47px;
    max-height: 275px;
  }
  .title {
    font-size: 28.4734px;
  }
}
@media (max-width: 750px) {
  .image {
    max-width: 427px;
    max-height: 304px;
  }
  .page-container {
    height: 426px;
  }
}
h1 {
}
</style>