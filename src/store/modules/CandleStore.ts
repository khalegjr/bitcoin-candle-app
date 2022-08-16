import Candle from "@/models/Candle";
import axios from "axios";
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

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

  @Mutation
  private _initializeCandles(candles: Candle[]) {
    this._candles = candles;
  }

  @Mutation
  private _appendNewCandle(candle: Candle) {
    this._candles.push(candle);
  }
}
