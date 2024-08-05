import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { ControlComboBox } from '../ControlComboBox';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
};

export default function ComboBox({ options = [] }: Props) {
  const [comboBoxText, setComboBoxText] = React.useState('Elige un usuario');
  const [idOptionSelected, setIdOptionSelected] = React.useState('');
  const [nameOptionSelected, setNameOptionSelected] = React.useState('');
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const toggleComboBox = () => setIsOpenComboBox((prevIsOpen) => !prevIsOpen);

  const onClickSelectOption = (idSelected = '', nameSelected = '') => {
    setIdOptionSelected(idSelected);
    setNameOptionSelected(nameSelected);
    setIsOpenComboBox(false);
  };

  React.useEffect(() => {
    if (idOptionSelected !== '' && nameOptionSelected !== '') {
      setComboBoxText(nameOptionSelected);
    } else {
      if (isOpenComboBox) {
        setComboBoxText('Elige un usuario');
      } else {
        setComboBoxText('Elige un usuario');
      }
    }
  }, [isOpenComboBox, idOptionSelected, nameOptionSelected]);

  return (
    <div>
      <ControlComboBox
        id="ControlComboBox-text"
        inputType="text"
        labelText={comboBoxText}
        name="user-name"
        onClick={toggleComboBox}
      />
      {isOpenComboBox ? (
        <WrapperListOptions options={options} onClick={onClickSelectOption} idOptionSelected={idOptionSelected} />
      ) : null}
    </div>
  );
}
