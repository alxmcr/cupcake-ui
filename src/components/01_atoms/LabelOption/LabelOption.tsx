type Props = {
  text: string;
  selectedItem?: boolean;
};

export default function LabelOption({ text = '', selectedItem = false }: Props) {
  if (selectedItem) {
    return <span className="font-inter font-extrabold text-gray-800">{text}</span>;
  }
  return <span className="font-inter text-gray-800">{text}</span>;
}