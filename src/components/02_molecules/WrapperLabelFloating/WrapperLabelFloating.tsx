import { LabelFlotating } from '../../01_atoms/LabelFlotating';

type Props = {
  text: string;
};

export default function WrapperLabelFloating({ text = '' }: Props) {
  return (
    <div className="absolute bottom-[28px] left-[10px]">
      <LabelFlotating text={text} />
    </div>
  );
}
