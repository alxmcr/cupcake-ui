import { OptionData } from '../../../types/appTypes';
import { OptionUser } from '../OptionUser';

type Props = {
  options: OptionData[];
  onClick: (idSelected?: string, nameSelected?: string) => void;
  idOptionSelected: string;
};

export default function ListOptionsUser({ options = [], onClick, idOptionSelected = '' }: Props) {
  return (
    <ol className="flex h-24 w-full flex-col gap-1 overflow-y-auto overflow-x-hidden md:w-[616px] lg:w-[970px]">
      {options.map((option) => (
        <OptionUser
          key={option.id}
          id={option.id}
          text={option.text}
          selected={idOptionSelected !== '' ? idOptionSelected === option.id : false}
          onClick={onClick}
        />
      ))}
    </ol>
  );
}
