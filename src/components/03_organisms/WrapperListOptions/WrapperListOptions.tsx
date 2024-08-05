import { OptionData } from '../../../types/appTypes';
import { ListOptionsUser } from '../ListOptionUser';

type Props = {
  options: OptionData[];
};

//  box-shadow: 0 4px 8px rgba(64, 67, 68, 24%);
// shadow-[0px_4px_8px_0px_rgba(64, 67, 68, 24%)]

export default function WrapperListOptions({ options = [] }: Props) {
  return (
    <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg p-2">
      <ListOptionsUser options={options} />
    </div>
  );
}
