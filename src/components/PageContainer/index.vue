<template>
  <div
      :style="{minHeight: this.minHeight + 'px'}"
      :class="`${colored ? 'bg-color-white ' : 'bg-color-yellow'}`"
  >
    <div
        :class="`${colored ? 'bg-color-yellow top-r-radius' : 'bg-color-white top-l-radius'}`"
        :style="{'min-height': 'inherit'}"
    >
      <PageTitle
          class="page-title"
          :class="`${colored ? 'white-page' : 'yellow-page'}`"
          :title="title"
      />
        <slot />
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
    screenSize: {
      type: Number,
      default: 0
    },
    colored: {
      type: Boolean,
      default: false
    },
    minHeight: {
      type: [String, Number],
      default: ""
    }
  },
}
</script>

<style scoped>
  .top-r-radius {
    border-radius: 0px 381px 0px 0px
  }
  .top-l-radius {
    border-radius: 381px 0px 0px 0px
  }
  .white-page {
    color: var(--color-white);
    padding-left: 32px;
  }
  .yellow-page {
    color: var(--color-yellow);
    padding-right: 32px;
    display: flex;
    justify-content: end;
  }
  page-title {
    
  }
  @media (max-width: 780px) {
    .page-title {
      font-size: 24px;
    }
    .top-r-radius {
      border-radius: 0px 222.349px 0px 0px;
    }
    .top-l-radius {
      border-radius: 222.349px 0px 0px 0px;
    }
  }
  @media (max-width: 440px) {
    .radius-media {
      border-radius: 107.024px 106.856px 0px 0px;
    }
    .page-title {
      font-size: 24px;
    }
    .top-r-radius {
      border-radius: 107.024px 106.856px 0px 0px;
    }
    .white-page {
      display: flex;
      justify-content: center;
    }
    .yellow-page {
      display: flex;
      justify-content: center;
    }
    .top-l-radius {
      border-radius: 107.024px 106.856px 0px 0px;
    }
  }
</style>