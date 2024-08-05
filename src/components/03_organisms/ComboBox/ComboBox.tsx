import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
};

export default function ComboBox({ options = [] }: Props) {
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const toggleComboBox = () => setIsOpenComboBox((prevIsOpen) => !prevIsOpen);

  return (
    <div>
      <div onClick={toggleComboBox}>Open combobox</div>
      {isOpenComboBox ? <WrapperListOptions options={options} /> : null}
    </div>
  );
}
