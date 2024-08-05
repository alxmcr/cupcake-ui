type Props = {
  id: string;
  text: string;
};

export default function OptionUser({ id = '', text = '' }: Props) {
  return (
    <li id={id}>
      <span>{text}</span>
    </li>
  );
}
