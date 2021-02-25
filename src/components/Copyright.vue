<template>
  <!-- TODO: Move background from here -->
  <div class="copyright">
    <span
      >{{ text }}
      <img :src="require('@/assets/images/logo_cff/logo_cff.png')" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Copyright extends Vue {
  @Prop() text!: string;
}
</script>

<style lang="scss" scoped>
.copyright {
  display: flex;
  margin: 1rem 0 0 0;
  justify-content: flex-end;
  span {
    @include font-raleway-medium-regular-14;
  }
}
</style>
