import { OptionData } from '../../../types/appTypes';
import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { InfoUserProfile } from '../../02_molecules/InfoUserProfile';

type Props = {
  option: OptionData;
  selected: boolean;
  onSelectOption: (option: OptionData) => void;
};

export default function OptionUser({ option, selected = false, onSelectOption }: Props) {
  const onClick = () => onSelectOption(option);

  return (
    <li
      id={option.id}
      className="flex h-[30px] w-full cursor-pointer list-none items-center justify-between gap-1 rounded-lg p-4 md:w-[616px] lg:w-[980px]"
      onClick={onClick}
    >
      <InfoUserProfile selected={selected} text={option.text} />
      {selected ? <AppIcon16x16 iconName="icon-checkmark" className="text-cyan-700" /> : null}
    </li>
  );
}
