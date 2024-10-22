import { AXIS, DISPLAY, FACES, GEAR_TYPES } from "@/constants/global";

export type TVaultGearType = (typeof GEAR_TYPES)[keyof typeof GEAR_TYPES];
export type TFaceDirection = (typeof FACES)[keyof typeof FACES];
export type TDisplay = (typeof DISPLAY)[keyof typeof DISPLAY];
export type TAxis = (typeof AXIS)[keyof typeof AXIS];
export type TThree = [number, number, number];

export type TVaultGearOption = {
  label: string;
  value: string;
};

export type TVaultGearOptionWithType = TVaultGearOption & {
  type: TVaultGearType;
};

export type TVaultGearFace = {
  texture: string;
  uv: [number, number, number, number];
};

export type TVaultGearRotation = {
  angle: number;
  axis: TAxis;
  origin: TThree;
};

export type TVaultGearElement = {
  faces: Record<TFaceDirection, TVaultGearFace>;
  from: TThree;
  to: TThree;
  rotation?: TVaultGearRotation;
};

export type TVaultGearDisplay = {
  rotation?: TThree;
  scale?: TThree;
  translation: TThree;
};

export type TVaultGearGroup = {
  name: string;
  origin: TThree;
  color: number;
  children: number[];
};

export type TVaultGearResponse = {
  credit?: string;
  display: Record<TDisplay, TVaultGearDisplay>;
  elements: TVaultGearElement[];
  texture_size?: [number, number];
  textures: Record<string, string>;
  groups: TVaultGearGroup[];
};
