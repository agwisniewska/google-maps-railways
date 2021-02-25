const facet = "service" as const;

export interface Params {
  dataset: string;
  facet: typeof facet;
  rows: number;
  start: number;
}
