import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';
import { LabelOption } from '../../01_atoms/LabelOption';

type Props = {
  text: string;
  selected: boolean;
};

export default function InfoUserProfile({ text = '', selected = false }: Props) {
  if (selected) {
    <div className="flex items-center justify-between gap-2">
      <AppIcon16x16 iconName="icon-profile" />
      <LabelOption selectedItem text={text} />
    </div>;
  }

  return (
    <div className="flex items-center justify-between gap-2">
      <AppIcon16x16 iconName="icon-profile" />
      <LabelOption text={text} />
    </div>
  );
}
