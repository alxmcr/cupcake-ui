import { OptionData } from '../types/appTypes';

export const filterByText = (listOptions: OptionData[] = [], textToSearch = '') => {
  return listOptions.filter((option) => {
    return option.text.toLocaleLowerCase().trim().includes(textToSearch.toLocaleLowerCase().trim());
  });
};

export const sortByText = (listOptionsToSort: OptionData[] = []) => {
  return listOptionsToSort.sort((optionA, optionB) => {
    return optionA.text.localeCompare(optionB.text, undefined, {
      sensitivity: 'base',
    });
  });
};
