import { StateCreator } from "zustand";

import { TVaultGearResponse, TVaultGearType } from "@/types/vault-gear";

export interface IVaultGearState {
  current: TVaultGearResponse | null;
  hasLoaded: boolean;
  isLoading: boolean;
  label: string;
  type: TVaultGearType;
  value: string;
}

export type TVaultGearActions = {
  setCurrent(current: TVaultGearResponse | null): void;
  setHasLoaded(hasLoaded: boolean): void;
  setIsLoading(isLoaded: boolean): void;
  setLabel(label: string): void;
  setType(type: TVaultGearType): void;
  setValue(value: string): void;
  set(object: Partial<IVaultGearState>): void;
  reset(): void;
};

export type TVaultGearSlice = IVaultGearState & TVaultGearActions;

export const initialVaultGearState: IVaultGearState = {
  current: null,
  hasLoaded: false,
  isLoading: true,
  label: "",
  type: "",
  value: "",
};

export const createVaultGearSlice: StateCreator<TVaultGearSlice> = (set) => ({
  ...initialVaultGearState,
  setCurrent: (current: TVaultGearResponse | null) => set({ current }),
  setHasLoaded: (hasLoaded: boolean) => set({ hasLoaded }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setLabel: (label: string) => set({ label }),
  setType: (type: TVaultGearType) => set({ type }),
  setValue: (value: string) => set({ value }),
  set: (object: Partial<IVaultGearState>) => set(object),
  reset: () => set(initialVaultGearState),
});
