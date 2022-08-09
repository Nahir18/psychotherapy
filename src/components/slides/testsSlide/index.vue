<template>
    <div
        class="display-flex fd-column align-center"
        id="tests"
    >
      <div
          class="page-content"
      >
        <div
            v-for="link in testLinks"
            class="link-card test-card"
            :key="link.title"
            :title="link.title"
        >
          <img
              :src="`/pictures/${link.imageUrl}`"
              alt=""
              class="p-t-16"
          >
          <span
              class="p-b-16 fw-700"
          >
            {{link.title}}
          </span>
          <button
              class="bg-color-orange test-button color-black"
          >
            пройти тест
          </button>
        </div>
      </div>
      <button
          class="bg-color-pink fw-400 m-t-41 fs-21px"
      >
        Другие тесты
      </button>
    </div>
</template>

<script>
export default {
  name: "TestSlide",
  data () {
    return {
      testLinks: [
        {
          title: "Отношения",
          imageUrl: "testImg.svg",
          link: "qweqwewq"
        },
        {
          title: "Самооценка",
          imageUrl: "testImg2.svg",
          link: "qweqwewq"
        },
        {
          title: "Депрессия",
          imageUrl: "testImg3.svg",
          link: "qweqwewq"
        },
        {
          title: "Горе",
          imageUrl: "testImg4.svg",
          link: "qweqwewq"
        },
        {
          title: "Страхи",
          imageUrl: "testImg5.svg",
          link: "qweqwewq"
        },
        {
          title: "Вина",
          imageUrl: "testImg6.svg",
          link: "qweqwewq"
        },
        {
          title: "Паничекие атаки",
          imageUrl: "testImg7.svg",
          link: "qweqwewq"
        },
        {
          title: "Неуверенность",
          imageUrl: "testImg8.svg",
          link: "qweqwewq"
        },
        {
          title: "Тревога",
          imageUrl: "testImg9.svg",
          link: "qweqwewq"
        }
      ]
    }
  }
}

</script>

<style scoped>
  .page-content {
    padding-top: 141px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 13px;
    column-gap: 32px;
  }
  .test-button {
    max-width: 127px;
    margin-bottom: 16px;
    font-size: 12px;
  }
 .test-card {
   display: flex;
   height: 327px;
   width: 217px;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
 }
</style>