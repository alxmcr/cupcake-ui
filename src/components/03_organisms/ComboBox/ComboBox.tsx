import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { ControlComboBox } from '../ControlComboBox';
import { WrapperListOptions } from '../WrapperListOptions';
import { sortByText } from '../../../helpers/optionUserListHelpers';

type Props = {
  options: OptionData[];
  isLoadingOptions: boolean;
};

export default function ComboBox({ options = [], isLoadingOptions = false }: Props) {
  const [listOptions, setListOptions] = React.useState<OptionData[]>(options);
  const comboBoxRef = React.useRef<HTMLDivElement>(null);
  const [isFiltering, setIsFiltering] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [optionSelected, setOptionSelected] = React.useState<OptionData | null>(null);
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

  const onSelectOption = (optionWasSelected: OptionData) => {
    setTimeout(() => {
      setOptionSelected(optionWasSelected);
      setSearchText(optionWasSelected?.text);
      setIsFiltering(false);
      // Put on top the OptionSelected
      const removeOptionSelectedList = listOptions.filter((option) => option.id !== optionWasSelected.id);
      const sortRemoveOptionSelectedList = sortByText(removeOptionSelectedList);
      const listWithOptionSelectedOnTop = [optionWasSelected, ...sortRemoveOptionSelectedList];

      setListOptions(listWithOptionSelectedOnTop);
      // Close
      setIsOpenComboBox(false);
    }, 400);
  };

  React.useEffect(() => {
    const isOptionSelected = optionSelected?.id !== '' && optionSelected?.text !== '';

    if (isOptionSelected) {
      setSearchText(optionSelected?.text ? optionSelected?.text : '');
    } else {
      if (isOpenComboBox) {
        setSearchText('');
      }
    }
  }, [isOpenComboBox, optionSelected?.id, optionSelected?.text]);

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

  React.useEffect(() => {
    setListOptions(sortByText(options));
  }, [options]);

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
          options={listOptions}
          isLoadingOptions={isLoadingOptions}
          searchText={searchText}
          isFiltering={isFiltering}
          optionSelected={optionSelected}
          onSelectOption={onSelectOption}
        />
      ) : null}
    </div>
  );
}
