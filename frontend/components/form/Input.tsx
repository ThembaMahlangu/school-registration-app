import { FC } from "react";

type InputProps = {
  label: string;
  type: "text" | string;
  placeholder?: string;
  name?: string;
  value: string;
  onChange?: any;
};

const Input: FC<InputProps> = ({ label, type, placeholder, name, value,onChange }) => {
  return (
    <fieldset className={`rounded-md  border border-purple-700 p-2`}>
      <legend className="px-2 capitalize text-purple-700">{label}</legend>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full  bg-transparent pb-2 indent-2 outline-none`}
        name={name}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Input;
