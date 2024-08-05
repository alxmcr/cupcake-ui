import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { InfoUserProfile } from '../../02_molecules/InfoUserProfile';

type Props = {
  id: string;
  text: string;
  selected: boolean;
  onClickSelectOption: (idSelected?: string, nameSelected?: string) => void;
};

export default function OptionUser({ id = '', text = '', selected = false, onClickSelectOption }: Props) {
  const onClick = () => onClickSelectOption(id, text);

  return (
    <li
      id={id}
      className="flex h-[30px] w-[252px] cursor-pointer list-none items-center justify-between gap-1 rounded-lg p-4"
      onClick={onClick}
    >
      <InfoUserProfile selected={selected} text={text} />
      {selected ? <AppIcon16x16 iconName="icon-checkmark" className="text-cyan-700" /> : null}
    </li>
  );
}
