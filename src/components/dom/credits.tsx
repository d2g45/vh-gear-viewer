import cx from "classnames";

interface IProps {
  className?: string;
}

const Credits = (props: IProps) => {
  const { className = "" } = props;

  return (
    <div className={cx("w-full p-2 font-mono text-sm", className && className)}>
      This is a fan site used to expand my knowledge of Next.js and Three.js.
      Background and icon credit to kumara22. Models and images owned by Iskallia. 
      Visit{" "}
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
  );
};

export default Credits;
