import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";
import { StationService } from "@/services";
import { RailwayStation, Position } from "../types";

@Module({ namespaced: true })
class Stations extends VuexModule {
  public stations: Record<string, RailwayStation> = {};
  public currentPage = 0;
  public fetchingSuccess = false;
  protected stationServiceInstance = StationService.getInstance();

  @Mutation
  public setStationsSuccess(stations: Array<RailwayStation>): void {
    this.fetchingSuccess = true;
    this.stations = Object.assign(
      {},
      this.stations,
      ...stations.map((station: RailwayStation) => ({
        [station.recordid]: { ...station, active: false }
      }))
    );
  }

  @Mutation
  public setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  @Mutation
  public setStationActive(id: string): void {
    this.stations[id] = {
      ...this.stations[id],
      active: !this.stations[id].active
    };
  }

  @Mutation
  public setStationsFailure(): void {
    this.fetchingSuccess = false;
    this.stations = {};
  }

  @Action
  getStations(): Promise<RailwayStation[]> {
    return this.stationServiceInstance
      .getStations({ start: this.currentPage })
      .then(
        response => {
          this.context.commit("setStationsSuccess", response.data.records);
          this.context.commit("setCurrentPage", this.currentPage + 1);
          return Promise.resolve(response.data.stations);
        },
        error => {
          this.context.commit("setStationsFailure");
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          return Promise.reject(message);
        }
      );
  }

  @Action
  updateStation(id: string): void {
    this.context.commit("setStationActive", id);
  }

  get railwayStations(): Record<string, RailwayStation> {
    return this.stations;
  }

  get fetchingStatus(): boolean {
    return this.fetchingStatus
  }

  get latLngRailwayStation(): Position | null {
    if (this.stations) {
      const key = Object.keys(this.stations)[0];
      const station = this.stations[key]
      return {
        lat: station.geometry.coordinates[1],
        lng: station.geometry.coordinates[0]
      };
    }
    return null;
  }
}

export default Stations;
