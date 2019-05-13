import React from 'react';

interface IFormInput {
  label: string;
  value: string;
  updateAttribute: (event: any) => void;
  attributeValidator: () => void;
}

export default function FormInput(props: IFormInput) {
  const { label, value, attributeValidator, updateAttribute } = props;

  return (
    <div>
      <label>{label}</label>
      <input value={value}
        onChange={(e: any) => updateAttribute(e)}
        onBlur={() => attributeValidator()}
      />
    </div>
  );
}
