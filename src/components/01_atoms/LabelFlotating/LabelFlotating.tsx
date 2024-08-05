type Props = {
  text: string;
  floating?: boolean;
};

export default function LabelFlotating({ text = '', floating = false }: Props) {
  if (floating) {
    return (
      <span className="font-inter absolute bottom-[28px] left-[10px] min-w-24 rounded-sm bg-white px-[2px] text-center text-xs text-gray-500">
        {text}
      </span>
    );
  }
  return (
    <span className="font-inter rounded-sm bg-transparent text-sm font-normal leading-[22px] tracking-[-0.006em] text-gray-500">
      {text}
    </span>
  );
}
