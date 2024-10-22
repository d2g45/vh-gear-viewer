import { useShallow } from "zustand/shallow";

import { useStore } from "@/store";

export default function useAppState() {
  return useStore(
    useShallow((state) => ({
      appIsLoading: state.isLoading,
      appIsFirstTime: state.isFirstTime,
      setAppIsLoading: state.setIsLoading,
      setAppIsFirstTime: state.setIsFirstTime,
    }))
  );
}
