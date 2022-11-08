<template>
  <div class="h-100 display-flex align-center justify-center ta-start">
    <div class="display-flex justify-around">
      <div class="image-container display-flex">
        <div class="p-absolute">
          Индивидуальная
          <img :src="'/pictures/arrow.svg'" alt="">
          <br>
          консультация
        </div>
        <img :src="'/pictures/consultations5.svg'" alt="">
      </div>
      <div class="b-r bg-color-orange-2 contacts-link-container">
        <div class="p-b-16">
          Напишите мне
        </div>
        <a href="viber://chat?number=%2B79222612337" target="_blank" class="social-link bg-color-white">
          <div class="display-flex align-center justify-center">
            Viber
          </div>
          <div class="display-flex align-center justify-center">
            <img class="social-image" :src="'/pictures/viberSocial.svg'" alt="">
          </div>
        </a>
        <a href="https://wa.me/+79222612337" target="_blank" class="social-link bg-color-white m-t-12">
          <div class="display-flex align-center justify-center">
            WhatsApp
          </div>
          <div class="display-flex align-center justify-center">
            <img class="social-image" :src="'/pictures/whatsAppSocial.svg'" alt="">
          </div>
        </a>
        <a href="https://vk.com/id173615683" target="_blank" class="social-link bg-color-white m-t-12">
          <div class="display-flex align-center justify-center">
            ВКонтакте
          </div>
          <div class="display-flex align-center justify-center">
            <img class="social-image" :src="'/pictures/VKSocial.svg'" alt="">
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndividualPage"
}
</script>

<style scoped>
  .image-container {
    height: 409px;
    width: 573px;
    font-size: 48px;
    padding-right: 113px;
  }
  .social-link {
    border-radius: 22px;
    height: 46px;
    padding-right: 8px;
    display: grid;
    grid-template-columns: 1fr 27px;
  }
  .contacts-link-container {
    width: 265px;
    height: 208px;
    padding: 31px 29px 36px;
    font-size: 24px;
  }
  @media (max-width: 1090px) {
    .image-container {
      padding-left: 40px;
      max-width: 543px;
      font-size: 40px;
      max-height: 388px;
      padding-right: 105px;
    }
    .social-image {
      max-width: 20px;
      max-height: 20px;
    }
    .contacts-link-container {
      margin-top: auto;
      margin-bottom: auto;
      font-size: 19px;
      padding: 22px 19px 23px;
      width: 168px;
      height: 157px;
      margin-right: 40px;
    }
    .social-link {
      width: 168px;
      height: 30px;
    }
  }
</style>