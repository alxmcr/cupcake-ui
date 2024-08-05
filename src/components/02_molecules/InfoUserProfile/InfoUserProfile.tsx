import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { LabelOption } from '../../01_atoms/LabelOption';

type Props = {
  text: string;
  selected?: boolean;
};

export default function InfoUserProfile({ text = '', selected = false }: Props) {
  if (selected) {
    return (
      <div className="flex h-[22px] items-center justify-between gap-2 text-gray-800">
        <AppIcon16x16 iconName="icon-profile" />
        <LabelOption selectedItem text={text} />
      </div>
    );
  }
  return (
    <div className="flex h-[22px] items-center justify-between gap-2 text-gray-500 hover:font-extrabold hover:text-gray-800">
      <AppIcon16x16 iconName="icon-profile" />
      <LabelOption text={text} />
    </div>
  );
}
