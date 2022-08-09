<template>
    <div
        class="page-container"
        id="about"
    >
      <div class="display-flex ">
        <img
            class="photo"
            :src="require('/public/photo.png')" alt=""
        >
        <div class="dialogue-container">
          <img class="dialogue" :src="require('/public/dialogue.svg')" alt="">
          <div class="dialogue-content ta-start">
            <span class="color-white fw-700">
              Здравствуйте! Я, психолог Марина Антонова, работаю с проблемами в семье, в отношениях с противоположным полом, друзьями и с собой. Я также помогаю избавиться от страхов, тревоги, депрессии, прожить горе, поднять самооценку, найти себя в этом мире.
            </span>
          </div>
        </div>

      </div>
      <div class="page-content ta-start">
        Я не говорю, как правильно и как неправильно, ведь все мы абсолютно разные и то, что хорошо одному, для другого неприемлемо. Поэтому Ваше решение мы ищем вместе.
        <br>
        <br>
        Консультация проходит в виде беседы в моем офисе или онлайн по видеосвязи.
        <br>
        <br>
        В работе использую приёмы когнитивно-поведенческой терапии, гештальта, психоанализа, арт-терапии.
        <br>
        <br>
        Суть моих приёмов работы сводится к одному: наши убеждения и система ценностей формируют наше восприятие (эмоции и мысли). Наше восприятие формирует наши поступки, а наши поступки формируют нашу жизнь и наше будущее.
        <br>
        <br>
        Что бы изменить жизнь, нужно изменить мышление. Тот, кто готов меняться, я рассказываю помогаю понять причину его проблем, и варианты выхода, наработать новые навыки поведения, научиться самопомощи в кризисах и стрессовых ситуациях, осознанно влиять на свои мысли,а значит, и свою жизнь.
        <br>
        <br>
        Иногда для изменения жизни достаточно одной консультации, иногда курса. Всё очень индивидуально, ведь мы хоть и похожие, но такие разные!
      </div>
    </div>
</template>

<script>
export default {
  name: "AboutPage",
}
</script>

<style scoped>
.dialogue-container {
  display: flex;
  margin-top: 90px;
}
.page-content {
  font-family: Avanti;
  background-color: var(--color-white);
  box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  padding: 16px 12px;
  max-width: 1044px;
  margin: 22px 0px 0px 139px;
  font-size: 20px;
  font-weight: 400;
}
.dialogue {
  position: absolute;
  z-index: 1;
}
.dialogue-content {
  position: absolute;
  margin: 34px 27px 16px 68px;
  max-width: 418px;
  z-index: 2;
  width: 600px;
}
.photo {
  margin: 55px 0px 0px 139px;
}
.page-container {
  padding-left: 40px;
  display: flex;
  padding-bottom: 100px;
  justify-content: start;
  flex-direction: column;
  align-items: baseline;
}
</style>