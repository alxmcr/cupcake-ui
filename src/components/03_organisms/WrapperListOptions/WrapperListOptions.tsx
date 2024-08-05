import { OptionData } from '../../../types/appTypes';
import { SkeletonListOptionsUser } from '../../01_atoms/SkeletonListOptionsUser';
import { ListOptionsUser } from '../ListOptionsUser';

type Props = {
  options: OptionData[];
  onClick: (idSelected?: string, nameSelected?: string) => void;
  idOptionSelected: string;
  isLoadingOptions: boolean;
};

export default function WrapperListOptions({
  options = [],
  onClick,
  idOptionSelected = '',
  isLoadingOptions = false,
}: Props) {
  if (isLoadingOptions) {
    return (
      <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg md:w-[632px] lg:w-[996px]">
        <SkeletonListOptionsUser className="h-[114px] w-full" />
      </div>
    );
  }

  return (
    <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg p-2 md:w-[632px] lg:w-[996px]">
      <ListOptionsUser options={options} onClick={onClick} idOptionSelected={idOptionSelected} />
    </div>
  );
}
