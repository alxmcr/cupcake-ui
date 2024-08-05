import { OptionData } from '../../../types/appTypes';
import { ListOptionsUser } from '../ListOptionUser';

type Props = {
  options: OptionData[];
  onClick: (idSelected?: string, nameSelected?: string) => void;
  idOptionSelected: string;
};

export default function WrapperListOptions({ options = [], onClick, idOptionSelected = '' }: Props) {
  return (
    <div className="u-list-options-shadow h-[114px] w-[268px] rounded-lg p-2">
      <ListOptionsUser options={options} onClick={onClick} idOptionSelected={idOptionSelected} />
    </div>
  );
}
