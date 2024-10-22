import { StateCreator, create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { TAppSlice, createAppSlice } from "./slices/app-slice";
import {
  TVaultGearSlice,
  createVaultGearSlice,
} from "./slices/vault-gear-slice";

export type TStore = TAppSlice & TVaultGearSlice;

export type TStoreStateCreator<T> = StateCreator<
  TStore,
  [["zustand/devtools", never], ["zustand/persist", null]],
  [],
  T
>;

const useStore = create<TStore>()(
  devtools(
    persist(
      (...a) => ({
        ...createAppSlice(...a),
        ...createVaultGearSlice(...a),
      }),
      {
        name: "vaulthunters-gear-storage",
        storage: createJSONStorage(() => localStorage),
        version: 1,
      }
    )
  )
);

export { useStore };
