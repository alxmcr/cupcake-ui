import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { ControlComboBox } from '../ControlComboBox';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
  isLoadingOptions: boolean;
};

export default function ComboBox({ options = [], isLoadingOptions = false }: Props) {
  const comboBoxRef = React.useRef<HTMLDivElement>(null);
  const [isFiltering, setIsFiltering] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [idOptionSelected, setIdOptionSelected] = React.useState('');
  const [nameOptionSelected, setNameOptionSelected] = React.useState('');
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

  const onBlurComboBox = () => {};

  const onClickControlComboBox = (inputTextRef: React.RefObject<HTMLInputElement>) => {
    if (inputTextRef.current) {
      // Focus
      inputTextRef.current.focus();
      if (!isOpenComboBox) {
        setIsOpenComboBox(true);
      } else {
        inputTextRef.current.blur();
        setIsOpenComboBox(false);
      }
    }
  };

  const onChangeSearchText = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(ev.target.value);
    setIsFiltering(true);
  };

  const onSelectOption = (idSelected = '', nameSelected = '') => {
    setTimeout(() => {
      setNameOptionSelected(nameSelected);
      setIdOptionSelected(idSelected);
      setSearchText(nameSelected);
      setIsFiltering(false);
      // Close
      setIsOpenComboBox(false);
    }, 400);
  };

  React.useEffect(() => {
    const isOptionSelected = idOptionSelected !== '' && nameOptionSelected !== '';

    if (isOptionSelected) {
      setSearchText(nameOptionSelected);
    } else {
      if (isOpenComboBox) {
        setSearchText('');
      }
    }
  }, [isOpenComboBox, idOptionSelected, nameOptionSelected]);

  React.useEffect(() => {
    const onMouseDownComboBox = (ev: MouseEvent) => {
      if (comboBoxRef.current && !comboBoxRef.current.contains(ev.target as Node)) {
        setIsOpenComboBox(false);
      }
    };

    document.addEventListener('mousedown', onMouseDownComboBox);

    // Clean up
    return () => document.removeEventListener('mousedown', onMouseDownComboBox);
  }, []);

  return (
    <div ref={comboBoxRef}>
      <ControlComboBox
        id="ControlComboBox-text"
        inputType="text"
        labelText="Elige un usuario"
        captionText="Solo podrás elegir a Victor para continuar."
        name="user-name"
        searchText={searchText}
        onClickControlComboBox={onClickControlComboBox}
        onChangeSearchText={onChangeSearchText}
        onBlurComboBox={onBlurComboBox}
      />
      {isOpenComboBox ? (
        <WrapperListOptions
          options={options}
          isLoadingOptions={isLoadingOptions}
          searchText={searchText}
          isFiltering={isFiltering}
          idOptionSelected={idOptionSelected}
          onSelectOption={onSelectOption}
        />
      ) : null}
    </div>
  );
}
