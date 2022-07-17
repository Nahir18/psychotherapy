<template>
  <div>
    <FirstSlide />
    <PageContainer
        title="Обо мне"
        colored
    >
      <AboutPage />
    </PageContainer>
    <PageContainer
        title="С чем могу помочь"
    >
      <TestsSlide />
    </PageContainer>
    <PageContainer
        :style="{minHeight: 655 + 'px'}"
        title="Консультации"
        colored
    >
      <ConsultationsPage />
    </PageContainer>
  </div>
</template>

<script>
import FirstSlide from '../slides/1slide'
import AboutPage from '../slides/aboutPage'
import TestsSlide from '../slides/testsSlide'
import ConsultationsPage from '../slides/consultations'
import PageContainer from '../PageContainer'
export default {
  name: "MainPage",
  components: {
    FirstSlide,
    AboutPage,
    TestsSlide,
    ConsultationsPage,
    PageContainer
  }
}
</script>

<style scoped>

</style>