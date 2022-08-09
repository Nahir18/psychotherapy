<template>
  <div id="documents">
    <Carousel
        @change="changeValue"
        :image-data="imageData"
        :imageKey="'documentPhoto'"
    />
    <div class="document-description">
      <div class="fw-700 fs-21px" v-if="imageData[currentIndex].documentType">
        {{imageData[currentIndex].documentType}}
      </div>
      <div class="p-t-40 fs-19px" v-if="imageData[currentIndex].documentName">
        {{imageData[currentIndex].documentName}}
      </div>
      <div class="p-t-40 fs-21px" v-if="imageData[currentIndex].date">
        {{`Дата: ${imageData[currentIndex].date}`}}
      </div>
    </div>
  </div>
</template>
<script>
import Carousel from '../../carousel'
export default {
  name: "DocumentsPage",
  components: {
    Carousel
  },
  data() {
    return {
      currentIndex: 0,
      imageData: [
        {
          documentPhoto: "diplomPhoto",
          documentType: "Диплом о завершении обучения по спецальности ",
          documentName: "“Психологическое консультирование и психодиагностика”",
          date: "10.01.2019"
        },
        {
          documentPhoto: "diplomPhoto",
          documentType: "",
          documentName: "",
          date: ""
        },
        {
          documentPhoto: "diplomPhoto",
          documentType: "",
          documentName: "",
          date: ""
        },
        {
          documentPhoto: "diplomPhoto",
          documentType: "",
          documentName: "",
          date: ""
        },
        {
          documentPhoto: "diplomPhoto",
          documentType: "",
          documentName: "",
          date: ""
        },
      ]
    }
  },
  methods: {
    changeValue(value) {
      this.currentIndex = value
    }
  },
}
</script>

<style scoped>
  .document-description {
    padding-top: 38px;
  }
</style>