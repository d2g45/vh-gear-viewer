import { TVaultGearOption, TVaultGearOptionWithType } from "@/types/vault-gear";

import { GEAR_TYPES } from "./global";

export const API_URL = "https://api.vaulthunters.gg/";
export const GEAR_PATH = "static/models/gear";
export const SPRITE_PATH = "static/sprites/gear";
export const PLACEHOLDER_PATH = "static/sprites/gear/placeholders";

const { AXE, FOCUS, SHIELD, SWORD, WAND } = GEAR_TYPES;

export const AXES: TVaultGearOption[] = [
  {
    label: "Big Choppa",
    value: "big_choppa",
  },
  {
    label: "Blood Chopper",
    value: "blood_chopper",
  },
  {
    label: "Blood Cleaver",
    value: "blood_cleaver",
  },
  {
    label: "Evil Mace",
    value: "evil_mace",
  },
  {
    label: "Godaxe",
    value: "godaxe",
  },
  {
    label: "Greathammer",
    value: "greathammer",
  },
  {
    label: "Idona's Scythe",
    value: "idonas_scythe",
  },
  {
    label: "Janitor's Broom",
    value: "janitors_broom",
  },
  {
    label: "Last Sight",
    value: "last_sight",
  },
  {
    label: "Tenos Staff",
    value: "tenos_staff",
  },
  {
    label: "Tiny Hammer",
    value: "tiny_hammer",
  },
  {
    label: "Velara's Hammer",
    value: "velaras_hammer",
  },
  {
    label: "Wendarr's Clockaxe",
    value: "wendarrs_clockaxe",
  },
];

export const FOCI: TVaultGearOption[] = [
  {
    label: "Arcane Codex",
    value: "arcanecodex",
  },
  {
    label: "Grimoire",
    value: "grimoire",
  },
  {
    label: "Mystical Lexicon",
    value: "mysticallexicon",
  },
  {
    label: "Soul Orb",
    value: "soulorb",
  },
  {
    label: "Tattered Tome",
    value: "tatteredtome",
  },
  {
    label: "Tome of Knowledge",
    value: "tomeofknowledge",
  },
  {
    label: "Wooden",
    value: "wooden",
  },
];

export const SHIELDS: TVaultGearOption[] = [
  {
    label: "Absolute Binner",
    value: "absolutebinner",
  },
  {
    label: "Bell",
    value: "bell",
  },
  {
    label: "Coconut (Orange)",
    value: "coconut_orange",
  },
  {
    label: "Coconut",
    value: "coconut",
  },
  {
    label: "Druid",
    value: "druid",
  },
  {
    label: "Emberwing",
    value: "emberwing",
  },
  {
    label: "Ender",
    value: "ender",
  },
  {
    label: "Flowah",
    value: "flowah",
  },
  {
    label: "Fried Egg",
    value: "fried_egg",
  },
  {
    label: "Gold Plated",
    value: "gold_plated",
  },
  {
    label: "Grim",
    value: "grim",
  },
  {
    label: "Heart Chocolate",
    value: "heart_chocolate",
  },
  {
    label: "Heart Crystal",
    value: "heart_crystal",
  },
  {
    label: "Honey Drone",
    value: "honey_drone",
  },
  {
    label: "Inferno",
    value: "inferno",
  },
  {
    label: "Lifebuoy",
    value: "lifebuoy",
  },
  {
    label: "Nou",
    value: "nou",
  },
  {
    label: "Peppermint",
    value: "peppermint",
  },
  {
    label: "Present",
    value: "present",
  },
  {
    label: "Scrap",
    value: "scrap",
  },
  {
    label: "Sculk",
    value: "sculk",
  },
  {
    label: "Slab",
    value: "slab",
  },
  {
    label: "Turtle",
    value: "turtle",
  },
  {
    label: "Wooden",
    value: "wooden",
  },
];

