import React from 'react';

type Props = {
  type: 'text' | 'email' | 'password' | 'search';
  name: string;
  id: string;
  placeholder: string;
  readOnly?: boolean;
};

export default function Input({ type = 'text', name = '', id = '', placeholder = '', readOnly = false }: Props) {
  const [inputValue, setInputValue] = React.useState('');

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => setInputValue(ev.target.value);

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      readOnly={readOnly}
      value={inputValue}
      onChange={onChange}
      autoComplete="off"
      className="h-[38px] w-[268px] rounded-lg border border-gray-300 bg-white px-2 text-black outline-none focus:border-cyan-900"
    />
  );
}
