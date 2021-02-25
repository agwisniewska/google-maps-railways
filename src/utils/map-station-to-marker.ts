import { RailwayStation, Marker } from "@/store/types";

export const mapDataToMarker = (station: RailwayStation): Marker => {
  return {
    id: station.recordid,
    position: {
      lat: station.geometry.coordinates[1],
      lng: station.geometry.coordinates[0]
    }
  };
};
