<template>
  <div
      class="title-container"
      :class="{'left-side': rotate}"
  >
    <div>
      <div class="subtitle">
        {{title}}
      </div>
      <div class="title">
        {{title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: {
      type: String,
      default: ""
    },
    rotate: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .title-container {
    display: flex;
  }
  .left-side {
    justify-content: end;
    padding-right: 31px;
  }
  .subtitle {
    font-size: 100px;
    margin-top: -24px;
  }
  .title {
    font-size: 27px;
    margin-top: -48px;
    color: var(--color-black);
  }
</style>