export const SWORDS: TVaultGearOption[] = [
  {
    label: "Alliumblade",
    value: "alliumblade",
  },
  {
    label: "Bamboo",
    value: "bamboo",
  },
  {
    label: "Baseball Bat",
    value: "baseball_bat",
  },
  {
    label: "Chainsword",
    value: "chainsword",
  },
  {
    label: "Crystallised Blade",
    value: "crystallised_blade",
  },
  {
    label: "Cutlass",
    value: "cutlass",
  },
  {
    label: "Dark Blade",
    value: "dark_blade",
  },
  {
    label: "Deaths Door",
    value: "deaths_door",
  },
  {
    label: "Double Blade",
    value: "double_blade",
  },
  {
    label: "Douwswords Swousky",
    value: "douwswords_swousky",
  },
  {
    label: "Gladius",
    value: "gladius",
  },
  {
    label: "Glorem Glipsum",
    value: "glorem_glipsum",
  },
  {
    label: "Godsword",
    value: "godsword",
  },
  {
    label: "Honey Wand",
    value: "honey_wand",
  },
  {
    label: "Idona's Sword",
    value: "idonas_sword",
  },
  {
    label: "Kindled Blade",
    value: "kindled_blade",
  },
  {
    label: "Moonshine",
    value: "moonshine",
  },
  {
    label: "Nightfall",
    value: "nightfall",
  },
  {
    label: "Plate Piercer",
    value: "plate_piercer",
  },
  {
    label: "Red Katana",
    value: "red_katana",
  },
  {
    label: "Refracted Blade",
    value: "refracted_blade",
  },
  {
    label: "Ring Blade",
    value: "ring_blade",
  },
  {
    label: "Skallified Sword",
    value: "skallified_sword",
  },
  {
    label: "Soul Sword (Blue)",
    value: "soul_sword_blue",
  },
  {
    label: "Soul Sword (Green)",
    value: "soul_sword_green",
  },
  {
    label: "Soul Sword",
    value: "soul_sword",
  },
  {
    label: "Soulflame",
    value: "soulflame",
  },
  {
    label: "Swaxe",
    value: "swaxe",
  },
  {
    label: "Tarnished Blade",
    value: "tarnished_blade",
  },
  {
    label: "Tribal Blade",
    value: "tribal_blade",
  },
  {
    label: "Velara's Greatsword",
    value: "velaras_greatsword",
  },
  {
    label: "Wendarr's Greatsword",
    value: "wendarrs_greatsword",
  },
];

export const WANDS: TVaultGearOption[] = [
  {
    label: "Archmage",
    value: "archmage",
  },

  {
    label: "Baguette",
    value: "baguette",
  },

  {
    label: "Book of Shadows",
    value: "bookofshadows",
  },
  {
    label: "Carri King",
    value: "carri_king",
  },
  {
    label: "Carrot on a Wand",
    value: "carrot_on_a_wand",
  },
  {
    label: "Druid",
    value: "druid",
  },
  {
    label: "Ender",
    value: "ender",
  },
  {
    label: "Flower",
    value: "flower",
  },
  {
    label: "Frost",
    value: "frost",
  },
  {
    label: "Gorgeous",
    value: "gorgeous",
  },
  {
    label: "Iskallium",
    value: "iskallium",
  },
  {
    label: "Lightning",
    value: "lightning",
  },
  {
    label: "Lunar",
    value: "lunar",
  },
  {
    label: "Mage",
    value: "mage",
  },
  {
    label: "Makeshift",
    value: "makeshift",
  },
  {
    label: "Master",
    value: "master",
  },
  {
    label: "Orb Blue",
    value: "orb_blue",
  },
  {
    label: "Orb Red",
    value: "orb_red",
  },
  {
    label: "Soul",
    value: "soul",
  },
  {
    label: "Starlight",
    value: "starlight",
  },
  {
    label: "Twig",
    value: "twig",
  },
  {
    label: "Wooden",
    value: "wooden",
  },
];

export const GEAR: Record<string, TVaultGearOptionWithType[]> = {
  AXE: AXES.map((item) => ({ ...item, type: AXE })),
  FOCUS: FOCI.map((item) => ({ ...item, type: FOCUS })),
  SHIELD: SHIELDS.map((item) => ({ ...item, type: SHIELD })),
  SWORD: SWORDS.map((item) => ({ ...item, type: SWORD })),
  WAND: WANDS.map((item) => ({ ...item, type: WAND })),
};

export const EXCLUDED_TEXTURE_KEYS = ["particle"];
