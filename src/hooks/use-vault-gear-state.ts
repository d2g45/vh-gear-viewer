import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";

export default function useVaultGearState() {
  return useStore(
    useShallow((state) => ({
      vaultGearCurrent: state.current,
      vaultGearHasLoaded: state.hasLoaded,
      vaultGearIsLoading: state.isLoading,
      vaultGearLabel: state.label,
      vaultGearType: state.type,
      vaultGearValue: state.value,
      setVaultGearCurrent: state.setCurrent,
      setVaultGearHasLoaded: state.setHasLoaded,
      setVaultGearIsLoading: state.setIsLoading,
      setVaultGearLabel: state.setLabel,
      setVaultGearType: state.setType,
      setVaultGearValue: state.setValue,
      resetVaultGear: state.reset,
      setVaultGear: state.set,
    }))
  );
}
