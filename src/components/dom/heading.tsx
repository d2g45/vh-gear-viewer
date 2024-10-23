"use client";

import { useEffect, useState } from "react";

import cx from "classnames";
import { isMobile } from "react-device-detect";
import { FaInfoCircle } from "react-icons/fa";

interface IProps {
  className?: string;
  onClick?: () => void;
}

const Heading = (props: IProps) => {
  const { className = "", onClick = () => {} } = props;
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    setShowButton(isMobile);
  }, []);

  return (
    <div
      className={cx(
        "flex flex-row items-center justify-between p-4",
        className && className
      )}
    >
      <h1 className="text-lg font-bold">Vault Hunters Gear Viewer</h1>
      {showButton && (
        <button onClick={onClick} title="Click for more info">
          <FaInfoCircle />
        </button>
      )}
    </div>
  );
};

export default Heading;
