<template>
  <div class="railway-stations-container">
    <div v-for="(station, key) in railwayStations" :key="key">
      <RailwayStationData
        :id="key"
        @choose="updateStation"
        :station="station"
        :current="station.active"
      />
    </div>
    <InfiniteLoading @infinite="infiniteHandler" />
  </div>
</template>

<script lang="ts">
import InfiniteLoading, { StateChanger } from "vue-infinite-loading";
import { Component, Vue } from "vue-property-decorator";
import RailwayStationData from "./RailwayStationData.vue";

import { namespace } from "vuex-class";
import { RailwayStation } from "../store/types";

const Stations = namespace("Stations");

@Component({
  components: {
    RailwayStationData,
    InfiniteLoading
  }
})
export default class RailwayStations extends Vue {
  @Stations.Getter
  public railwayStations!: Record<string, RailwayStation>;

  @Stations.Action
  public getStations!: () => Promise<RailwayStation[]>;

  @Stations.Action
  public updateStation!: (id: string) => void;

  public async infiniteHandler($state: StateChanger) {
    try {
      await this.getStations();
      $state.loaded();
    } catch (er) {
      //  TODO: Add logger
      console.log(er);
      $state.complete();
    }
  }

  async mounted() {
    await this.getStations();
  }
}
</script>
<style lang="scss"></style>
