<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import { RailwayStation } from "@/store/types";
import { mapServiceToIcon, mapUndefinedToString } from "@/utils";
import GoogleMapElement from "./GoogleMapElement.vue";

@Component({})
export default class GoogleMapPopup extends GoogleMapElement {
  public infowindow: google.maps.InfoWindow = new this.google.maps.InfoWindow();

  private getServiceIcon(service: string) {
    const icon = mapServiceToIcon(service);
    if (icon) {
      return `<div class="content__service"> <img src="${icon}"/> </div>`;
    }

    return "";
  }

  private getAddress(fields: Record<string, string | number | undefined>) {
    return ["adresse", "bpuic", "bezeichnungOffiziell"].map((detail) =>
      this.formatInfoWindowContent(fields[detail])
    ).join(' ');
  }

  private formatInfoWindowContent(content: string | number | undefined) {
    return mapUndefinedToString(content);
  }

  public getContent() {
    return `<div class="info-window">
                  <h1 class="info-window__heading">
                    ${this.data.fields.bezeichnung_offiziell}
                  </h1>
                  <div class="info-window__content"> 
                    <div class="content__address">
                      ${this.getAddress({
                        bpuic: this.data.fields.bpuic,
                        adresse: this.data.fields.adresse,
                        bezeichnungOffiziell: this.data.fields
                          .bezeichnung_offiziell,
                      })}
                    </div>
                      <div class="content__mail"> ${this.formatInfoWindowContent(
                        this.data.fields.mail
                      )} </div>
                      ${this.getServiceIcon(this.data.fields.service)}
                  </div>
                  `;
  }

  public addInfoWindow() {
    const { InfoWindow } = this.google.maps;

    this.infowindow = new InfoWindow({
      position: this.point.position,
      content: this.getContent(),
    });
  }

  mounted() {
    this.addInfoWindow();
    this.google.maps.event.addListener(this.infowindow, "closeclick", () => {
      this.updateStation(this.data.recordid);
    });
  }

  beforeDestroy() {
    this.google.maps.event.clearInstanceListeners(this.infowindow);
  }

  @Watch("data.active")
  onPropertyChanged(value: RailwayStation) {
    value ? this.infowindow?.open(this.map) : this.infowindow?.close();
  }
}
</script>