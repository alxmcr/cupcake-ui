import React from 'react';
import { Caption } from '../../01_atoms/Caption';
import { Input } from '../../01_atoms/Input';
import { LabelFlotating } from '../../01_atoms/LabelFlotating';
import { WrapperIconFloating } from '../../02_molecules/WrapperIconFloating';

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

        <WrapperIconFloating />
      </div>
      <Caption text={captionText} />
    </div>
  );
}
