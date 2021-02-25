<template>
  <!-- TODO: Move background from here -->
  <header
    class="header"
    :style="{
      'background-image':
        'url(' +
        require('@/assets/images/swiss-federal-railways/swiss-federal-railways.png') +
        ')'
    }"
  >
    <div class="header__content">
      <div class="content__overlay content__overlay-black">
        <div class="content__text">
          <h1 class="text__title">{{ title }}</h1>
          <p class="text__description">{{ description }}</p>
        </div>
      </div>
    </div>

    <div class="header__layout-box"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop() title!: string;
  @Prop() description!: string;
}
</script>

<style lang="scss" scoped>
.header {
  white-space: pre;
  &__content {
    position: relative;
    height: 768px;
    width: 100%;

    .content {
      &__overlay {
        width: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        display: flex;
        text-align: center;
        justify-content: center;
      }

      &__overlay-black {
        background: rgba(0, 0, 0, 0.7);
      }

      &__text {
        margin: 15rem 0 0 0;
        .text {
          &__title {
            @include font-raleway-black-64;
          }

          &__description {
            @include font-raleway-extra-bold-regular-20;
          }
        }
      }
    }
  }
  &__layout-box {
    width: 100%;
    height: 90px;
    background: #d13833 0% 0% no-repeat padding-box;
    opacity: 1;
    z-index: 0;
  }
}
</style>
