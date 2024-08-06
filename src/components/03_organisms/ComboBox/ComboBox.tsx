import React from 'react';
import { TIMEOUT_SELECT_OPTION_MS } from '../../../helpers/constants';
import { sortByText } from '../../../helpers/optionUserListHelpers';
import { OptionData } from '../../../types/appTypes';
import { SkeletonComboBox } from '../../01_atoms/SkeletonComboBox';
import { ControlComboBox } from '../ControlComboBox';
import { WrapperListOptions } from '../WrapperListOptions';

type Props = {
  options: OptionData[];
  isLoadingOptions?: boolean;
};

export default function ComboBox({ options = [], isLoadingOptions = false }: Props) {
  const [listOptions, setListOptions] = React.useState<OptionData[]>(options);
  const comboBoxRef = React.useRef<HTMLDivElement>(null);
  const [isFiltering, setIsFiltering] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const [triggerSelectOption, setTriggerSelectOption] = React.useState(false);
  const [optionSelected, setOptionSelected] = React.useState<OptionData | null>(null);
  const [isOpenComboBox, setIsOpenComboBox] = React.useState(false);

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
    setTriggerSelectOption(true);
    // Actions
    setOptionSelected(optionWasSelected);
    setSearchText(optionWasSelected?.text);
    setIsFiltering(false);
    // Put on top the OptionSelected
    const removeOptionSelectedList = listOptions.filter((option) => option.id !== optionWasSelected.id);
    const sortRemoveOptionSelectedList = sortByText(removeOptionSelectedList);
    const listWithOptionSelectedOnTop = [optionWasSelected, ...sortRemoveOptionSelectedList];

    setListOptions(listWithOptionSelectedOnTop);
  };

  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (triggerSelectOption) {
      timer = setTimeout(() => {
        setTriggerSelectOption(false);

        // Actions
        setIsOpenComboBox(false);
      }, TIMEOUT_SELECT_OPTION_MS);
    }

    return () => clearTimeout(timer);
  }, [triggerSelectOption, listOptions, optionSelected?.id, optionSelected?.text]);

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

  if (isLoadingOptions) {
    return (
      <div className="h-8 w-[268px] md:w-[632px] lg:w-[996px]">
        <SkeletonComboBox className="w-full" />
      </div>
    );
  }

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
