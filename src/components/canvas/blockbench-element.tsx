"use client";

import { useEffect, useMemo, useRef } from "react";

import {
  BoxGeometry,
  BufferAttribute,
  Mesh,
  MeshStandardMaterial,
} from "three";

import { TThree, TVaultGearElement } from "@/types/vault-gear";
import { prepFaceUV } from "@/utils/three";

interface IBlockbenchElement {
  element: TVaultGearElement;
  loadedMaterials: Map<string, MeshStandardMaterial>;
}

// from iskallia/item-model-renderer/lib/render/Cuboid
const BlockbenchElement = (props: IBlockbenchElement) => {
  const meshRef = useRef<Mesh>(null);
  const { element, loadedMaterials } = props;
  const { faces, from, rotation, to } = element;

  // Calculate dimensions
  const width = to[0] - from[0];
  const height = to[1] - from[1];
  const depth = to[2] - from[2];

  // Create position
  const position: TThree = [
    from[0] + width / 2 - 8,
    from[1] + height / 2 - 8,
    from[2] + depth / 2 - 8,
  ];

  const geometry: BoxGeometry = useMemo(
    () => new BoxGeometry(width, height, depth),
    [width, height, depth]
  );

  const materials: Array<MeshStandardMaterial> = useMemo(() => {
    const defaultMaterial: MeshStandardMaterial = loadedMaterials.get(
      (loadedMaterials.keys().next().value as string) ?? "#0"
    ) as MeshStandardMaterial;
    return [
      (loadedMaterials.get(faces.east?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
      (loadedMaterials.get(faces.west?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
      (loadedMaterials.get(faces.up?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
      (loadedMaterials.get(faces.down?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
      (loadedMaterials.get(faces.south?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
      (loadedMaterials.get(faces.north?.texture) as MeshStandardMaterial) ??
        defaultMaterial,
    ];
  }, [loadedMaterials, faces]);

  useEffect(() => {
    geometry?.setAttribute(
      "uv",
      new BufferAttribute(
        new Float32Array([
          ...prepFaceUV(faces.east?.uv ?? [0, 0, 0, 0], materials[0]), // 0
          ...prepFaceUV(faces.west?.uv ?? [0, 0, 0, 0], materials[1]), // 1
          ...prepFaceUV(faces.up?.uv ?? [0, 0, 0, 0], materials[2]), // 2
          ...prepFaceUV(faces.down?.uv ?? [0, 0, 0, 0], materials[3]), // 3
          ...prepFaceUV(faces.south?.uv ?? [0, 0, 0, 0], materials[4]), // 4
          ...prepFaceUV(faces.north?.uv ?? [0, 0, 0, 0], materials[5]), // 5
        ]),
        2
      )
    );
  }, [geometry, element, faces, materials]);

  useEffect(() => {
    const mesh = meshRef.current;

    if (!mesh) {
      return;
    }

    // Create rotation
    const rotationOrigin = rotation ? rotation.origin : [0, 0, 0];

    const deltaPivot = [
      rotationOrigin[0] - from[0] - width / 2,
      rotationOrigin[1] - from[1] - height / 2,
      rotationOrigin[2] - from[2] - depth / 2,
    ];

    mesh.translateX(deltaPivot[0]);
    mesh.translateY(deltaPivot[1]);
    mesh.translateZ(deltaPivot[2]);

    if (rotation) {
      const { angle = 0, axis } = rotation;
      const newAngle = (Math.PI / 180) * angle;

      switch (axis) {
        case "x":
          mesh.rotateX(newAngle);
          break;
        case "y":
          mesh.rotateY(newAngle);
          break;
        case "z":
          mesh.rotateZ(newAngle);
          break;
        default:
        // do nothing
      }
    }

    mesh?.translateX(-deltaPivot[0]);
    mesh?.translateY(-deltaPivot[1]);
    mesh?.translateZ(-deltaPivot[2]);
  }, [depth, from, height, rotation, width]);

  return (
    geometry && (
      <mesh
        ref={meshRef}
        position={position}
        material={materials}
        geometry={geometry}
      />
    )
  );
};

export default BlockbenchElement;
