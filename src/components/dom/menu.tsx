"use client";

import React, { useEffect, useState } from "react";

import cx from "classnames";
import { isMobile } from "react-device-detect";
import { FaSearch } from "react-icons/fa";

import { GEAR_LABELS, GEAR_TYPES } from "@/constants/global";

import Credits from "./credits";
import Heading from "./heading";
import MenuType from "./menu-type";

interface IMenuProps {
  className?: string;
}

const Menu = (props: IMenuProps) => {
  const { className } = props;
  const [filter, setFilter] = useState<string>("");
  const [hideCredits, setHideCredits] = useState<boolean>(false);

  const types: string[] = Object.keys(GEAR_TYPES);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value ?? "";
    setFilter(value.trim());
  };

  const handleInfoClick = () => {
    setHideCredits(!hideCredits);
  };

  useEffect(() => {
    setHideCredits(isMobile);
  }, []);

  return (
    <div
      className={cx(
        "flex flex-col items-stretch justify-start overflow-hidden bg-neutral-900/80 backdrop-blur-sm md:h-dvh",
        className && className
      )}
    >
      <Heading onClick={handleInfoClick} />

      {
        <Credits
          className={cx(
            "border-t border-neutral-700/50 bg-neutral-900/50",
            hideCredits && "hidden"
          )}
        />
      }
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
    </div>
  );
};

export default Menu;
