type Props = {
  htmlFor: string;
  text: string;
};

export default function LabelFlotating({ htmlFor = '', text = '' }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute start-1 top-2 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
    >
      {text}
    </label>
  );
}
