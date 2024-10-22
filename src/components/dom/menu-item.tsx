"use client";

import { useEffect, useMemo, useState } from "react";

import cx from "classnames";

import useVaultGearState from "@/hooks/use-vault-gear-state";
import { useGearQuery } from "@/hooks/vault-hunters/queries";
import { TVaultGearOptionWithType } from "@/types/vault-gear";

interface IProps extends TVaultGearOptionWithType {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuItem = (props: IProps) => {
  const { label, type, value } = props;
  const {
    vaultGearHasLoaded,
    vaultGearIsLoading,
    vaultGearType,
    vaultGearValue,
    setVaultGearCurrent,
    setVaultGearHasLoaded,
    setVaultGearIsLoading,
    setVaultGear,
    resetVaultGear,
  } = useVaultGearState();
  const { data, isLoading, refetch } = useGearQuery(
    vaultGearType,
    vaultGearValue
  );
  const [disabled, setDisabled] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    if (data && Object.keys(data).length) {
      setVaultGearCurrent(data);
      setIsFetching(false);
    }
  }, [data, setVaultGearCurrent]);

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      setDisabled(isLoading && vaultGearIsLoading && !vaultGearHasLoaded);
    }

    return () => {
      ignore = true;
    };
  }, [isLoading, vaultGearIsLoading, vaultGearHasLoaded]);

  useMemo(() => {
    if (!isFetching) {
      return;
    }

    if (type === vaultGearType && value === vaultGearValue) {
      return;
    }

    setDisabled(true);
    setVaultGearHasLoaded(false);
    setVaultGearIsLoading(true);
    resetVaultGear();
    setVaultGear({ label, type, value });
    setTimeout(() => {
      if (type && value) {
        refetch();
      }
    }, 500);
  }, [
    isFetching,
    label,
    type,
    value,
    vaultGearType,
    vaultGearValue,
    refetch,
    resetVaultGear,
    setVaultGear,
    setVaultGearHasLoaded,
    setVaultGearIsLoading,
  ]);

  const onClick = () => {
    setIsFetching(true);
  };

  return (
    <button
      className={cx(
        "block w-full p-2 text-left font-rajdhani text-lg text-white transition-colors hover:bg-teal-700 disabled:cursor-not-allowed",
        vaultGearValue === value && "bg-teal-800 font-bold"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MenuItem;
