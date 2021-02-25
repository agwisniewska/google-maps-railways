enum GeometryType {
  POINT = "Point"
}

interface Geometry {
  type: typeof GeometryType;
  coordinates: [number, number];
}

export interface Position {
  lat: number;
  lng: number;
}

interface RailwayStationFields {
  abkuerzung: string;
  adresse: string;
  bezeichnung_offiziell: string;
  bpuic: number;
  didok: number;
  firma: string;
  land: string;
  lod: string;
  mail: string;
  meteo: string;
  nummer: string;
  ort: string;
  plz: number;
  service: string;
  stationsbezeichnung: string;
  geopos: Array<number>;
  tu_nummer: number;
}
export interface RailwayStation {
  geometry: Geometry;
  recordid: string;
  datasetid: string;
  fields: RailwayStationFields;
  record_timestamp: string;
  active: boolean;
}

export type Marker = {
  id: string;
  position: Position;
};
