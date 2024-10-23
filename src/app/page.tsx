import dynamic from "next/dynamic";
import Image from "next/image";

import GearInfo from "@/components/dom/gear-info";
import Menu from "@/components/dom/menu";

import dark from "../../public/images/dark.webp";

const MainScene = dynamic(() => import("@/components/canvas/main-scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative h-dvh w-full bg-gradient-to-tr from-sky-900 to-indigo-900">
      <div className="align-stretch grid h-full w-full grid-cols-1 grid-rows-12 md:grid-cols-[1fr_250px] md:grid-rows-1">
        <div className="relative z-20 col-span-1 row-span-6 flex flex-col items-center justify-start md:row-span-1">
          <GearInfo className="relative z-10 mt-4" />
          <MainScene />
        </div>
        <Menu className="relative z-20 col-span-1 row-span-6 md:row-span-1" />
      </div>

      <Image
        className="pointer-events-none fixed z-10 object-cover"
        loading="lazy"
        alt="Vault Hunter"
        src={dark}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        priority={false}
      />
    </main>
  );
}
