<template>
  <div
      class="display-flex justify-center"
      id="consultations"
  >
    <div class="page-content">
      <div
          class="link-card display-flex fd-column consultation-card-link bg-color-white"
          v-for="consultation in consultations"
          :key=consultation.title
      >
        <img
            class="p-t-19"
            :src="`/pictures/${consultation.imageUrl}`"
            alt=""
        >
        <div class="p-t-12 display-flex fd-column h-100 justify-around ta-right p-l-22 description">
            <div class="fw-700 fs-16px ta-left">
              {{consultation.title}}
            </div>
            <span
                class="ta-left"
            >
              {{consultation.type}}
            </span>
            <div class="ta-left display-flex justify-between ">
              <span
                  class="ta-left"
              >
                {{consultation.time}}
              </span>
              <span
                  class="ta-left"
              >
                {{consultation.price}}
              </span>
            </div>
            <div class="display-flex align-center justify-end">
              <span class="color-dark-green fs-16px line-h-19 p-r-8">
                Подробнее
              </span>
              <img :src="require('/public/linkArrow.svg')" alt="">
            </div>
        </div>
        <div
          class="display-flex justify-center p-t-22"
        >
          <router-link
              class="fs-16px bg-color-pink link-button cursor display-flex align-center justify-center color-white"
              to="/consultations"
          >
            Записаться
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConsultationsPage",
  components: {

  },
  data() {
    return {
      consultations: [
        {
          title: "Индивидуальная консультация",
          imageUrl: "consultations1.svg",
          type: "очные и онлайн",
          time: "1 час",
          price: "2.000р"
        },
        {
          title: "Работа с парой/семьей",
          imageUrl: "consultations3.svg",
          type: "очные",
          time: "1,5-2 часа",
          price: "3.000р"
        },
        {
          title: "Груповые занятия",
          imageUrl: "consultations4.svg",
          type: "очные по четвергам",
          time: "2 час",
          price: "1.000р"
        },
      ]
    }
  },
}
</script>

<style scoped>
  .page-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 38px;
    margin-top: 85px;
  }
  .consultation-card-link {
    width: 246px;
    height: 455px;
  }
  .description {
    height: 164px;
    padding-right: 27px;
  }
  .link-button {
    width: 147px;
    height: 52px;
    margin-bottom: 33px;
    border-radius: 22px;
  }
</style>