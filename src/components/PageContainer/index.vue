<template>
<!--  <div :class="{'bg-color-yellow': colored, 'bg-color-white': !colored}">-->
  <div
      :class="`${colored ? 'bg-color-white ' : 'bg-color-yellow'}`"
  >
    <div
        :class="`${colored ? 'bg-color-yellow top-r-radius' : 'bg-color-white top-l-radius'}`"
        :style="{'min-height': 'inherit'}"
    >
      <PageTitle
          :class="`${colored ? 'color-white p-l-32' : 'color-yellow p-r-32 display-flex justify-end'}`"
          :title="title"
      />
        <slot
            class=""
        />
    </div>
  </div>
</template>

<script>
import PageTitle from '../pageTitle'
export default {
  name: "PageContainer",
  components: {
    PageTitle
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    colored: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>