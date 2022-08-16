import { def } from "@vue/shared";
import axios from "axios";
import { Module, VuexModule } from "vuex-module-decorators";

const http = axios.create({
  baseURL: process.env.VUE_APP_CANDLES_API,
});

@Module({ name: "CandleStore" })
export default class CandleStore extends VuexModule {}
