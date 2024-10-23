"use client";

import { Suspense, useEffect, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { MeshStandardMaterial } from "three";

import { EXCLUDED_TEXTURE_KEYS } from "@/constants/vault-hunters";
import useAppState from "@/hooks/use-app-state";
import useVaultGearState from "@/hooks/use-vault-gear-state";
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
    vaultGearHasLoaded,
    vaultGearIsLoading,
    vaultGearType,
    vaultGearLabel,
    setVaultGearHasLoaded,
    setVaultGearIsLoading,
  } = useVaultGearState();
  const { appIsFirstTime } = useAppState();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const [materials, setMaterials] = useState<Map<
    string,
    MeshStandardMaterial
  > | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
  });

  useEffect(() => {
    setShowLoader(vaultGearIsLoading && !vaultGearHasLoaded);
  }, [vaultGearIsLoading, vaultGearHasLoaded]);

  useEffect(() => {
    if (!vaultGearCurrent || !vaultGearType) {
      return;
    }

    const { textures = {} } = vaultGearCurrent;

    if (Object.keys(textures).length === 0) {
      return;
    }

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

      if (Object.keys(textures).length) {
        // get the textures
        // remove ones I don't know how to process
        // format string into API url
        // profit
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

    loadAndSetMaterials();
  }, [vaultGearCurrent, vaultGearType]);

  useEffect(() => {
    if (materials && materials.size) {
      setVaultGearHasLoaded(true);
      setVaultGearIsLoading(false);
    }
  }, [materials, setVaultGearHasLoaded, setVaultGearIsLoading]);

  return (
    <div className="absolute left-0 top-0 z-0 size-full">
      {!appIsFirstTime && showLoader && (
        <Loading className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2" />
      )}
      <Canvas shadows={true} camera={{ position: [50, 30, 10] }}>
        <ambientLight intensity={Math.PI} />\
        <Suspense fallback={null}>
          {vaultGearCurrent && materials && materials.size && (
            <BlockbenchModel
              {...vaultGearCurrent}
              materials={materials}
              vaultGearLabel={vaultGearLabel}
              vaultGearType={vaultGearType}
            />
          )}
          <OrbitControls maxZoom={50} minZoom={5} enablePan={false} />
        </Suspense>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={300}
            opacity={0.05}
          />
          <Vignette eskil={true} offset={0} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default MainScene;
