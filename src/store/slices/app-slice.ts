import { StateCreator } from "zustand";

export interface IAppState {
  isLoading: boolean;
  isFirstTime: boolean;
}
export type TAppActions = {
  setIsLoading(isLoading: boolean): void;
  setIsFirstTime(isFirstTime: boolean): void;
};

export type TAppSlice = IAppState & TAppActions;

export const initialAppState: IAppState = {
  isLoading: false,
  isFirstTime: true,
};

export const createAppSlice: StateCreator<TAppSlice> = (set) => ({
  ...initialAppState,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setIsFirstTime: (isFirstTime: boolean) => set({ isFirstTime }),
});
