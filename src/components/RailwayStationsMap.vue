<template>
  <GoogleMapLoader
    v-if="railwayStations"
    :mapConfig="{
      center: latLngRailwayStation,
      zoom: 8,
    }"
    apiKey="AIzaSyDw_DEMNGJVRHIKYsJkP9ZRBjevr40SpEY"
  >
    <template slot-scope="{ google, map }">
      <template v-if="fetchingStatus">
      <div v-for="(station, key) in railwayStations" :key="key">
        <GoogleMapMarker
          :data="station"
          :google="google"
          :map="map"
        />
        <GoogleMapPopup
          :data="station"
          :google="google"
          :map="map"
        />
      </div>
      </template>
       <template v-if="!fetchingStatus">
        Fetching error, try to refresh your browser
      </template>
    </template>
  </GoogleMapLoader>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GoogleMapMarker from "@/components/google-map/GoogleMapMarker.vue";
import GoogleMapPopup from "@/components/google-map/GoogleMapPopup.vue";
import GoogleMapLoader from "@/components/google-map/GoogleMapLoader.vue";

import { namespace } from "vuex-class";
import { RailwayStation, Position } from "@/store/types";

const Stations = namespace("Stations");

@Component({
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapPopup
  },
})
export default class RailwayStationsMap extends Vue {
  @Stations.Getter
  public railwayStations!: Record<string, RailwayStation>;
  
  @Stations.Getter
  public fetchingStatus!: boolean;

  @Stations.Getter
  public latLngRailwayStation!: Position;
}
</script>
<style lang="scss"></style>
