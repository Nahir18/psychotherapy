<template>
  <div class="footer-container bg-color-black display-flex justify-between align-center color-white">
     <div
         class="display-flex fd-column"
     >
       <img class="logo" :src="require('/public/logo/bigLogo.svg')" alt="">
       <span class="p-t-10 logo-text">
         Марина Антонова
         <br>
         психолог
       </span>
     </div>
    <div
        class="display-flex fd-column align-baseline p-t-10"
    >
      <span v-if="screenSize >= 745">
        Записаться можно по номеру телефона
        <br>
        или через соц. сети и мессенджеры
      </span>
      <span>
        +7 (922) 261 23 37
      </span>
      <div class="p-t-10">
        <a
            v-for="item in socialLogos"
            :key="item.logo"
            :href="`${item.href}`"
            target="_blank"
        >
          <img class="m-r-12 cursor social-logo" :src="`/socialLogos/${item.logo}`" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  props: {
    screenSize: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      socialLogos: [
        {
          logo: "logo.svg",
          href: "tg://resolve?domain=mari251169"
        },
        {
          logo: "viber2Logo.svg",
          href: "viber://chat?number=%2B79222612337"
        },
        {
          logo: "viberLogo.svg",
          href: "https://wa.me/+79222612337"
        },
        {
          logo: "vkLogo.svg",
          href: "https://vk.com/id173615683"
        }
      ]
    }
  },
}
</script>

<style scoped>
  .footer-container {
    min-height: 195px;
    padding-left: 112px;
    padding-right: 114px;
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 840px) {
    .footer-container {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  @media (max-width: 440px) {
    .footer-container {
      min-height: 113px;
      padding-left: 40px;
      padding-right: 40px;
      display: flex;
      font-size: 10px;
      justify-content: space-between;
    }
    .social-logo {
      max-width: 15px;
      max-height: 15px;
    }
    .logo {
      max-height: 34px;
    }
    .logo-text {
      padding-top: 2px;
    }
  }
</style>