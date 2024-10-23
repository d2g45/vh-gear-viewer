"use client";

import { Suspense, useMemo, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { MeshStandardMaterial } from "three";

import { EXCLUDED_TEXTURE_KEYS } from "@/constants/vault-hunters";
import useAppState from "@/hooks/use-app-state";
import useVaultGearState from "@/hooks/use-vault-gear-state";
import { useGearQuery } from "@/hooks/vault-hunters/queries";
import {
  getNamefromTexturePath,
  getSpriteUrl,
} from "@/utils/api-vault-hunters";
import { loadMaterialFromTextureUrl } from "@/utils/three";

import Loading from "../dom/loading";
import BlockbenchModel from "./blockbench-model";

const MainScene = () => {
  const {
    vaultGearCurrent,
    vaultGearType,
    vaultGearLabel,
    vaultGearValue,
    setVaultGearCurrent,
  } = useVaultGearState();
  const { data, isLoading, refetch } = useGearQuery(
    vaultGearType,
    vaultGearValue
  );
  const { appIsFirstTime } = useAppState();
  const [materials, setMaterials] = useState<Map<
    string,
    MeshStandardMaterial
  > | null>(null);

  useMemo(() => {
    if (vaultGearType && vaultGearValue) {
      refetch().then(() => {
        setVaultGearCurrent(data ?? null);
      });
    }
  }, [vaultGearType, vaultGearValue, data, refetch, setVaultGearCurrent]);

  useMemo(() => {
    if (!vaultGearCurrent || !vaultGearType) {
      return;
    }

    const { textures = {} } = vaultGearCurrent;

    if (Object.keys(textures).length === 0) {
      return;
    }

    // get the textures
    // remove ones I don't know how to process
    // format string into API url
    // profit
    const loadAndSetMaterials = async () => {
      const textureUrls = Object.keys(textures)
        ?.filter((key: string) => !EXCLUDED_TEXTURE_KEYS.includes(key))
        .map((key: string) => ({
          key: `#${key}`,
          url: getSpriteUrl(
            vaultGearType,
            getNamefromTexturePath(textures[key], vaultGearType)
          ),
        }));

      if (Object.keys(textureUrls).length) {
        const promises: Promise<MeshStandardMaterial>[] = [];
        const materialMap: Map<string, MeshStandardMaterial> = new Map();
        textureUrls.forEach(async ({ url }) => {
          promises.push(loadMaterialFromTextureUrl(url));
        });

        const promisedMaterials = await Promise.all(promises);

        promisedMaterials.forEach((material, index) => {
          materialMap.set(textureUrls[index].key, material);
        });

        setMaterials(materialMap);
      }
    };

    setMaterials(null);
    loadAndSetMaterials();
  }, [vaultGearCurrent, vaultGearType]);

  return (
    <div className="absolute left-0 top-0 z-0 size-full">
      {!appIsFirstTime && !materials && (
        <Loading className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
      )}
      <Canvas shadows={true} camera={{ position: [50, 30, 10] }}>
        <ambientLight intensity={Math.PI} />\
        <Suspense fallback={null}>
          {!isLoading && vaultGearCurrent && materials && materials.size && (
            <BlockbenchModel
              {...vaultGearCurrent}
              materials={materials}
              vaultGearLabel={vaultGearLabel}
              vaultGearType={vaultGearType}
            />
          )}
          <OrbitControls maxZoom={50} minZoom={5} enablePan={false} />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
              opacity={0.05}
            />
            <Vignette eskil={true} offset={0} darkness={1.1} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MainScene;
