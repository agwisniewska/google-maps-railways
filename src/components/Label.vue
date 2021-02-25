<template>
  <div class="label">
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Label extends Vue {
  @Prop() label!: string;
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 25px;
  background: #d13833 0% 0% no-repeat padding-box;
  opacity: 1;
  margin: 1rem 0 0 -1rem;
  @include font-raleway-regular-13;
  p {
    margin: 0;
  }
}
</style>
