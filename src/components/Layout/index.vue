<template>
  <Header
      :screenSize="screenSize"
  />
    <slot />
  <Footer
      :screenSize="screenSize"
  />
</template>

<script>
import Header from "../header"
import Footer from "../Footer"
export default {
  name: "LayoutComponent",
  components: {
    Header,
    Footer
  },
  props: {
    screenSize: {
      type: Number,
      default: 0
    },
  },
}
</script>

<style scoped>

</style>