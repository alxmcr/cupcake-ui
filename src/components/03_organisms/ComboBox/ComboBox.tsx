import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
};

export default function ComboBox({ options = [] }: Props) {
  const [comboBoxText, setComboBoxText] = React.useState('Open combobox');
  const [idOptionSelected, setIdOptionSelected] = React.useState('');
  const [nameOptionSelected, setNameOptionSelected] = React.useState('');
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const toggleComboBox = () => setIsOpenComboBox((prevIsOpen) => !prevIsOpen);

  const onClick = (idSelected = '', nameSelected = '') => {
    setIdOptionSelected(idSelected);
    setNameOptionSelected(nameSelected);
    setIsOpenComboBox(false);
  };

  React.useEffect(() => {
    if (idOptionSelected !== '' && nameOptionSelected !== '') {
      setComboBoxText(nameOptionSelected);
    } else {
      if (isOpenComboBox) {
        setComboBoxText('Close combobox');
      } else {
        setComboBoxText('Open combobox');
      }
    }
  }, [isOpenComboBox, idOptionSelected, nameOptionSelected]);

  return (
    <div>
      <div onClick={toggleComboBox}>{comboBoxText}</div>
      {isOpenComboBox ? (
        <WrapperListOptions options={options} onClick={onClick} idOptionSelected={idOptionSelected} />
      ) : null}
    </div>
  );
}
