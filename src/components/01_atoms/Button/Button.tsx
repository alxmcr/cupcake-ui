import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
};

export default function Button(props: Props) {
  const { text = '', ...restProps } = props;

  return (
    <button className="h-[24px] min-w-20 rounded-lg px-3 py-1 text-xs shadow-xl focus:ring-1" {...restProps}>
      {text}
    </button>
  );
}
