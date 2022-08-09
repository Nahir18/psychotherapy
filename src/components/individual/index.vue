<template>
  <div class="individual-consultations h-100 display-flex align-center justify-center ta-start">
    <div class="display-flex justify-around">
      <div class="image-container display-flex">
        <div class="fs-48px p-absolute">
          Индивидуальная
          <img :src="'/pictures/arrow.svg'" alt="">
          <br>
          консультация
        </div>
        <img :src="'/pictures/consultations5.svg'" alt="">
      </div>
      <div class="b-r bg-color-orange-2 contacts-link-container fs-24px">
        <div class="p-b-16">
          Напишите мне
        </div>
        <a href="viber://chat?number=%2B79222612337" target="_blank" class="social-link bg-color-white">
          <div class="display-flex align-center justify-center">
            Viber
          </div>
          <div class="display-flex align-center justify-center">
            <img :src="'/pictures/viberSocial.svg'" alt="">
          </div>
        </a>
        <a href="https://wa.me/+79222612337" target="_blank" class="social-link bg-color-white m-t-12">
          <div class="display-flex align-center justify-center">
            WhatsApp
          </div>
          <div class="display-flex align-center justify-center">
            <img :src="'/pictures/whatsAppSocial.svg'" alt="">
          </div>
        </a>
        <a href="https://vk.com/id173615683" target="_blank" class="social-link bg-color-white m-t-12">
          <div class="display-flex align-center justify-center">
            ВКонтакте
          </div>
          <div class="display-flex align-center justify-center">
            <img :src="'/pictures/VKSocial.svg'" alt="">
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
    padding-right: 113px;
  }
  .individual-consultations {

  }
  .social-link-container {

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
  }
</style>