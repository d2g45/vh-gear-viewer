import { useQuery } from "@tanstack/react-query";

import { getGear } from "./api";

export function useGearQuery(
  type: string,
  name: string,
  params?: URLSearchParams
) {
  return useQuery({
    enabled: !!type && type !== "" && !!name && name !== "",
    queryFn: () => getGear(type, name, params),
    queryKey: ["vault-hunters/gear", type, name],
  });
}
