import { MetadataRoute } from "next";

import { URL } from "@/constants/global";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${URL}/sitemap.xml`,
  };
}
