<template>
  <div class="display-flex justify-center">
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
        <div class="p-t-12 display-flex fd-column">
            <div class="fw-700 fs-12px">
              {{consultation.title}}
            </div>
            <span>
              {{consultation.type}}
            </span>
            <div>
            <span>
              {{consultation.time}}
            </span>
              <span>
              {{consultation.price}}
            </span>
            </div>
            <div class="display-flex align-center justify-center">
            <span>
              Подробнее
            </span>
              <img :src="require('/public/linkArrow.svg')" alt="">
            </div>
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
          imageUrl: "consultation2.svg",
          type: "очные и онлайн",
          time: "1 час",
          price: "2.000р"
        },
        {
          title: "Работа с парой/семьей",
          imageUrl: "consultation2.svg",
          type: "очные",
          time: "1,5-2 часа",
          price: "3.000р"
        },
        {
          title: "Груповые занятия",
          imageUrl: "consultation2.svg",
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
    width: 182px;
    height: 337px;
  }
  .description {

  }
</style>