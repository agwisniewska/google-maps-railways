<template>
  <div>
    <Header
      title="Explore swiss 
      railway stations."
      description="An interactive map that let you explore the dense network
       of railway stations in Switzerland"
    />
    <main>
      <RailwayStationsMap />
      <Copyright text="Base on data from:" />
      <RailwayStations />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RailwayStationsMap from "@/components/RailwayStationsMap.vue";
import RailwayStations from "@/components/RailwayStations.vue";
import Header from "@/components/Header.vue";
import Copyright from "@/components/Copyright.vue";

@Component({
  components: {
    RailwayStations,
    RailwayStationsMap,
    Header,
    Copyright
  }
})
export default class Main extends Vue {}
</script>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: -20% auto 0 auto;
  background: $white;
  padding: 50px;
  position: absolute;
  left: 0;
  right: 0;
}
</style>
