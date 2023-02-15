import { FC } from "react";

type ButtonProps = {
  label: string;
  action?: any;
  icon?: any;
  radius?: string;
  color?: string;
  textColor?:string
};

const Button: FC<ButtonProps> = ({ label, action, icon, radius, color,textColor }) => {
  return (
    <button
      onClick={action}
      style={{ borderRadius: radius, backgroundColor: color ,color:textColor}}
      className="cursor-pointer select-none rounded-sm  p-3 text-white transition-all md:px-6"
    >
      <span> {icon}</span>
      {label}
    </button>
  );
};

export default Button;
