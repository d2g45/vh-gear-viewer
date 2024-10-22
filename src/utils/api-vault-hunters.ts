"use client";

import {
  default as Axios,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { setupCache } from "axios-cache-interceptor";

import {
  API_URL,
  GEAR_PATH,
  PLACEHOLDER_PATH,
  SPRITE_PATH,
} from "@/constants/vault-hunters";
import { TVaultGearType } from "@/types/vault-gear";

const DEFAULT: AxiosRequestConfig = {
  baseURL: API_URL,
  // withCredentials: true,
};

const instance: AxiosInstance = Axios.create({
  baseURL: API_URL,
});

const api = setupCache(instance, {
  // storage:
  //   window !== undefined && !!sessionStorage
  //     ? buildWebStorage(sessionStorage, "vh-api-axios-cache:")
  //     : buildMemoryStorage(),
});

export const get = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => {
  const combinedConfig: AxiosRequestConfig = {
    ...DEFAULT,
    ...config,
  };
  return await api.get(url, combinedConfig);
};

export const gear = async (
  type: string,
  name: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse> => get(`${GEAR_PATH}/${type}/${name}.json`, config);

// TODO: improve this jank
export const getNamefromTexturePath = (source: string, type: TVaultGearType) =>
  source.replace(`the_vault:item/gear/${type}/`, "");

export const getSpriteUrl = (type: string, name: string): string =>
  type && name ? `${API_URL}${SPRITE_PATH}/${type}/${name}.png` : "";

export const getPlaceHolderUrl = (type: string): string =>
  type ? `${API_URL}${PLACEHOLDER_PATH}/${type}.png` : "";
