import React from 'react';
import { OptionData } from '../../../types/appTypes';
import { OptionUser } from '../OptionUser';

type Props = {
  options: OptionData[];
};

export default function ListOptionsUser({ options = [] }: Props) {
  const [optionSelectedId, setOptionSelectedId] = React.useState('');

  return (
    <ol className="flex h-24 w-[252px] flex-col gap-1 overflow-y-auto overflow-x-hidden">
      {options.map((option) => (
        <OptionUser
          key={option.id}
          id={option.id}
          text={option.text}
          selected={optionSelectedId !== '' ? optionSelectedId === option.id : false}
          setOptionSelectedId={setOptionSelectedId}
        />
      ))}
    </ol>
  );
}
