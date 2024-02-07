import axios, { AxiosInstance } from "axios";
export default class Api {
  private static _instance: Api | null;

  public api!: AxiosInstance | null;
  private constructor() {
    this.setApi();
  }

  static getInstance(): Api {
    if (!Api._instance) {
      Api._instance = new Api();
    }
    return Api._instance;
  }

  setApi() {
    const api = axios.create({
      baseURL: import.meta.env.VITE_API_URL,
      headers: {
        apiKey: import.meta.env.VITE_API_KEY,
      },
    });
    this.api = api;
  }
}
