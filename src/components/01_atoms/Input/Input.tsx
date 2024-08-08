import { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      ref={ref}
      className="peer block h-[38px] w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-cyan-900 focus:outline-none focus:ring-0 "
      placeholder=" "
      {...props}
    />
  );
});

Input.displayName = 'Input';

export default Input;
