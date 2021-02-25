import { Params } from "./types";
import axios from "axios";

const url = "https://data.sbb.ch/api/records/1.0/search/";

const defaultParams = {
  facet: "service",
  dataset: "kontaktadressen",
  rows: 10
};

export class StationService {
  private static instance: StationService;
  static getInstance(): StationService {
    if (!StationService.instance) {
      StationService.instance = new StationService();
    }
    return StationService.instance;
  }

  async getStations(params: Pick<Params, "start">) {
    return await axios.get(url, { params: { ...defaultParams, ...params } });
  }
}
