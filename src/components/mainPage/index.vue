<template>
  <div>
    <FirstSlide
        :screenSize="screenSize"
    />
    <PageContainer
        style="position: relative"
        v-for="(slide, index) in slides"
        :key="slide.title"
        :title="slide.title"
        :minHeight="slide.minHeight"
        :colored="index % 2 === 0"
        :screenSize="screenSize"
    >
      <component
          :is="slide.component"
          :screenSize="screenSize"
      />
    </PageContainer>
  </div>
</template>

<script>
import PageContainer from '../PageContainer'
import FirstSlide from '../slides/1slide'
import AboutPage from '../slides/aboutPage'
import TestsSlide from '../slides/testsSlide'
import ConsultationsPage from '../slides/consultations'
import DocumentsPage from '../slides/documents'
import ArticlesPage from '../slides/articles'
export default {
  name: "MainPage",
  components: {
    PageContainer,
    AboutPage,
    TestsSlide,
    ConsultationsPage,
    FirstSlide,
    DocumentsPage,
    ArticlesPage
  },
  data() {
    return {
      slides: [
        {
          component: AboutPage,
          title: "Обо мне",
          minHeight: "",
          colored: true
        },
        {
          component: TestsSlide,
          title: "С чем могу помочь",
          minHeight: ""
        },
        {
          component: ConsultationsPage,
          title: "Консультации",
          minHeight: "",
        },
        {
          component: DocumentsPage,
          title: "Документы",
          minHeight: "",
        },
        {
          component: ArticlesPage,
          title: "Статьи",
          minHeight: 1023,
        },
      ]
    }
  },
  props: {
    screenSize: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>