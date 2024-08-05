import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';

type Props = {
  id: string;
  text: string;
  selected: boolean;
};

export default function OptionUser({ id = '', text = '', selected = false }: Props) {
  if (selected) {
    return (
      <li id={id} className="list-none font-semibold text-gray-800">
        <AppIcon16x16 iconName="icon-profile" />
        <span>{text}</span>
        <AppIcon16x16 iconName="icon-checkmark" />
      </li>
    );
  }

  return (
    <li id={id} className="list-none">
      <AppIcon16x16 iconName="icon-profile" />
      <span>{text}</span>
    </li>
  );
}
