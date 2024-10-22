import Image from "next/image";
import { useEffect, useState } from "react";

import cx from "classnames";
import { FaChevronLeft } from "react-icons/fa";

import { GEAR } from "@/constants/vault-hunters";
import { getPlaceHolderUrl } from "@/utils/api-vault-hunters";

import MenuItem from "./menu-item";

interface IProps {
  label: string;
  value: string;
  category: string;
  filter?: string;
}

const MenuType = (props: IProps) => {
  const { label, category, value, filter } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const onCategoryClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen && filter && filter.length > 0) {
      setIsOpen(true);
    }
  }, [filter, isOpen]);

  const gear = filter
    ? GEAR[category].filter(
        ({ label, value }) => label.includes(filter) || value.includes(filter)
      )
    : GEAR[category];

  return (
    <div
      data-category={`Menu-type-${category}`}
      className="flex w-full flex-col items-start justify-start border-b border-b-neutral-700/50"
    >
      <button
        onClick={onCategoryClick}
        className={cx(
          "flex w-full flex-row items-center justify-between gap-4 p-4 font-rajdhani transition-colors hover:bg-emerald-700",
          isOpen && "bg-neutral-800"
        )}
      >
        <div className="grid grid-cols-[32px_1fr] grid-rows-1 items-center justify-start gap-4">
          <Image
            loading="lazy"
            src={getPlaceHolderUrl(value)}
            alt={`Placeholder image representing ${category}`}
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">{label}</span>
        </div>
        <FaChevronLeft
          className={cx("transition-transform", isOpen ? "-rotate-90" : "")}
        />
      </button>
      <div className={cx("w-full", !isOpen && "hidden")}>
        {gear.length > 0 &&
          gear.map(({ label, value, type }) => (
            <MenuItem
              label={label}
              value={value}
              type={type}
              key={`Menu-item-${type}-${value}`}
              data-key={`Menu-item-${type}-${value}`}
            />
          ))}
      </div>
    </div>
  );
};

export default MenuType;
