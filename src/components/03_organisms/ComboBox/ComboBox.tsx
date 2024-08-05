import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { ControlComboBox } from '../ControlComboBox';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
  isLoadingOptions: boolean;
};

export default function ComboBox({ options = [], isLoadingOptions = false }: Props) {
  const [searchText, setSearchText] = React.useState('');
  const [idOptionSelected, setIdOptionSelected] = React.useState('');
  const [nameOptionSelected, setNameOptionSelected] = React.useState('');
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const onChangeSearchText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(ev.target.value);
  };

  const toggleComboBox = () => setIsOpenComboBox((prevIsOpen) => !prevIsOpen);

  const onClickSelectOption = (idSelected = '', nameSelected = '') => {
    setIdOptionSelected(idSelected);
    setNameOptionSelected(nameSelected);
    setSearchText(nameSelected);
    setIsOpenComboBox(false);
  };

  React.useEffect(() => {
    if (idOptionSelected !== '' && nameOptionSelected !== '') {
      setSearchText(nameOptionSelected);
    } else {
      if (isOpenComboBox) {
        setSearchText('');
      }
    }
  }, [isOpenComboBox, idOptionSelected, nameOptionSelected]);

  return (
    <div>
      <ControlComboBox
        id="ControlComboBox-text"
        inputType="text"
        labelText="Elige un usuario"
        name="user-name"
        onClick={toggleComboBox}
        searchText={searchText}
        onChangeSearchText={onChangeSearchText}
        captionText="Solo podrás elegir a Victor para continuar."
      />
      {isOpenComboBox ? (
        <WrapperListOptions
          options={options}
          onClick={onClickSelectOption}
          idOptionSelected={idOptionSelected}
          isLoadingOptions={isLoadingOptions}
        />
      ) : null}
    </div>
  );
}
