type Props = {
  htmlFor: string;
  text: string;
};

export default function Label({ htmlFor = '', text = '' }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="font-inter text-sm font-normal leading-[22px] tracking-[-0.006em] text-gray-500"
    >
      <span>{text}</span>
    </label>
  );
}
