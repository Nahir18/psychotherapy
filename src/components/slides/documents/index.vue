<template>
  <div
      id="documents"
      class="page-container"
  >
    <Carousel
        @change="changeValue"
        :image-data="imageData"
        :imageKey="'documentPhoto'"
    />
    <div class="document-description">
      <div class="fw-700 fs-21px document-name">
        {{imageData[currentIndex].documentType || ""}}
      </div>
      <div class="p-t-40 fs-19px">
        {{imageData[currentIndex].documentName || ""}}
      </div>
      <div class="p-t-40 fs-21px document-date">
        {{imageData[currentIndex].date && `Дата: ${imageData[currentIndex].date}` || ""}}
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
          documentPhoto: "diplomPhoto.png",
          documentType: "Диплом о завершении обучения по спецальности ",
          documentName: "“Психологическое консультирование и психодиагностика”",
          date: "10.01.2019"
        },
        {
          documentPhoto: "CCI06072022.jpg",
          documentType: "Диплом",
          documentName: "",
          date: ""
        },
        {
          documentPhoto: "CCI06072022_0002.jpg",
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
    min-height: 195px;
  }
  .page-container {
    padding-bottom: 27px;
  }
  @media (max-width: 750px) {
    .document-name {
      font-size: 16px;
    }
    .document-description {
      font-size: 14px;
    }
    .document-date {
      font-size: 16px;
    }
  }
</style>