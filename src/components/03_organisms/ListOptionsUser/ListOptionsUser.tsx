import { OptionData } from '../../../types/appTypes';
import { OptionUser } from '../OptionUser';

type Props = {
  options: OptionData[];
  idOptionSelected: string;
  onClickSelectOption: (idSelected?: string, nameSelected?: string) => void;
};

export default function ListOptionsUser({ options = [], idOptionSelected = '', onClickSelectOption }: Props) {
  if (options.length === 0) {
    return (
      <div className="flex h-[46px] w-full items-center justify-center md:w-[616px] lg:w-[970px]">
        <p>No users</p>
      </div>
    );
  }

  return (
    <ol className="flex max-h-[110px] w-full flex-col gap-1 overflow-y-auto overflow-x-hidden   md:w-[616px] lg:w-[980px]">
      {options.map((option) => (
        <OptionUser
          key={option.id}
          id={option.id}
          text={option.text}
          selected={idOptionSelected !== '' ? idOptionSelected === option.id : false}
          onClickSelectOption={onClickSelectOption}
        />
      ))}
    </ol>
  );
}
