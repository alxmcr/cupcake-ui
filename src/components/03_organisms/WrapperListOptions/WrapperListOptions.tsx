import { filterByText } from '../../../helpers/optionUserListHelpers';
import { OptionData } from '../../../types/appTypes';
import { SkeletonListOptionsUser } from '../../01_atoms/SkeletonListOptionsUser';
import { ListOptionsUser } from '../ListOptionsUser';

type Props = {
  options: OptionData[];
  optionSelected: OptionData | null;
  isLoadingOptions: boolean;
  searchText: string;
  isFiltering: boolean;
  onSelectOption: (option: OptionData) => void;
};

export default function WrapperListOptions({
  options = [],
  isLoadingOptions = false,
  searchText = '',
  isFiltering = false,
  optionSelected,
  onSelectOption,
}: Props) {
  const optionsToSort = isFiltering && searchText !== '' ? filterByText(options, searchText) : options;

  if (isLoadingOptions) {
    return (
      <div className="u-list-options-shadow max-h-[126px] w-[268px] -translate-y-4 rounded-lg bg-white md:w-[632px] lg:w-[996px]">
        <SkeletonListOptionsUser className="max-h-[126px] w-full" />
      </div>
    );
  }

  return (
    <div className="u-list-options-shadow max-h-[126px] w-[268px] -translate-y-4 rounded-lg bg-white p-2 md:w-[632px] lg:w-[996px]">
      <ListOptionsUser
        options={optionsToSort}
        onSelectOption={onSelectOption}
        idOptionSelected={optionSelected ? optionSelected.id : ''}
      />
    </div>
  );
}
