<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { namespace } from "vuex-class";
import GoogleMapElement from "./GoogleMapElement.vue";

const Stations = namespace("Stations");

@Component({})
export default class GoogleMapMarker extends GoogleMapElement {
  public marker: google.maps.Marker | null = null;

  public addMarker() {
    const { Marker } = this.google.maps;

    this.marker = new Marker({
      position: this.point.position,
      marker: this.point,
      map: this.map,
    });

    return this.marker;
  }

  mounted() {
    this.addMarker();
    this.marker?.addListener("click", () => {
      this.updateStation(this.data.recordid);
    });
  }

  beforeDestroy() {
    this.google.maps.event.clearInstanceListeners(this.marker);
  }
}
</script>
<style lang="scss">
.info-window {
  padding: 1rem 1rem 2rem 1rem;

  &__heading {
    @include font-raleway-extra-bold-regular-20;
    color: $gray-7;
    text-transform: initial;
    font-size: 30px;
  }

  &__content {
    .content {
      &__mail {
        margin: 3rem 0 0 0;
      }
      &__address {
        @include font-raleway-medium-regular-14;
      }
    }
  }
}

.gm-style-iw .gm-style-iw-c {
  max-width: 300px;
  height: 180px;
  width: 300px;
  max-height: 180px;
}

.gm-style .gm-style-iw-c {
  border-radius: 0;
}

.gm-ui-hover-effect {
  img {
    width: 18px;
    height: 18px;
  }
}

.gm-style .gm-style-iw-c {
  width: 300px;
}

.gm-ui-hover-effect {
  height: 40px!important;
  width: 40px!important;
  top: 0!important;
  right: 0px!important
}

.gm-ui-hover-effect img {
  height: 25px!important;
  width: 25px!important;
}
</style>
