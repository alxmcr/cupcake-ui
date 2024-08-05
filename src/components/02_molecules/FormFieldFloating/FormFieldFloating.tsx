type Props = {
  inputType: 'text' | 'email' | 'password' | 'search';
  id: string;
  name: string;
  readOnly?: boolean;
  labelText: string;
};

export default function FormFieldFloating({
  id = '',
  name = '',
  inputType = 'text',
  labelText = '',
  readOnly = false,
}: Props) {
  return (
    <div className="relative">
      <input
        type={inputType}
        id={id}
        name={name}
        className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-cyan-900 focus:outline-none focus:ring-0 "
        placeholder=" "
        readOnly={readOnly}
      />
      <label
        htmlFor={id}
        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
      >
        {labelText}
      </label>
    </div>
  );
}
