type Props = {
  text: string;
  floating?: boolean;
};

export default function LabelFlotating({ text = '', floating = false }: Props) {
  if (floating) {
    return (
      <span className="absolute min-w-24 rounded-sm bg-white px-[2px] text-center font-inter text-xs text-gray-500">
        {text}
      </span>
    );
  }
  return (
    <span className="rounded-sm bg-transparent font-inter text-sm font-normal leading-[22px] tracking-[-0.006em] text-gray-500">
      {text}
    </span>
  );
}
