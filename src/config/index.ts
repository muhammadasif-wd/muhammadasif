import {IConfig} from "./config.interface";

const config: IConfig = {
  env: process.env.NODE_ENV,
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export default config;
