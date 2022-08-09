<template>
  <div class="page-container display-flex align-center justify-center">
    <img class="" :src="'/mainPageImage.svg'" alt="">
    <div class="title p-absolute">
      <h1>Помогу разобраться</h1>
      <span class="p-t-26">Сделай шаг к здоровой<br>и счасливой жизни!</span>
      <div class="p-t-46">
        <button class="button bg-color-pink">Сделать шаг</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FirstPage"
}
</script>

<style scoped>
.page-container {
  height: 768px;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  left: 142px;
  top: 211px
}
h1 {
}
</style>