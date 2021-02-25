<template>
  <div class="map-container">
    <div class="map-container__map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { MapConfig } from "./index";
import { Loader } from "google-maps";

@Component({})
export default class GoogleMapLoader extends Vue {
  @Prop({ required: true }) apiKey!: string;
  @Prop() mapConfig!: MapConfig;

  private google: any = null;
  private map: google.maps.Map | null = null;

  public initializeMap() {
    const mapContainer = this.$refs.googleMap;

    if (this.google != null) {
      this.map = new this.google.maps.Map(
        mapContainer as HTMLDivElement,
        this.mapConfig
      );
    }
  }

  async mounted() {
    const loader = new Loader(this.apiKey);
    this.google = await loader.load();
    this.initializeMap();
  }
}
</script>
<style lang="scss">
.map-container {
  width: 100%;
  height: 440px;
  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
