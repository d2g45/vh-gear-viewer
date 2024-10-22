import {
  MeshStandardMaterial,
  MeshStandardMaterialParameters,
  NearestFilter,
  Texture,
  TextureLoader,
} from "three";

export const loadTextureFromUrl = async (url: string): Promise<Texture> => {
  const textureLoader = new TextureLoader();
  const texture = await textureLoader.loadAsync(url);

  texture.minFilter = NearestFilter;
  texture.magFilter = NearestFilter;

  return texture;
};

export const setMaterialFromTexture = (
  map: Texture,
  params?: MeshStandardMaterialParameters
): MeshStandardMaterial => {
  const defaultParams: MeshStandardMaterialParameters = {
    transparent: true,
    alphaTest: 1,
    premultipliedAlpha: false,
  };

  return new MeshStandardMaterial({
    map,
    ...defaultParams,
    ...(params && { params }),
  });
};

export const loadMaterialFromTextureUrl = async (
  url: string,
  params?: MeshStandardMaterialParameters
): Promise<MeshStandardMaterial> => {
  return setMaterialFromTexture(await loadTextureFromUrl(url), params);
};

// from iskallia/item-model-renderer/lib/render/Cuboid
export const prepFaceUV = (
  uv: [number, number, number, number],
  material: MeshStandardMaterial
): [number, number, number, number, number, number, number, number] => {
  const image = material ? material?.map?.image : { width: 0, height: 0 };
  const { width = 0, height = 0 }: { width: number; height: number } = image;
  const frameCount: number = height / width;
  const left: number = uv[0] / 16;
  const right: number = uv[2] / 16;
  const bottom: number = (1 - uv[1] / 16) / frameCount;
  const top: number = (1 - uv[3] / 16) / frameCount;

  return [left, bottom, right, bottom, left, top, right, top];
};
