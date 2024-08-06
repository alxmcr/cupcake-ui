import React, { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [valueInput, setValueInput] = React.useState('');

  const onChangeInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(ev.target.value);
  };

  return (
    <input
      ref={ref}
      type={props.type}
      id={props.id}
      name={props.name}
      className="peer block h-[38px] w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-cyan-900 focus:outline-none focus:ring-0 "
      placeholder=" "
      autoComplete="off"
      value={valueInput}
      onChange={onChangeInput}
    />
  );
});

Input.displayName = 'Input';

export default Input;
