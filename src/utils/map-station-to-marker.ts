import {  Marker, Position } from "@/store/types";

export const mapDataToMarker = (id: string, coordinates: Position): Marker => {
  return {
    id,
    position: {
      lat: coordinates.lat,
      lng: coordinates.lng
    }
  };
};
