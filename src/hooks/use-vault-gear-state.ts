import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";

export default function useVaultGearState() {
  return useStore(
    useShallow((state) => ({
      vaultGearCurrent: state.current,
      vaultGearLabel: state.label,
      vaultGearType: state.type,
      vaultGearValue: state.value,
      setVaultGearCurrent: state.setCurrent,
      setVaultGearLabel: state.setLabel,
      setVaultGearType: state.setType,
      setVaultGearValue: state.setValue,
      resetVaultGear: state.reset,
      setVaultGear: state.set,
    }))
  );
}
