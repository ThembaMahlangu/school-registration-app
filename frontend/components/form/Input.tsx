import { FC } from "react";

type InputProps = {
  label: string;
  type: "text" | string;
  placeholder?:string
};

const Input: FC<InputProps> = ({ label, type,placeholder }) => {
  return (
    <fieldset className={`rounded-md  border border-purple-700 p-2`}>
      <legend className="text-purple-700 capitalize px-2">{label}</legend>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-transparent pb-2 indent-2 outline-none`}
      />
    </fieldset>
  );
};

export default Input;
