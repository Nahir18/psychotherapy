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
        :style="{minHeight: 1502 + 'px'}"
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
    <PageContainer
        :style="{minHeight: 966 + 'px'}"
        title="Документы"
    >
      <DocumentsPage />
    </PageContainer>
    <PageContainer
        :style="{minHeight: 1023 + 'px'}"
        title="Статьи"
        colored
    >
      <ArticlesPage />
    </PageContainer>
  </div>
</template>

<script>
import FirstSlide from '../slides/1slide'
import AboutPage from '../slides/aboutPage'
import TestsSlide from '../slides/testsSlide'
import ConsultationsPage from '../slides/consultations'
import PageContainer from '../PageContainer'
import DocumentsPage from '../slides/documents'
import ArticlesPage from '../slides/articles'
export default {
  name: "MainPage",
  components: {
    FirstSlide,
    AboutPage,
    TestsSlide,
    ConsultationsPage,
    PageContainer,
    DocumentsPage,
    ArticlesPage
  }
}
</script>

<style scoped>

</style>