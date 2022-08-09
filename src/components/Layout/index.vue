<template>
  <Header />
    <slot />
  <Footer />
</template>

<script>
import Header from "../header"
import Footer from "../Footer"
export default {
  name: "LayoutComponent",
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>