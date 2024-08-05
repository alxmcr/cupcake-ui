type Props = {
  type: 'text' | 'email' | 'password' | 'search';
  name: string;
  id: string;
  placeholder: string;
  readOnly: boolean;
};

export default function Input({
  type = 'text',
  name = '',
  id = '',
  placeholder = '',
  readOnly = false,
}: Props) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      autoComplete="off"
      readOnly={readOnly}
      className="h-[38px] w-[268px] rounded-lg border border-gray-300 bg-white px-2 text-black outline-none focus:border-cyan-900"
    />
  );
}

/*
width: Fill (268px)px;
height: Fixed (38px)px;
padding: 8px 16px 8px 16px;
gap: 4px;
border-radius: 8px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;


*/
