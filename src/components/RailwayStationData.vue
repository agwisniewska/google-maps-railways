<template>
  <div
    class="railway-station__container"
    :class="{ active: station.active }"
    @click="$emit('choose', station.recordid)"
  >
    <Label v-if="nearestStation" label="Nearest station" />
    <div class="container__station">
      <div>
        <h2 class="station__title">
          {{ station.fields.bezeichnung_offiziell }}
        </h2>
        <div class="station__service">
          <img v-if="serviceIcon" :src="serviceIcon" alt="service-icon" />
        </div>
      </div>
      <div>
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
import { RailwayStation } from "@/store/types";
import Label from "@/components/Label.vue";
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapServiceToIcon } from "@/utils/";

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
    return mapServiceToIcon(this.station.fields.service);
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

      div {
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
      }
    }
  }
  &.active {
    background: #e5b4b41a 0% 0% no-repeat padding-box;
    border: 1px solid #e35252;
  }
}
</style>
