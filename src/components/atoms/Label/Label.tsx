type Props = {
  htmlFor: string;
  text: string;
};

export default function Label({ htmlFor = '', text = '' }: Props) {
  return (
    <label htmlFor={htmlFor} className="font-inter">
      <span>{text}</span>
    </label>
  );
}
