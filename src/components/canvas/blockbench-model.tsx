import { useEffect } from "react";

import { MeshStandardMaterial } from "three";

import {
  TThree,
  TVaultGearElement,
  TVaultGearResponse,
  TVaultGearType,
} from "@/types/vault-gear";

import BlockbenchElement from "./blockbench-element";

export interface IBlockbenchModel extends TVaultGearResponse {
  materials: Map<string, MeshStandardMaterial>;
  position?: TThree | undefined;
  vaultGearLabel: string;
  vaultGearType: TVaultGearType;
}

const BlockbenchModel = (props: IBlockbenchModel) => {
  const {
    elements = [],
    // display,
    // credit,
    // groups,
    // texture_size,
    materials,
    position = [0, 0, 0],
    vaultGearLabel,
    vaultGearType,
  } = props;

  useEffect(() => {
    if (typeof window === "undefined") return;
  });

  if (!materials?.size || !elements.length) {
    return null;
  }

  return (
    <group name={`${vaultGearLabel}-${vaultGearType}`} position={position}>
      {materials.size &&
        elements.map((element: TVaultGearElement, index: number) => (
          <BlockbenchElement
            key={`${vaultGearLabel}-${vaultGearType}-${index}`}
            element={element}
            loadedMaterials={materials}
          />
        ))}
    </group>
  );
};

export default BlockbenchModel;
