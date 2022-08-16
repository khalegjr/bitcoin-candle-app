import Candle from "@/models/Candle";
import { def } from "@vue/shared";
import axios from "axios";
import { Module, VuexModule } from "vuex-module-decorators";

const http = axios.create({
  baseURL: process.env.VUE_APP_CANDLES_API,
});

@Module({ name: "CandleStore" })
export default class CandleStore extends VuexModule {
  private _candles: Candle[] = [];

  get candles() {
    return this._candles.length > 0
      ? this._candles.map(c => {
          return {
            x: c.finalDateTime.toLocaleTimeString,
            y: [c.open, c.high, c.low, c.close],
          };
        })
      : [];
  }
}
