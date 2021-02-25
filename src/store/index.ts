import Vue from "vue";
import Vuex from "vuex";

import Stations from "./modules/stations.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Stations
  }
});
