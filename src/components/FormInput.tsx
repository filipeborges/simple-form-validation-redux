import React from 'react';

interface IFormInput {
  label: string;
  value: string;
  updateAttribute: (event: any) => void;
  attributeValidator: () => void;
  error: string | undefined;
}

export default function FormInput(props: IFormInput) {
  const { error, label, value, attributeValidator, updateAttribute } = props;

  return (
    <div>
      <label>{label}</label>
      <input value={value}
        onChange={(e: any) => updateAttribute(e)}
        onBlur={() => attributeValidator()}
      />
      { error ? <label style={{color: 'red'}}>{error}</label> : null }
    </div>
  );
}
