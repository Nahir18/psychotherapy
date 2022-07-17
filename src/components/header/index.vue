<template>
  <div class="bg-color-black color-white header">
    <img class="logo" :src="require('/public/logo/Logo.svg')" alt="">
    <div v-for="link in headerLinks" :key="link.label">
      <div class="header-link">
        {{link.label}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      headerLinks: [
        {
          label: "Документы",
          action: () => ({})
        },
        {
          label: "Обо мне",
          action: () => ({})
        },
        {
          label: "Отзывы",
          action: () => ({})
        },
        {
          label: "Для кого",
          action: () => ({})
        },
        {
          label: "+7 (922) 261 23 37",
          action: () => ({})
        },
        {
          label: "Консультации",
          action: () => ({})
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 17px 0px 17px 0px;
}
.logo {
  padding-left: 130px;
}
.header-link {
  display: flex;
  margin: 0px 17px 0px 17px;
  padding-left: 82px;
}

</style>