<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { RailwayStation } from "@/store/types";
import { namespace } from "vuex-class";
import { mapDataToMarker } from "@/utils/map-station-to-marker";

const Stations = namespace("Stations");

@Component
export default class GoogleMapElement extends Vue {
  @Prop({ required: true }) readonly google!: any;
  @Prop({ required: true }) readonly map!: google.maps.Map;
  @Prop({ required: true }) readonly data!: RailwayStation;

  public point =  mapDataToMarker(this.data);

  @Stations.Action
  public updateStation!: (id: string) => void;

  render() {
    return null;
  }
}
</script>
