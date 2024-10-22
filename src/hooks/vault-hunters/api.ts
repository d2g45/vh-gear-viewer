import { TVaultGearResponse } from "@/types/vault-gear";
import { gear } from "@/utils/api-vault-hunters";

export const getGear = (
  type: string,
  name: string,
  params?: URLSearchParams
): Promise<TVaultGearResponse> =>
  gear(type, name, { params }).then(({ data }) => data);
