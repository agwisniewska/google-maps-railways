<script lang="ts">
import { Component, Watch } from "vue-property-decorator";
import GoogleMapElement from "./GoogleMapElement.vue";
import { RailwayStation } from "../../store/types";
import { mapServiceToIcon, mapUndefinedToString, icons } from "../../utils";

@Component({})
export default class GoogleMapPopup extends GoogleMapElement {
  public infowindow: google.maps.InfoWindow = new this.google.maps.InfoWindow();

  private getServiceIcon(service: string) {
    const icon = mapServiceToIcon(icons, service);

    if (icon) {
      return `<div class="content__service"> <img src="${icon}"/> </div>`;
    }

    return "";
  }

  private getAddress(fields: Record<string, string | number | undefined>) {
    return ["adresse", "bpuic", "bezeichnungOffiziell"]
      .map((detail) => this.formatInfoWindowContent(fields[detail]))
      .join(" ");
  }

  private formatInfoWindowContent(content: string | number | undefined) {
    return mapUndefinedToString(content);
  }

  public getContent() {
    if (this.data) {
      const { fields } = this.data;
      const {
        bezeichnung_offiziell,
        bpuic = "",
        adresse = "",
        service = "",
        mail = "",
      } = fields || {
        bezeichnung_offiziell: "",
        bpuic: "",
        adresse: "",
        service: "",
        mail: "",
      };

      return `<div class="info-window">
                  <h1 class="info-window__heading">
                    ${bezeichnung_offiziell}
                  </h1>
                  <div class="info-window__content"> 
                    <div class="content__address">
                      ${this.getAddress({
                        bpuic: bpuic,
                        adresse: adresse,
                        bezeichnungOffiziell: bezeichnung_offiziell,
                      })}
                    </div>
                      <div class="content__mail"> ${this.formatInfoWindowContent(
                        mail
                      )} </div>
                      ${this.getServiceIcon(service)}
                  </div>
                  `;
    }
    return null;
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