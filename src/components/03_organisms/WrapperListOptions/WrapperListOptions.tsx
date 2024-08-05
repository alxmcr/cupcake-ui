import { OptionData } from '../../../types/appTypes';
import { ListOptionsUser } from '../ListOptionUser';

type Props = {
  options: OptionData[];
};

export default function WrapperListOptions({ options = [] }: Props) {
  return (
    <div>
      <ListOptionsUser options={options} />
    </div>
  );
}
