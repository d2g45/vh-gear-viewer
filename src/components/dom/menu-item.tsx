"use client";

import cx from "classnames";

import useVaultGearState from "@/hooks/use-vault-gear-state";
import { TVaultGearOptionWithType } from "@/types/vault-gear";

interface IProps extends TVaultGearOptionWithType {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuItem = (props: IProps) => {
  const { label, type, value } = props;
  const { vaultGearType, vaultGearValue, setVaultGear, resetVaultGear } =
    useVaultGearState();

  const onClick = () => {
    if (type === vaultGearType && value === vaultGearValue) {
      return;
    }
    resetVaultGear();
    if (label && type && value) {
      setVaultGear({ label, type, value });
    }
  };

  return (
    <button
      className={cx(
        "block w-full p-2 text-left font-rajdhani text-lg text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed",
        vaultGearValue === value && "bg-teal-800 font-bold"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default MenuItem;
