import { useId } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface TextFieldType {
  label: string;
  value: string;
  onChange: any;
  placeHolder?: string;
  isValid?: boolean;
  validText?: string;
  type: string;
  className?: string;
  min?: string;
  max?: string;
}

const TextField = ({
  label,
  value,
  onChange,
  placeHolder,
  isValid,
  validText = "Invalid",
  type = 'text',
  className = '',
  min = '',
  max = '',
}: TextFieldType) => {
  const textFieldId = useId();
  return (
    <div className={className}>
      <label htmlFor={textFieldId}>{label}</label>
      <input
        id={textFieldId}
        key={textFieldId}
        type={type}
        value={value}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
      />
      {!isValid && <span className="text-danger">{validText}</span>}
    </div>
  );
};
export default TextField;
