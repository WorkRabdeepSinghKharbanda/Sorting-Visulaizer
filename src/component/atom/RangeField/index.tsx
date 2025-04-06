/* eslint-disable @typescript-eslint/no-explicit-any */
import { useId } from "react";

interface RangeFieldType {
  label: string;
  value: string;
  onChange: any;
  min: string;
  max: string;
  className?: string;
}

const RangeField = ({ label, value, onChange, min, max, className='' }: RangeFieldType) => {
  const textFieldId = useId();
  return (
    <div className={className}>
      <label htmlFor={textFieldId}>{label}</label>
      <input
        id={textFieldId}
        key={textFieldId}
        type={"range"}
        onChange={(e) => onChange((e.target as HTMLInputElement).value)}
        onInput={(e) => onChange((e.target as HTMLInputElement).value)}
        min={min}
        max={max}
        value={value}
      ></input>
    </div>
  );
};
export default RangeField;
