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
          <div class="dialogue-content arrow ta-start">
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
// import {TABLET_SCREEN_SIZE} from "@/constants";

export default {
  name: "AboutPage",
  props: {
    screenSize: {
      type: Number,
      default: 0
    },
  }
}
</script>

<style scoped>
.dialogue-container {
  display: flex;
  margin-top: 175px;
  margin-left: 65px;
}

.page-container {
  padding-left: 101px;
  padding-right: 87px;
  display: flex;
  padding-bottom: 100px;
  justify-content: start;
  flex-direction: column;
  align-items: baseline;
}
.page-content {
  font-family: Avanti;
  background-color: var(--color-white);
  box-shadow: 0px 9px 4px rgba(0, 0, 0, 0.25);
  border-radius: 26px;
  padding: 16px 12px;
  /*max-width: 1044px;*/
  /*margin: 22px 0px 0px 139px;*/
  font-size: 20px;
  font-weight: 400;
}
.dialogue-content {
  position: absolute;
  font-size: 16px;
  display: flex;
  width: 418px;
  height: 152px;
  background-color: var(--color-dark-green-2);
  padding: 27px 47px 16px 37px;
}
.arrow:before {
  content: "";
  position: absolute;
  border-top: 10px solid #6F711F;
  border-right: 54px solid #6F711F;
  border-bottom: 17px solid #FFF6D0;
  border-top: 17px solid #FFF6D0;
  left: -54px;
  top: 25%;
}
.photo {
  margin: 55px 0px 31px 0px;
}
@media (max-width: 1090px) {
  .dialogue-content {
    width: 280px;
    padding: 14px 44px 38px 38px;
  }
  .photo {
    margin: 55px 0px 0px 0px;
    max-height: 247px;
    max-width: 261px;
  }
  .dialogue-container {
    margin-top: 85px;
    margin-left: 10px;
  }
  .page-container {
    padding-left: 45px;
    padding-right: 41px;
  }
}
@media (max-width: 740px) {
  .photo {
    margin: 55px 0px 0px 0px;
    max-height: 247px;
    max-width: 261px;
  }
  .page-content {
    /*margin: 0px 0px 0px 0px;*/
  }
  .dialogue-content {
    width: 280px;
    padding: 14px 44px 38px 38px;
  }
  .arrow:before {
    content: "";
    position: absolute;
    border-top: 10px solid #6F711F;
    border-right: 34px solid #6F711F;
    border-bottom: 17px solid #FFF6D0;
    border-top: 17px solid #FFF6D0;
    left: -34px;
    top: 25%;
  }
}
@media (max-width: 440px) {
  .photo {
    max-width: 147px;
    max-height: 139px;
  }
}
</style>