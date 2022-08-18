<template>
  <Layout
      class="main-page"
      :screenSize="this.screenWidth"
  >
    <router-view
      :screenSize="screenWidth"
    />
  </Layout>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'App',
  components: {
    Layout,
  },
  data() {
    return {
      currentRoute: window.location.pathname
    }
  },
  computed: {
    screenWidth() {
      return document.documentElement.clientWidth
    }
  },
}
</script>

<style>
@import 'styles/style.scss';
@import 'styles/fonts.scss';
@import 'styles/colors.scss';
@import 'styles/typography.scss';
.main-page {
  height: 100%;
  font-family: "Bellota text";

}
@font-face {
  font-family: "Bellota text";
  src: url("/public/fonts/BellotaText-Regular.ttf");
}
@font-face {
  font-family: "Avanti";
  src: url("/public/fonts/avanti.ttf");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
body {
  margin: 0 0 0 0;
}
</style>
