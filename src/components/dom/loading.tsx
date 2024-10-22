import { GiSwordSpin } from "react-icons/gi";

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

const Loading = ({ className, children }: IProps) => {
  return (
    <div title="Loading..." className={className}>
      <GiSwordSpin className="origin-center animate-spin text-6xl" />
      {children && children}
    </div>
  );
};

export default Loading;
