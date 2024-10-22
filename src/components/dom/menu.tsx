"use client";

import React, { useState } from "react";

import cx from "classnames";
import { FaSearch } from "react-icons/fa";

import { GEAR_LABELS, GEAR_TYPES } from "@/constants/global";

import MenuType from "./menu-type";

interface IMenuProps {
  className?: string;
}

const Menu = (props: IMenuProps) => {
  const { className } = props;
  const [filter, setFilter] = useState<string>("");

  const types: string[] = Object.keys(GEAR_TYPES);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value ?? "";
    setFilter(value.trim());
  };

  return (
    <div
      className={cx(
        "flex flex-col items-stretch justify-start overflow-hidden bg-neutral-900/80 backdrop-blur-sm md:h-dvh",
        className && className
      )}
    >
      <h1 className="p-4 text-lg font-bold">Vault Hunters Gear Viewer</h1>
      <label className="grid grid-cols-[40px_1fr] grid-rows-1 border-b border-t border-neutral-700/50">
        <div className="flex w-full flex-col items-center justify-center">
          <FaSearch />
        </div>
        <input
          type="search"
          name="search"
          id="search"
          aria-label="Search"
          className="w-full border-0 bg-neutral-700/50 px-4 py-2"
          onChange={handleChange}
        />
      </label>
      <div className="h-full overflow-hidden">
        <nav className="flex h-full flex-col overflow-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-yellow-400">
          {types.length &&
            types.map((key) => (
              <MenuType
                key={`Menu-type-${key}`}
                category={key}
                label={GEAR_LABELS[key]}
                value={GEAR_TYPES[key]}
                filter={filter}
              />
            ))}
        </nav>
      </div>

      <div className="w-full bg-neutral-900/50 p-2 font-mono lg:text-sm">
        This is a fan site used to expand my knowledge of Next.js and Three.js.
        Models and images owned by Iskallia. Visit{" "}
        <a
          href="https://vaulthunters.gg"
          title="Vault Hunters"
          target="_blank"
          rel="noopener"
          className="text-yellow-400 underline"
        >
          vaulthunters.gg
        </a>{" "}
        and play the modpack!
      </div>
    </div>
  );
};

export default Menu;
