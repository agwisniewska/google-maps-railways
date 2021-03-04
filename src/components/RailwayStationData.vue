<template>
  <div
    class="railway-station__container"
    :class="{ active: station.active }"
    @click="$emit('choose', station.recordid)"
  >
    <Label v-if="nearestStation" label="Nearest station" />
    <div class="container__station">
      <div class="row">
        <h2 v-if="station.fields.bezeichnung_offiziell"
            class="station__title">
          {{ station.fields.bezeichnung_offiziell }}
        </h2>
        <div class="station__service">
          <div v-if="serviceIcon" :class="serviceIcon.className">
            <img :src="serviceIcon.img" alt="service-icon" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="station__address">
          <span v-if="station.fields.adresse"
            >{{ station.fields.adresse }},</span
          >
          <span v-if="station.fields.bpuic"> {{ station.fields.bpuic }} </span>
          <span v-if="station.fields.bezeichnung_offiziell"
            >{{ station.fields.bezeichnung_offiziell }}
          </span>
        </div>

        <div class="station__mail">
          {{ station.fields.mail }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { RailwayStation } from "../store/types";
import Label from "./Label.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapServiceToIcon, icons } from "../utils";

@Component({
  components: {
    Label,
  },
})
export default class RailwayStationData extends Vue {
  @Prop() station!: RailwayStation;

  get nearestStation() {
    /*  TODO: Probably it requires adding geolocation or it's known based on data from api
    which I am not aware of */
    return false;
  }

  get serviceIcon() {
    if (this.station && this.station.fields) {
      return mapServiceToIcon(icons, this.station.fields.service);
    }
    return null;
  }
}
</script>
<style lang="scss" scoped>
.railway-station__container {
  margin: 2.5rem 0;
  height: 160px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 12px #0000000d;
  border: 1px solid #d5d5d5;
  .container {
    &__station {
      padding: 2rem 3rem;
      opacity: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .station {
        &__title {
          @include font-raleway-extra-bold-regular-34;
        }
        &__address {
          @include font-raleway-medium-regular-22;
        }

        &__mail {
          @include font-raleway-medium-regular-17;
          text-align: right;
        }

        &__service {
          min-width: 150px;
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 10px;
          .money {
            justify-self: start;
          }

          .luggage {
            justify-self: center;
          }

          .lunge {
            justify-self: end;
          }
        }
      }
    }
  }
  &.active {
    background: #e5b4b41a 0% 0% no-repeat padding-box;
    border: 1px solid #e35252;
  }
}
</style>
