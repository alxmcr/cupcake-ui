import React from 'react';

type Props = {
  type: 'text' | 'email' | 'password' | 'search';
  name: string;
  id: string;
  placeholder?: string;
  readOnly?: boolean;
};

export default function Input({ type = 'text', name = '', id = '', placeholder = ' ', readOnly = false }: Props) {
  const [inputValue, setInputValue] = React.useState('');

  const onChange = (ev: React.ChangeEvent<HTMLInputElement>) => setInputValue(ev.target.value);

  return (
    <input
      type={type}
      id={id}
      name={name}
      className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-black focus:border-cyan-900 focus:outline-none focus:ring-0 "
      placeholder={placeholder}
      value={inputValue}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}
