import AppIcon16x16 from '../../00_icons/Icon16x16/Icon16x16';

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
          <span className="font-inter">{text}</span>
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
        <span className="font-inter">{text}</span>
      </div>
    </li>
  );
}
