import { MetadataRoute } from "next";

import { META } from "@/constants/global";

const { title: name, description, shortname: short_name } = META;

export default function manifest(): MetadataRoute.Manifest {
  return {
    name,
    short_name,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#d4d4d4",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
