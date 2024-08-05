import { LabelFlotating } from '../../01_atoms/LabelFlotating';

type Props = {
  text: string;
  htmlFor: string;
};

export default function WrapperLabelFloating({ text = '', htmlFor = '' }: Props) {
  return (
    <div className="absolute bottom-[28px] left-[10px]">
      <LabelFlotating text={text} htmlFor={htmlFor} />
    </div>
  );
}
