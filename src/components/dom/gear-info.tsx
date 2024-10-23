"use client";

import Image from "next/image";
import { useEffect } from "react";

import cx from "classnames";

import useAppState from "@/hooks/use-app-state";
import useVaultGearState from "@/hooks/use-vault-gear-state";
import { getPlaceHolderUrl } from "@/utils/api-vault-hunters";

interface IProps {
  className?: string;
}

const GearInfo = (props: IProps) => {
  const { className } = props;
  const { vaultGearLabel, vaultGearType } = useVaultGearState();
  const { appIsFirstTime, setAppIsFirstTime } = useAppState();

  useEffect(() => {
    if (vaultGearLabel) {
      setAppIsFirstTime(false);
    }
  }, [vaultGearLabel, setAppIsFirstTime]);

  return (
    <div
      className={cx(
        "rounded-md bg-neutral-700/50 p-4 backdrop-blur-sm",
        className && className
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2 rounded-sm text-center font-rajdhani text-2xl font-bold tracking-wide md:text-4xl">
        {vaultGearType && (
          <Image
            loading="lazy"
            src={getPlaceHolderUrl(vaultGearType)}
            alt={`Placeholder image representing ${vaultGearType}`}
            width={32}
            height={32}
          />
        )}
        <span>
          {appIsFirstTime && <>Select gear piece</>}
          {!appIsFirstTime && (
            <>{vaultGearLabel ? vaultGearLabel : "Loading..."}</>
          )}
        </span>
      </div>
    </div>
  );
};

export default GearInfo;
