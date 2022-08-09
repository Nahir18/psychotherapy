<template>
  <div
      style="padding-top: 112px"
      class="display-flex justify-center"
  >
    <div class="articles-page-container">
      <div
          class="link-card article-link display-flex bg-color-white justify-between text-initial"
          v-for="item in articles"
          :key="item.title"
      >
        <div class="fw-700 fs-21px p-r-16 display-flex align-center">
          {{item.title}}
        </div>
        <div class="display-flex align-center">
          <img
              :src="`/articles/${item.imgLink}.png`" alt=""
              class="image-container"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesPage",
  data() {
    return {
      articles: [
        {
          title: "Постучи. Как избавиться от тревоги",
          imgLink: "image1"
        },
        {
          title: " Я какая-то неправильная. Что со мной?",
          imgLink: "image3"
        },
        {
          title: "Как избавляться от неприятных воспоминаний",
          imgLink: "image8"
        },
        {
          title: "Выбилась из сил. Как найти свой источник энергии",
          imgLink: "image4"
        },
        {
          title: "Радость — лучшее лекарство от тревоги",
          imgLink: "image5"
        },
        {
          title: "Как уснуть, когда не спится. ТОП-5 правил крепкого сна",
          imgLink: "image7"
        },
        {
          title: "Практика прощения",
          imgLink: "image6"
        },
        {
          title: "Посмореть другие статьи",
          imgLink: "Group1"
        },
      ]
    }
  },
}
</script>

<style scoped>
  .article-link {
    width: 307px;
    height: 140px;
    padding-right: 15px;
    padding-left: 26px;
    line-height: 24px;
  }
  .articles-page-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 13px;
    grid-column-gap: 96px;
  }
  .image-container {
    max-height: 120px;
    border-radius: 32px;
  }
</style>