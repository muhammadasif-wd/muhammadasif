import {IConfig} from "./config.interface";

const config: IConfig = {
  env: process.env.NODE_ENV,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  xApiKey: process.env.NEXT_PUBLIC_X_API_KEY,
};

export default config;
