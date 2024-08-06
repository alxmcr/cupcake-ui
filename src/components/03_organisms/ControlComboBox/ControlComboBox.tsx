import React from 'react';
import { Icon20x20 } from '../../00_icons/Icon20x20';
import { Caption } from '../../01_atoms/Caption';
import { LabelFlotating } from '../../01_atoms/LabelFlotating';
import { Input } from '../../01_atoms/Input';

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
}: Props) {
  const inputTextRef = React.useRef<HTMLInputElement>(null);

  const onClick = () => onClickControlComboBox(inputTextRef);

  return (
    <div className="flex w-[268px] flex-col gap-1 md:w-[632px] lg:w-[996px]" onClick={onClick}>
      <div className="hover:u-list-options-shadow relative  max-h-[58px]  rounded-lg">
        <Input
          type={inputType}
          id={id}
          name={name}
          ref={inputTextRef}
          value={searchText}
          onChange={onChangeSearchText}
          autoComplete="off"
          readOnly={readOnly}
        />
        <LabelFlotating htmlFor={id} text={labelText} />

        <div className="absolute right-4 top-[9px] size-[20px] text-gray-500 duration-300 peer-focus:peer-placeholder-shown:rotate-180 peer-focus:peer-placeholder-shown:text-gray-600">
          <Icon20x20 iconName="icon-arrow-down" />
        </div>
      </div>
      <Caption text={captionText} />
    </div>
  );
}
