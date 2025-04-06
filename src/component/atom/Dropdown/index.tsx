/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";

interface DropdownType {
  label: string;
  name: string;
  value: string;
  options: string[];
  onChange: any;
  className?: string;
}
const Dropdown = ({ label, name, value, options, onChange,className='' }: DropdownType) => {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        key={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((currentOption: string,key: number) => {
          return (
            <option
              key={key}
              value={currentOption}
            >
              {currentOption}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Dropdown;
