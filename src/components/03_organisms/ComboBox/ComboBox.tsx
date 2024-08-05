import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
};

export default function ComboBox({ options = [] }: Props) {
  const [comboBoxText, setComboBoxText] = React.useState('Open combobox');
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const toggleComboBox = () => setIsOpenComboBox((prevIsOpen) => !prevIsOpen);

  React.useEffect(() => {
    if (isOpenComboBox) {
      setComboBoxText('Close combobox');
    } else {
      setComboBoxText('Open combobox');
    }
  }, [isOpenComboBox]);

  return (
    <div>
      <div onClick={toggleComboBox}>{comboBoxText}</div>
      {isOpenComboBox ? <WrapperListOptions options={options} /> : null}
    </div>
  );
}
