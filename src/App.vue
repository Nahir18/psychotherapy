<template>
  <div class="main-page">
    <Header />
    <MainPage />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/mainPage'
import Header from './components/header'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    MainPage,
    Header,
  }
}
</script>

<style>
@import 'styles/style.scss';
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
}
body {
  margin: 0 0 0 0;
  /*font-family: ;*/
}
</style>
