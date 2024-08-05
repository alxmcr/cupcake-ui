import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { LabelOption } from '../../01_atoms/LabelOption';

type Props = {
  id: string;
  text: string;
  selected: boolean;
};

export default function OptionUser({ id = '', text = '', selected = false }: Props) {
  if (selected) {
    return (
      <li
        id={id}
        className="flex h-[46px] w-[268px] list-none items-center justify-between gap-1 rounded-lg font-extrabold text-gray-800"
      >
        <div className="flex items-center justify-between gap-2">
          <AppIcon16x16 iconName="icon-profile" />
          <LabelOption text={text} selectedItem />
        </div>
        <AppIcon16x16 iconName="icon-checkmark" />
      </li>
    );
  }

  return (
    <li
      id={id}
      className="flex h-[46px] w-[268px] list-none items-center justify-between gap-1 rounded-lg text-gray-800"
    >
      <div className="flex items-center justify-between gap-2">
        <AppIcon16x16 iconName="icon-profile" className="text-gray-500" />
        <LabelOption text={text} />
      </div>
    </li>
  );
}
