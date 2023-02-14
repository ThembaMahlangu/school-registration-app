import { FC } from "react";

type ButtonProps = {
  label: string;
  action?: any;
  icon?: any;
};

const Button: FC<ButtonProps> = ({ label, action, icon }) => {
  return (
    <button
      onClick={action}
      className="cursor-pointer select-none rounded-sm border bg-purple-700 p-3 text-white transition-all"
    >
      <span> {icon}</span>
      {label}
    </button>
  );
};

export default Button;
