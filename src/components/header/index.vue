<template>
  <div>
    <div
        v-if="screenSize > tabletScreen"
        class="bg-color-black color-white header"
    >
      <img class="logo" :src="require('/public/logo/Logo.svg')" alt="">
        <div
            v-for="link in headerLinks"
            :key="link.label"
        >
          <a
              :href="link.href"
              class="header-link"
              :class="`${!link.href.length && 'cursor-default'}`"
          >
            {{link.label}}
          </a>
      </div>
    </div>
    <div
        v-else
        class="bg-color-black color-white header"
    >
      <img class="logo" :src="require('/public/logo/Logo.svg')" alt="">
      <div class="display-flex p-r-32">
        <div
            class="header-link"
        >
          +7 (922) 261 23 37
        </div>
        <div
            class="display-flex fd-column cursor"
        >
          <img
              v-for="index in 3"
              :key="index"
              :class="`${index && 'p-t-4'}`"
              :src="require('/public/burger.svg')" alt=""
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {HEADER_LINKS, TABLET_SCREEN_SIZE} from "@/constants";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  data() {
    return {
      headerLinks: HEADER_LINKS,
      tabletScreen: TABLET_SCREEN_SIZE
    }
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
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  padding: 17px 0px 17px 0px;
}
.cursor-default {
  cursor: default;
}
.logo {
  padding-left: 130px;
}
.header-link {
  display: flex;
  margin: 0px 17px 0px 17px;
  padding-left: 82px;
}
@media (max-width: 750px) {
  .logo {
    padding-left: 110px;
  }
  .header {
    justify-content: space-between;
  }
  .header-link {
    padding-right: 60px;
  }
}

</style>