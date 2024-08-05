import React from 'react';
import { Icon20x20 } from '../../00_icons/Icon20x20';
import { Caption } from '../../01_atoms/Caption';

type Props = {
  inputType: 'text' | 'email' | 'password' | 'search';
  id: string;
  name: string;
  readOnly?: boolean;
  captionText: string;
  labelText: string;
  searchText: string;
  onChangeSearchText: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onClickControlComboBox: (inputTextRef: React.RefObject<HTMLInputElement>) => void;
  onBlurComboBox: () => void;
};

export default function ControlComboBox({
  id = '',
  name = '',
  inputType = 'text',
  labelText = '',
  readOnly = false,
  captionText = '',
  searchText = '',
  onChangeSearchText,
  onClickControlComboBox,
  onBlurComboBox,
}: Props) {
  const inputTextRef = React.useRef<HTMLInputElement>(null);

  const onClick = () => onClickControlComboBox(inputTextRef);

  return (
    <div className="relative w-[268px] md:w-[632px] lg:w-[996px]" onClick={onClick}>
      <input
        ref={inputTextRef}
        type={inputType}
        id={id}
        name={name}
        className="peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-cyan-900 focus:outline-none focus:ring-0 "
        placeholder=" "
        readOnly={readOnly}
        autoComplete="off"
        value={searchText}
        onChange={onChangeSearchText}
        onBlur={onBlurComboBox}
      />
      <Caption text={captionText} />
      <label
        htmlFor={id}
        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-cyan-900 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 "
      >
        {labelText}
      </label>
      <div className="absolute right-4 top-[14px] z-20 size-[20px] duration-300 peer-focus:peer-placeholder-shown:rotate-180">
        <Icon20x20 iconName="icon-arrow-down" />
      </div>
    </div>
  );
}
