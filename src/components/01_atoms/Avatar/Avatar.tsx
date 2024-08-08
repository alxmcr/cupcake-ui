import { ImgHTMLAttributes } from 'react';

type Props = ImgHTMLAttributes<HTMLImageElement>;

export default function Avatar(props: Props) {
  return <img className="size-12 rounded-full" {...props} />;
}
