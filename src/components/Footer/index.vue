<template>
  <div class="footer-container bg-color-black display-flex justify-between align-center color-white">
     <div
         style="padding-left: 112px"
         class="display-flex fd-column"
     >
       <img :src="require('/public/logo/bigLogo.svg')" alt="">
       <span class="p-t-10">
         Марина Антонова
         <br>
         психолог
       </span>
     </div>
    <div
        class="display-flex fd-column align-baseline p-t-10"
        style="margin-right: 115px"
    >
      <span>
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
          <img class="m-r-12 cursor" :src="`/socialLogos/${item.logo}`" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
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
  }
</style>