export const EMAIL: string = "me@danieldeguzman.com";
export const URL: string = "https://vh-gear-viewer.d2g45.com";

export const META = {
  title: "Vault Hunters Gear Viewer",
  openGraphImage: {
    images: [
      {
        url: `${URL}/sharing.jpg`,
        secureUrl: `${URL}/sharing.jpg`,
        alt: "Vault Hunters Gear Viewer website",
        type: "image/jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  shortname: "VH Gear Viewer",
  description:
    "This is a fan site used to expand my knowledge of Next.js and Three.js. Models and images owned by Iskallia. Visit vaulthunters.gg and play the modpack!",
};

export const GEAR_TYPES: Record<string, string> = {
  AXE: "axe",
  FOCUS: "focus",
  SHIELD: "shield",
  SWORD: "sword",
  WAND: "wand",
};

export const GEAR_LABELS: Record<string, string> = {
  AXE: "Axes",
  FOCUS: "Foci",
  SHIELD: "Shields",
  SWORD: "Swords",
  WAND: "Wands",
};

export const FACES: Record<string, string> = {
  NORTH: "north",
  SOUTH: "south",
  EAST: "east",
  WEST: "west",
  UP: "up",
  DOWN: "down",
};

export const DISPLAY: Record<string, string> = {
  FIRSTPERSON_LEFTHAND: "firstperson_lefthand",
  FIRSTPERSON_RIGHTHAND: "firstperson_righthand",
  FIXED: "fixed",
  GROUND: "ground",
  GUI: "gui",
  THIRDPERSON_LEFTHAND: "thirdperson_lefthand",
  THIRDPERSON_RIGHTHAND: "thirdperson_righthand",
};

// this is overkill. let's just do it.
export const AXIS: Record<string, string> = {
  X: "x",
  Y: "y",
  Z: "z",
};
