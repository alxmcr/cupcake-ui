import { ComboBox } from '../../../components/03_organisms/ComboBox';
import mockUsersData from '../../../mocks/data/sample-options-user.json';

type Props = {
  title: string;
};

export default function PageTemplateComboBox({ title = '' }: Props) {
  return (
    <div className="h-[500px]">
      <h1 className="text-[50px]">{title}</h1>
      <ComboBox options={mockUsersData} />
    </div>
  );
}
