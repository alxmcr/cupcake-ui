import { OptionData } from '../../../types/appTypes';
import { SkeletonListOptionsUser } from '../../01_atoms/SkeletonListOptionsUser';
import { ListOptionsUser } from '../ListOptionsUser';

type Props = {
  options: OptionData[];
  idOptionSelected: string;
  isLoadingOptions: boolean;
  searchText: string;
  onClickSelectOption: (idSelected?: string, nameSelected?: string) => void;
};

export default function WrapperListOptions({
  options = [],
  idOptionSelected = '',
  isLoadingOptions = false,
  searchText = '',
  onClickSelectOption,
}: Props) {
  const optionsFiltered =
    searchText === ''
      ? options
      : options.filter((option) =>
          option.text.toLocaleLowerCase().trim().includes(searchText.toLocaleLowerCase().trim()),
        );

  if (isLoadingOptions) {
    return (
      <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg md:w-[632px] lg:w-[996px]">
        <SkeletonListOptionsUser className="h-[114px] w-full" />
      </div>
    );
  }

  return (
    <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg p-2 md:w-[632px] lg:w-[996px]">
      <ListOptionsUser
        options={optionsFiltered}
        onClickSelectOption={onClickSelectOption}
        idOptionSelected={idOptionSelected}
      />
    </div>
  );
}
